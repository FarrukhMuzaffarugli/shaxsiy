import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import doktor from "../Rasm/videouchun2.png";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 630,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
      <div
        onClick={handleOpen} /* Entire image becomes a button */
        style={{
          position: "relative",
          display: "inline-block",
          cursor: "pointer",
        }}
      >
        <img
          src={doktor}
          alt="logo"
          style={{
            width: "540px",
            height: "625px",
            flexShrink: 0,
            display: "block", /* Removes extra space below image */
          }}
        />
        <button
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            color: "white",
            border: "none",
            borderRadius: "50%",
            width: "60px",
            height: "60px",
            fontSize: "24px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
          }}
        >
          ▶
        </button>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/eQAkzS7mP8I?si=q0U_K7J9BPoE54Zr"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </Box>
      </Modal>
    </div>
  );
}

