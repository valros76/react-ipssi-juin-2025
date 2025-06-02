import { useState } from "react";
import "./Review.css";
export default function Review({ maxStars = 5 }) {
  const [rating, setRating] = useState(0);
  const [hovered, setHovered] = useState(0);

  const handleClick = (value: number) => {
    setRating(value);
  };

  return (
    <>
      {Array.from({ length: maxStars }, (_, i) => {
        const value = i + 1;
        return (
          <i
            key={value}
            className="material-symbols-outlined star"
            onClick={() => handleClick(value)}
            onMouseEnter={() => setHovered(value)}
            onMouseLeave={() => setHovered(0)}
            style={{
              cursor: 'pointer',
              color: (hovered || rating) >= value ? '#FFD700' : '#ccc',
            }}
          >
            star
          </i>
        );
      })}
    </>
  );
}
