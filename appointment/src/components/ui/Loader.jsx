import SilkBackground from './SilkBackground';

const Loader = ({ alt = "Loading...", className = "w-44 h-24 mx-auto" }) => (
  <div 
    className="fixed inset-0 z-[9999]" 
    role="dialog" 
    aria-modal="true"
    aria-labelledby="loading-status"
  >
    <div className="absolute inset-0">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <SilkBackground color="#0f172b" speed={5} noiseIntensity={1} />
      </div>
      
      <div className="absolute inset-0 bg-slate-900/50"></div>
    </div>
    
    <div className="relative z-10 h-full w-full flex flex-col items-center justify-center">
      <div role="status" aria-live="polite">
        <img
          src="/loader.webp"
          alt={alt}
          className={className}
          width={126}
          height={96}
          loading="eager"
          aria-busy="true"
        />
        <p 
          id="loading-status" 
          className="text-white text-lg mt-4 font-medium text-center"
        >
          Loading...
        </p>
      </div>
    </div>
  </div>
);

export default Loader;