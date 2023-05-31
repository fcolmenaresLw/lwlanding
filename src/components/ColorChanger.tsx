import React, { useState } from 'react';

interface ColorChangerProps {}

interface ColorChangerState {
  color: string;
}

const ColorChanger: React.FC<ColorChangerProps> = () => {
  const [color, setColor] = useState<string>('white');

  const changeColor = () => {
    const newColor = color === 'white' ? 'pink' : 'white';
    document.body.style.backgroundColor = newColor;
    setColor(newColor);
  };

  return (
    <div>
      <button onClick={changeColor}>Cambiar color</button>
    </div>
  );
};

export default ColorChanger;
