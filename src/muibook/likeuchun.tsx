import { useState } from "react";
import { ToggleButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";

export default function ToggleFavoriteButton() {
  const [selected, setSelected] = useState(false);

  return (
    <ToggleButton
      value="check"
      selected={selected}
      onChange={() => setSelected(!selected)}
      color="error"
      sx={{
        width: 40,
        height: 40,
        minWidth: 0,
        p: 0,
        backgroundColor: "#fff !important",  // <-- bu bilan doim oq bo'ladi
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        "&:hover": {
          backgroundColor: "#f0f0f0 !important"
        },
        "&.Mui-selected": {
          backgroundColor: "#fff !important",
          "&:hover": {
            backgroundColor: "#f0f0f0 !important"
          }
        }
      }}
    >
      <FavoriteIcon sx={{ fontSize: 20, marginTop: "10px" }} />
    </ToggleButton>
  );
}
