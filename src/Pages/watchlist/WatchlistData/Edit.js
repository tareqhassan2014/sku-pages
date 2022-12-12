import React, { useState } from 'react';
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import { Button, IconButton, TextField } from "@mui/material";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { md: "30vw", xs: "90vw", sm: "90vw" },
  bgcolor: "background.paper",
  //   border: "1px solid #000",
  borderRadius: 2,
  boxShadow: 0,
  px: 3,
  py: 1,
};

const Edit = ({ edit, handleCloseEdit, data, setData, view }) => {
    const [update, setUpdate] = useState("");

    const up = [...data,{name:update}]
    // console.log(up);
    
    return (
      <>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={edit}
          onClose={handleCloseEdit}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={edit}>
            <Box sx={style}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  mb: 1,
                }}
              >
                <Typography
                  id="transition-modal-title"
                  variant="h6"
                  component="h2"
                >
                  Edit watchlist
                </Typography>
                <IconButton color="error" onClick={handleCloseEdit}>
                  <CloseOutlinedIcon />
                </IconButton>
              </Box>
              <TextField
                fullWidth
                sx={{ mt: 2, mb: 5 }}
                id="outlined-basic"
                label={view?.name || data[0].name}
                variant="outlined"
                value={update}
                onChange={(e) => {
                  setUpdate(e.target.value);
                }}
              />
              <Box sx={{textAlign:'end',mb:2}}>
                <Button sx={{mx:2}} variant="outlined" color="inherit">Update</Button>
                <Button variant="contained" color="error" onClick={handleCloseEdit}>Close</Button>  
              </Box>
            </Box>
          </Fade>
        </Modal>
      </>
    );
};

export default Edit;