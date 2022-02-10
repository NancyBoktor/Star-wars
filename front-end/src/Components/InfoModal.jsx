import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import DropList from "./DropList";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function InfoModal(props) {
  const { info, handleClose, open } = props;
  console.log("mmmm", info);
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Name : {info.name}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Height : {info.height}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Mass : {info.mass}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Hair Color : {info.hair_color}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Skin Color : {info.skin_color}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Gender : {info.eye_color}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Birth Year : {info.birth_year}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
