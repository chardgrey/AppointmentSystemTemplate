import { useRef, useState, useCallback } from "react";

const SpotlightCard = ({ children, className = "", spotlightColor = "rgba(255, 255, 255, 0.25)" }) => {
  const divRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0, opacity: 0 });

  // Throttle mouse move updates using useCallback for better performance
  const handleMouseMove = useCallback(
    (e) => {
      if (!divRef.current) return;

      // Skip processing if the event is fired too frequently
      if (handleMouseMove.lastRun && Date.now() - handleMouseMove.lastRun < 30) return;
      handleMouseMove.lastRun = Date.now();

      const rect = divRef.current.getBoundingClientRect();
      setPosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        opacity: 0.6,
      });
    },
    [divRef]
  );

  // Combined handlers for better performance
  const handleMouseEnter = useCallback(() => {
    setPosition((prev) => ({ ...prev, opacity: 0.6 }));
  }, []);

  const handleMouseLeave = useCallback(() => {
    setPosition((prev) => ({ ...prev, opacity: 0 }));
  }, []);

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative rounded-3xl border border-gray-200 bg-neutral-900 overflow-hidden p-2 sm:p-6 md:p-8 ${className}`}
    >
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300 ease-out"
        style={{
          opacity: position.opacity,
          background:
            position.opacity > 0
              ? `radial-gradient(circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 80%)`
              : "none",
        }}
      />
      {children}
    </div>
  );
};

export default SpotlightCard;