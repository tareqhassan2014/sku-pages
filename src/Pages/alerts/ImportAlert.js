import {
  Backdrop,
  Button,
  Fade,
  IconButton,
  Link,
  Modal,
  Typography,
} from "@mui/material";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { Box } from "@mui/system";
import React from "react";
const styleM = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { md: "30vw", xs: "90vw", sm: "90vw" },
  bgcolor: "white",
  //   border: "1px solid #000",
  borderRadius: 3,
  boxShadow: 0,
  px: 3,
  py: 1,
};

const ImportAlert = ({ openAddImport, handleCloseImportAdd }) => {
  return (
    <>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openAddImport}
        onClose={handleCloseImportAdd}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openAddImport}>
          <Box sx={styleM}>
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
                variant="body"
              >
                Please make sure there are no duplicate rows
              </Typography>
              <IconButton color="error" onClick={handleCloseImportAdd}>
                <CloseOutlinedIcon />
              </IconButton>
            </Box>
            <input
              style={{
                padding: "10px",
                border: "1px solid #ced4da",
                marginBottom: "15px",
                width: "90%",
              }}
              type="file"
              accept="image/*"
              multiple
            />
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                my: 2 
              }}
            >
              <Link
                href="https://docs.google.com/uc?export=download&id=1OazkOX0PmJi6STEdI8jq15YHQFGDGjss"
                underline="none"
              >
                Download Template
              </Link>
              <Box sx={{ textAlign: "end"}}>
                <Button
                  size="small"
                  sx={{ mx: 2 }}
                  variant="contained"
                  color="inherit"
                  onClick={handleCloseImportAdd}
                >
                  Import
                </Button>

                <Button
                  size="small"
                  variant="outlined"
                  color="inherit"
                  onClick={handleCloseImportAdd}
                >
                  Close
                </Button>
              </Box>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </>
  );
};

export default ImportAlert;
