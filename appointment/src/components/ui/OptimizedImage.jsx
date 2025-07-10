import { useState, useEffect } from 'react';

const OptimizedImage = ({ 
  src, 
  alt, 
  width, 
  height, 
  className = '',
  loadingStrategy = 'lazy' // 'lazy', 'eager', or 'auto'
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(loadingStrategy === 'eager');
  
  useEffect(() => {
    if (loadingStrategy === 'lazy') {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        },
        { rootMargin: '200px' }
      );
      
      const currentElement = document.getElementById(`img-container-${src}`);
      if (currentElement) observer.observe(currentElement);
      
      return () => {
        if (currentElement) observer.unobserve(currentElement);
      };
    }
  }, [src, loadingStrategy]);

  // Convert .png or .jpg to .webp
  const getWebpSource = (imgSrc) => {
    if (imgSrc.includes('.png') || imgSrc.includes('.jpg') || imgSrc.includes('.jpeg')) {
      return imgSrc.replace(/\.(png|jpg|jpeg)$/, '.webp');
    }
    return imgSrc;
  };

  return (
    <div 
      id={`img-container-${src}`}
      className={`relative overflow-hidden ${className}`}
      style={{ width, height, backgroundColor: '#f1f5f9' }}
    >
      {isInView && (
        <picture>
          <source srcSet={getWebpSource(src)} type="image/webp" />
          <source srcSet={src} type={`image/${src.split('.').pop()}`} />
          <img
            src={src}
            alt={alt}
            width={width}
            height={height}
            loading={loadingStrategy}
            onLoad={() => setIsLoaded(true)}
            className={`w-full h-full object-cover transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          />
        </picture>
      )}
    </div>
  );
};

export default OptimizedImage;
