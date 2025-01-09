import React from "react";
import { FaStar } from "react-icons/fa";

interface StarRatingProps {
  rating: number; 
}

const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
  const totalStars = 5; 

 
  const starStyle = {
    color: "gold",
    marginRight: "2px",
  };

  return (
    <div style={{ display: "flex", gap: "2px" }}>
      {Array.from({ length: totalStars }).map((_, index) => {
       
        const starNumber = index + 1;

        return (
          <FaStar
            key={starNumber}
            style={{
              marginTop: "16px",
              color: starNumber <= rating ? "gold" : "#ccc",
              marginRight: "2px",
            }}
          />
        );
      })}
    </div>
  );
};

export default StarRating;
