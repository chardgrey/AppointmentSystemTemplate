import Silk from './Silk';

const SilkBackground = ({ color = "#1b2333", speed = 6, noiseIntensity = 1.5, className = "" }) => {
  return (
    <div className={`absolute inset-0 z-0 overflow-hidden ${className}`}>
      <Silk 
        color={color} 
        speed={speed} 
        noiseIntensity={noiseIntensity} 
        scale={0.5} 
        rotation={0}
        // Math.PI / 4
      />
    </div>
  );
};

export default SilkBackground;
