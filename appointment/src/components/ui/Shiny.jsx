const ShinyText = ({ text, accentText, disabled = false, speed = 5, className = '', accentClassName = 'text-indigo-500' }) => {
  const animationDuration = `${speed}s`;

  if (accentText) {
    const textParts = text.split(accentText);
    
    return (
      <div
        className={`shiny-text ${disabled ? 'disabled' : ''} ${className}`}
        style={{ animationDuration }}
      >
        {textParts[0]}
        <span className={accentClassName}>{accentText}</span>
        {textParts.length > 1 ? textParts.slice(1).join(accentText) : ''}
      </div>
    );
  }

  // Original behavior if no accentText is provided
  return (
    <div
      className={`shiny-text ${disabled ? 'disabled' : ''} ${className}`}
      style={{ animationDuration }}
    >
      {text}
    </div>
  );
};

export default ShinyText;
