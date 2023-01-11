import React, { useState } from 'react';

const Square = ({ onClick }) => {
  return <div onClick={onClick} className="square"></div>;
};

const Sheet = () => {
  const [pickedSquares, setPickedSquares] = useState([]);

  const handleClick = (square) => {
    localStorage.setItem('pickedSquare', square);
    setPickedSquares([...pickedSquares, square]);
  };

  return (
    <div className="sheet">
      {Array(100)
        .fill(null)
        .map((_, index) => (
          <Square key={index} onClick={() => handleClick(index)} />
        ))}
    </div>
  );
};

export default Sheet;
