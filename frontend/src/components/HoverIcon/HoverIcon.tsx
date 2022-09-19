import React, { useState } from 'react';

// Takes an icon and something to display on hover as input

interface Props {
  icon: JSX.Element;
  onHover: JSX.Element;
}

function HoverIcon({icon, onHover}: Props) {
  const [isHover, setIsHover] = useState(false);
  
  const handleOnHover = () => {
    setIsHover(true);
  }

  const handleOffHover = () => {
    setIsHover(false);
  }

  return (
    <div style={{display: 'inline-block'}}onMouseOver={handleOnHover} onMouseOut={handleOffHover}>
      {icon}
      {isHover && (
        // style this position of this div?
        <div>
          {onHover}
        </div>
      )}
    </div>
  )
}

export default HoverIcon;