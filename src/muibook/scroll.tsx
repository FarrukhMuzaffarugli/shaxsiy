import { useState } from "react";
import { Box, IconButton, Typography } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { products } from "../mockdate/tabletka";
import React from "react"; 

interface Product {
  id: number;
  image: string;
  name: string;
  originalPrice: number;
  discountedPrice: number;

}

interface ScrollableColumnProps {
  onImageSelect: (product: Product) => void;
  
}

type Direction = 'up' | 'down';

const ScrollableColumn: React.FC<ScrollableColumnProps> = ({ onImageSelect }) => {
  const [startIndex, setStartIndex] = useState<number>(0);
  const visibleItemsCount = 3;

  const scroll = (direction: Direction) => {
    if (direction === "up") {
      setStartIndex((prevIndex) =>
        prevIndex === 0 ? products.length - visibleItemsCount : prevIndex - 1
      );
    } else {
      setStartIndex((prevIndex) =>
        prevIndex + visibleItemsCount >= products.length ? 0 : prevIndex + 1
      );
    }
  };

  const currentVisibleProducts = products.slice(
    startIndex,
    startIndex + visibleItemsCount
  );

  if (currentVisibleProducts.length < visibleItemsCount) {
    currentVisibleProducts.push(
      ...products.slice(0, visibleItemsCount - currentVisibleProducts.length)
    );
  }

  return (
    <Box
      sx={{
        width: 139,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        border: "1px solid #ccc",
        borderRadius: "8px",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <IconButton onClick={() => scroll("up")} size="small">
        <KeyboardArrowUpIcon />
      </IconButton>

      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          position: "relative",
        }}
      >
        {currentVisibleProducts.map((product: Product) => {
          const discountPercentage = Math.round(
            ((product.originalPrice - product.discountedPrice) / product.originalPrice) * 100
          );
          return (
            <Box
              key={product.id}
              sx={{
                position: "relative",
                width: "100%",
                height: "100%",
                cursor: "pointer",
              }}
              onClick={() => onImageSelect(product)}
            >
              <img
                src={product.image}
                alt={product.name}
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "8px",
                }}
              />

              <Typography
                sx={{
                  position: "absolute",
                  top: "5px",
                  left: "5px",
                  backgroundColor: "rgba(255, 0, 0, 0.7)",
                  color: "#fff",
                  padding: "2px 8px",
                  fontSize: "12px",
                  borderRadius: "5px",
                }}
              >
                {discountPercentage}% OFF
              </Typography>

              <Box
                sx={{
                  position: "absolute",
                  bottom: "5px",
                  left: "5px",
                  backgroundColor: "rgba(0, 0, 0, 0.6)",
                  color: "#fff",
                  padding: "5px",
                  borderRadius: "5px",
                  textAlign: "center",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "12px",
                    textDecoration: "line-through",
                  }}
                >
                  ${product.originalPrice.toFixed(2)}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: "bold",
                  }}
                >
                  ${product.discountedPrice.toFixed(2)}
                </Typography>
              </Box>
            </Box>
          );
        })}
      </Box>

      <IconButton onClick={() => scroll("down")} size="small">
        <KeyboardArrowDownIcon />
      </IconButton>
    </Box>
  );
};

export default ScrollableColumn;






