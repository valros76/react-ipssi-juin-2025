import { useState } from "react";
import "./ReviewComponent.css";

export default function ReviewComponent({ maxStars = 5 }){
  const [rating, setRating] = useState(0);
  const [hovered, setHovered] = useState(0);

  const onRating = (value: number) => {
    setRating(value);
  }

  return(
    <>
      {Array.from({ length: maxStars }, (_, i) => {
        const value = i + 1;
        return(<div className="stars-container" key={value}><i
          className="material-symbols-outlined"
          onClick={() => onRating(value)}
          onMouseEnter={() => setHovered(value)}
          onMouseLeave={() => setHovered(0)}
          style={{
            cursor: "pointer",
            color: (hovered || rating) >= value ? "#FFD700" : "#ccc"
          }}
        >star</i><span className="star-label">{value}</span></div>);
      })}
    </>
  );
}