import React from "react";
import { FaStar } from "react-icons/fa";

interface ProductStarRatingProps {
  rating: number; 
}

const ProductStarRating: React.FC<ProductStarRatingProps> = ({ rating }) => {
  const totalStars = 5; 

  return (
    <div style={{ display: "flex", gap: "2px" }}>
      {Array.from({ length: totalStars }).map((_, index) => {
        const starNumber = index + 1;

        return (
          <FaStar
            key={starNumber}
            style={{
              color: starNumber <= rating ? "gold" : "#ccc",
              marginRight: "2px",
            }}
          />
        );
      })}
    </div>
  );
};

export default ProductStarRating;
