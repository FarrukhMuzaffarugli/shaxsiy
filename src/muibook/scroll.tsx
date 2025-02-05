import { useState } from "react";
import { Box, IconButton, Typography } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import React from "react";
import { TDorilar } from "../mock/Tdorilar";

interface ScrollableColumnProps {
  products: TDorilar[];
  onImageSelect: (product: TDorilar) => void;
}

type Direction = "up" | "down";

const ScrollableColumn: React.FC<ScrollableColumnProps> = ({ products, onImageSelect }) => {
  const visibleItemsCount = 3;

  // Faqatgina discountedPrice maydoni null emas bo'lgan mahsulotlarni tanlaymiz.
  // Type predicate orqali TypeScript-ga filtrlangan mahsulotlarda discountedPrice
  // aniq number ekanligini bildirib beramiz.
  const discountProducts = products.filter(
    (product): product is TDorilar & { discountedPrice: number } =>
      product.discountedPrice !== null && product.discountedPrice !== undefined
  );

  const isScrollable = discountProducts.length > visibleItemsCount;
  const [startIndex, setStartIndex] = useState<number>(0);

  const scroll = (direction: Direction) => {
    if (!isScrollable) return; // Agar mahsulotlar 3 tadan kam bo'lsa, scroll ishlamaydi.

    setStartIndex((prevIndex) => {
      if (direction === "up") {
        return prevIndex === 0
          ? discountProducts.length - visibleItemsCount
          : prevIndex - 1;
      } else {
        return prevIndex + visibleItemsCount >= discountProducts.length ? 0 : prevIndex + 1;
      }
    });
  };

  // Faqatgina visibleItemsCount (3 ta) mahsulot ko'rsatiladi
  const currentVisibleProducts = discountProducts.slice(startIndex, startIndex + visibleItemsCount);

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
      {isScrollable && (
        <IconButton onClick={() => scroll("up")} size="small">
          <KeyboardArrowUpIcon />
        </IconButton>
      )}

      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          position: "relative",
          justifyContent: "center",
        }}
      >
        {currentVisibleProducts.map((product) => {
          const discountPercentage = Math.round(
            ((product.originalPrice - product.discountedPrice) / product.originalPrice) * 100
          );

          return (
            <Box
              key={product.id}
              sx={{
                position: "relative",
                width: "100%",
                height: "158px",
                cursor: "pointer",
              }}
              onClick={() => onImageSelect(product)}
            >
              <img
                src={product.image}
                alt={product.name}
                style={{
                  width: "100%",
                  height: "158px",
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

      {isScrollable && (
        <IconButton onClick={() => scroll("down")} size="small">
          <KeyboardArrowDownIcon />
        </IconButton>
      )}
    </Box>
  );
};

export default ScrollableColumn;










