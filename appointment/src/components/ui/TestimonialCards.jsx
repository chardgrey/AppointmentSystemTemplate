import { Star, MessageSquareQuote } from 'lucide-react';
import { memo } from 'react';

const TestimonialCard = memo(({ testimonial, isVisible, index }) => {
  return (
    <article 
      className="bg-gray-50 rounded-xl p-8 transform transition-all duration-300 hover:shadow-lg relative"
      data-aos="fade-up"
      data-aos-delay={index * 100} 
    >
      <div className="invisible md:visible absolute -top-3 -left-3 text-primary-500 opacity-20">
        <MessageSquareQuote size={40} />
      </div>
      
      <figure className="mb-6 relative z-10">
        <figcaption className="flex items-center mb-4">
          {isVisible && (
            <img
              className="h-12 w-12 rounded-full object-cover"
              src={testimonial.image}
              alt={`${testimonial.name}, ${testimonial.role}`}
              loading="lazy"
              width="48"
              height="48"
              fetchpriority="low"
              decoding="async"
            />
          )}
          <div className="ml-4">
            <cite className="font-semibold text-gray-900 not-italic">{testimonial.name}</cite>
            <p className="text-gray-600 text-sm">{testimonial.role}</p>
          </div>
        </figcaption>
        <blockquote className="text-gray-700 italic">{testimonial.content}</blockquote>
      </figure>
      <div className="flex mt-4" aria-label={`Rated ${testimonial.rating || 5} out of 5 stars`}>
        {[...Array(testimonial.rating || 5)].map((_, i) => (
          <Star key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" aria-hidden="true" />
        ))}
      </div>
    </article>
  );
});

export default TestimonialCard;