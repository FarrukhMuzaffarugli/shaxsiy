import { useState } from "react";
import { TextField, IconButton, Box } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import React from "react"; // React tiplari uchun import

export default function QuantityField() {
  const [quantity, setQuantity] = useState<number>(1);
  const [inputValue, setInputValue] = useState<string>("1");

  const handleIncrement = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    setInputValue(newQuantity.toString());
  };

  const handleDecrement = () => {
    const newQuantity = Math.max(1, quantity - 1);
    setQuantity(newQuantity);
    setInputValue(newQuantity.toString());
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    if (/^\d*$/.test(val)) {
      setInputValue(val);
      const num = parseInt(val, 10);
      if (!isNaN(num) && num >= 1) {
        setQuantity(num);
      }
    }
  };

  const handleBlur = () => {
    if (
      inputValue === "" ||
      isNaN(parseInt(inputValue, 10)) ||
      parseInt(inputValue, 10) < 1
    ) {
      setQuantity(1);
      setInputValue("1");
    }
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      width="142px"
      height="56px"
      borderRadius="61px"
      border="solid 1px gray"
    >
      <IconButton onClick={handleDecrement}>
        <RemoveIcon style={{ width: "18px", height: "18px" }} />
      </IconButton>

      <TextField
        type="text" 
        value={inputValue}
        onChange={handleInputChange}
        onBlur={handleBlur}
        inputProps={{
          inputMode: "numeric",
          pattern: "[0-9]*",
          style: { textAlign: "center" },
        }}
        sx={{
          border: "none",
          width: "80px",
          "& input": {
            textAlign: "center",
            MozAppearance: "textfield",
          },
          "& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button": {
            WebkitAppearance: "none",
            margin: 0,
          },
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              border: "none",
            },
            "&:hover fieldset": {
              border: "none",
            },
            "&.Mui-focused fieldset": {
              border: "none",
            },
          },
        }}
      />

      <IconButton onClick={handleIncrement}>
        <AddIcon style={{ width: "18px", height: "18px" }} />
      </IconButton>
    </Box>
  );
}



