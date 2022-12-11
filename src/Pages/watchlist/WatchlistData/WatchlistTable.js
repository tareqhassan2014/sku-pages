import { Box } from "@mui/system";
import React, { useState } from "react";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import {
  Button,
  FormControl,
  InputBase,
  InputLabel,
  MenuItem,
  Paper,
  Select,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AddNewWatchlist from "./AddNewWatchlist";

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
  const handleCloseLayout = () => setLayout(false);
  const handleShowLayout = () => setLayout(true);
  return (
    <>
      <Box sx={{ border: "1px solid #ced4da", borderRadius: 1, m: 5 }}>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={{ xs: 1, sm: 2, md: 2 }}
          sx={{ m: 3 }}
        >
          <Item>
            <Paper
              component="form"
              sx={{
                p: "2px 0px",
                display: "flex",
                alignItems: "center",
                maxWidth: "300px",
                height: "35px",
                mb: 2,
                boxShadow: 0,
                border: "1px solid #ced4da",
                borderRadius: 1,
              }}
            >
              <Button
                sx={{ py: 1 }}
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
            <FormControl sx={{ minWidth: 120 }} size="small">
              <InputLabel id="demo-select-small">Select</InputLabel>
              <Select
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
                <MenuItem value="None">Noon</MenuItem>
                <MenuItem value="None">Noon</MenuItem>
              </Select>
            </FormControl>
          </Item>
          <Item>
          <Button color="inherit" variant="outlined" onClick={handleShowNew}>Add New Watchlist</Button>
          <AddNewWatchlist
          addNew={addNew}
          handleShowNew={handleShowNew}
          handleCloseNew={handleCloseNew}
          />
          </Item>
          <Item>Item 3</Item>
          <Item>Item 3</Item>
          <Item>Item 3</Item>
        </Stack>
      </Box>
    </>
  );
};

export default WatchlistTable;
