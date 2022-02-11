import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import DropList from "./DropList";
import "./InfoModal.css";
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
  overflow: "scroll",
  maxHeight: 500,
};

export default function InfoModal(props) {
  const { info, handleClose, open } = props;

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
            Name : {info.name} <br />
            Height : {info.height} <br />
            Mass : {info.mass} <br />
            Hair Color : {info.hair_color} <br />
            Skin Color : {info.skin_color} <br />
            Gender : {info.eye_color} <br />
            Birth Year : {info.birth_year} <br />
          </Typography>

          <div className="drop-list-modal">
            {info.homeworld && (
              <div className="list">
                Home planet
                <DropList data={info["homeworld"]} />
              </div>
            )}
            {info.species && (
              <div className="list">
                Species
                <DropList data={info["species"]} />
              </div>
            )}
            {info.films && (
              <div className="list">
                Films
                <DropList data={info["films"]} />
              </div>
            )}
          </div>
        </Box>
      </Modal>
    </div>
  );
}
