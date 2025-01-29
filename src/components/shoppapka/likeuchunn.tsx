import { useState } from "react";
import { ToggleButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";

export default function FavoriteButton() {
  const [selected, setSelected] = useState(false);

  return (
    <ToggleButton
      value="check"
      selected={selected}
      onChange={() => setSelected(!selected)}
      color="error"
      size="small"
      aria-label="toggle favorite"
      sx={{
        borderRadius: 60,
        width: 54, 
        minWidth: 54, 
        p: 0, 
        backgroundColor: "#fff !important",
        "&:hover": {
          backgroundColor: "#f0f0f0 !important"
        },
        "&.Mui-selected": {
          backgroundColor: "#fff !important",
          "&:hover": {
            backgroundColor: "#f0f0f0 !important"
          }
        },
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <FavoriteIcon
        sx={{
          fontSize: 24, 
          color: selected ? "error.main" : "inherit" 
        }}
      />
    </ToggleButton>
  );
}
