import { Box } from "@mui/system";
import React, { useState } from "react";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import {
  Button,
  FormControl,
  IconButton,
  InputBase,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import AddIcon from "@mui/icons-material/Add";
import AddNewWatchlist from "./AddNewWatchlist";
import Edit from "./Edit";
import Remove from "./Remove";
import ChooseSKU from "./ChooseSKU";
import Layout from "./Layout";
import SkuTable from "./SkuTable";
import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";

const styleM = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { md: "30vw", xs: "90vw", sm: "90vw" },
  bgcolor: "white",
  //   border: "1px solid #000",
  borderRadius: 1,
  boxShadow: 0,
  px: 3,
  py: 1,
};

/* Paper style */
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.subtitle1,
  padding: theme.spacing(1),
  textAlign: "center",
  boxShadow: "none",
  color: theme.palette.text.secondary,
}));

const WatchlistTable = () => {
  /*  Search */
  const [search, setSearch] = useState([]);
  // console.log(search);

  /* select */
  const [select, setSelect] = useState("");

  /* Modals */
  const [addNew, setAddNew] = useState(false);
  const handleCloseNew = () => setAddNew(false);
  const handleShowNew = () => setAddNew(true);
  // Pop -Up chooseSKU
  const [chooseSKU, setChooseSKU] = useState(false);
  const handleCloseSKU = () => setChooseSKU(false);
  const handleShowSKU = () => setChooseSKU(true);

  // Pop -Up Edit
  const [edit, setEdit] = useState(false);
  const handleCloseEdit = () => setEdit(false);
  const handleShowEdit = () => setEdit(true);

  // Pop -Up Remove
  const [remove, setRemove] = useState(false);
  const handleCloseRemove = () => setRemove(false);
  const handleShowRemove = () => setRemove(true);

  // Pop -Up Layout
  const [layout, setLayout] = useState(false);
  const [scroll, setScroll] = useState("paper");
  const handleCloseLayout = () => setLayout(false);
  const handleShowLayout = (scrollType) => () => {
    setLayout(true);
    setScroll(scrollType);
  };

  /* New */
  const [newD, setNewD] = useState("");
  const [data, setData] = useState("");
  console.log(data);
  const [openNew, setOpenNew] = useState(false);
  const handleCloseNewD = () => setOpenNew(false);
  const handleShowNewD = () => setOpenNew(true);
  let nextId = 0;
  return (
    <>
      <Box sx={{ border: "1px solid #ced4da", borderRadius: 1, m: 5 }}>
        {data?.length ? (
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={{ xs: 1, sm: 1, md: 1 }}
            sx={{ m: 3 }}
          >
            <Item>
              <Paper
                component="form"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  maxWidth: "300px",
                  boxShadow: 0,
                  border: "1px solid #ced4da",
                  borderRadius: 1,
                }}
              >
                <Button
                  sx={{ px: 0 }}
                  size="small"
                  variant="contained"
                  aria-label="search"
                >
                  <SearchIcon />
                </Button>

                <InputBase
                  sx={{ ml: 1, flex: 1 }}
                  type="search"
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value);
                  }}
                  placeholder="Search SKU"
                />
              </Paper>
            </Item>
            <Item>
              <FormControl
                sx={{ minWidth: { xs: "100%", md: 250 } }}
                size="small"
              >
                <InputLabel sx={{ fontSize: "13px" }} id="demo-select-small">
                  Select
                </InputLabel>
                <Select
                  sx={{ fontSize: "13px", textTransform: "capitalize" }}
                  labelId="demo-select-small"
                  value={select}
                  label="select"
                  onChange={(e) => {
                    setSelect(e.target.value);
                  }}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value="Amazon">Amazon</MenuItem>
                  {
                    data?.map(mi=>(
                      <MenuItem value={mi?.name}>{mi?.name}</MenuItem>
                    ))
                  }
                </Select>
              </FormControl>
            </Item>
            <Item>
              <Button
                sx={{
                  minWidth: {
                    xs: "100%",
                    border: "1px solid #ced4da",
                    fontSize: "13px",
                    textTransform: "capitalize",
                  },
                }}
                color="inherit"
                onClick={handleShowNew}
              >
                Add New Watchlist
              </Button>
              <AddNewWatchlist
                addNew={addNew}
                data={data} setData={setData} 
                nextId={nextId}
                handleCloseNew={handleCloseNew}
              />
            </Item>
            <Item>
              <Button
                sx={{
                  minWidth: {
                    xs: "100%",
                    border: "1px solid #ced4da",
                    fontSize: "13px",
                    textTransform: "capitalize",
                  },
                }}
                color="inherit"
                onClick={handleShowSKU}
              >
                Choose SKU/ ASIN/ MPN
              </Button>
              <ChooseSKU
                chooseSKU={chooseSKU}
                handleCloseSKU={handleCloseSKU}
              />
            </Item>
            <Item>
              <Button
                sx={{
                  minWidth: { xs: "100%", md: 70 },
                  border: "1px solid #ced4da",
                  fontSize: "13px",
                  textTransform: "capitalize",
                }}
                color="inherit"
                onClick={handleShowEdit}
              >
                Edit
              </Button>
              <Edit edit={edit} data={data} setData={setData} handleCloseEdit={handleCloseEdit} />
            </Item>
            <Item>
              <Button
                sx={{
                  minWidth: { xs: "100%" },
                  border: "1px solid #ced4da",
                  fontSize: "13px",
                  textTransform: "capitalize",
                }}
                color="inherit"
                onClick={handleShowRemove}
              >
                Remove
              </Button>
              <Remove remove={remove} data={data} setData={setData} handleCloseRemove={handleCloseRemove} />
            </Item>
            <Item>
              <Button
                sx={{
                  minWidth: { xs: "100%" },
                  border: "1px solid #ced4da",
                  fontSize: "13px",
                  textTransform: "capitalize",
                }}
                color="inherit"
                onClick={handleShowLayout("paper")}
              >
                Layout
              </Button>
              <Layout
                layout={layout}
                handleCloseLayout={handleCloseLayout}
                scroll={scroll}
              />
            </Item>
          </Stack>
        ) : (
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={{ xs: 1, sm: 1, md: 1 }}
            sx={{ m: 3 }}
          >
            <Item>
              <Button
                variant="outlined"
                startIcon={<AddIcon />}
                sx={{
                  minWidth: { xs: "100%" },
                  fontSize: "13px",
                  textTransform: "capitalize",
                }}
                onClick={handleShowNewD}
              >
                New
              </Button>
              <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={openNew}
                onClose={handleCloseNewD}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                  timeout: 500,
                }}
              >
                <Fade in={openNew}>
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
                        variant="h6"
                        component="h2"
                      >
                        New watchlist
                      </Typography>
                      <IconButton color="error" onClick={handleCloseNewD}>
                        <CloseOutlinedIcon />
                      </IconButton>
                    </Box>
                    
                      <TextField
                        fullWidth
                        sx={{ mt: 2, mb: 5 }}
                        id="outlined-basic"
                        label="Enter Watchlist Title"
                        variant="outlined"
                        value={newD}
                        onChange={(e) => {
                          setNewD(e.target.value);
                        }}
                      />
                      <Box sx={{ textAlign: "end", mb: 2 }}>
                        {newD ? (
                          <Button
                            size="small"
                            sx={{ mx: 2 }}
                            variant="contained"
                            color="inherit"
                            onClick={() => {
                              setNewD('');
                              setData([
                                ...data,
                                { id: nextId++, name: newD }
                              ]);
                            }}
                          >
                            Create
                          </Button>
                        ) : (
                          <Button
                            disabled
                            size="small"
                            sx={{ mx: 2 }}
                            variant="contained"
                            color="inherit"
                            type="submit"
                          >
                            Create
                          </Button>
                        )}
                        <Button
                          size="small"
                          variant="outlined"
                          color="error"
                          onClick={handleCloseNewD}
                        >
                          Cancel
                        </Button>
                      </Box>
                    
                  </Box>
                </Fade>
              </Modal>
            </Item>
          </Stack>
        )}

        <Box sx={{ my: 4 }}>
          <SkuTable />
        </Box>
      </Box>
    </>
  );
};

export default WatchlistTable;
