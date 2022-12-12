import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Zoom } from "@mui/material";
import { styled } from "@mui/material/styles";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";

const LightTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#eef2f7",
    color: "rgba(0, 0, 0, 0.87)",
    boxShadow: theme.shadows[1],
    fontSize: 14,
  },
}));

const SkuTable = () => {
  const tableData = [
    {
      title: "SKU",
      name: "SKU",
    },
    {
      title: "Marketplace",
      name: "Marketplace",
    },
    {
      title: "Stores",
      name: "Stores",
    },
    {
      title: "And here's some amazing content. It's very engaging. Right?",
      name: "Rate",
    },
    {
      title: "And here's some amazing content. It's very engaging. Right?",
      name: "Rank",
    },
    {
      title: "And here's some amazing content. It's very engaging. Right?",
      name: "Fulfilment Type",
    },
    {
      title: "And here's some amazing content. It's very engaging. Right?",
      name: " SKU Status",
    },
    {
      title: "And here's some amazing content. It's very engaging. Right?",
      name: "Buybox Sale Price",
    },
    {
      title: "And here's some amazing content. It's very engaging. Right?",
      name: "Chg 24H",
    }
  ];
  return (
    <>
      <TableContainer sx={{ boxShadow: "none" }} component={Paper}>
        <Table sx={{ minWidth: 650, }} size="small" aria-label="a dense table">
          <TableHead sx={{ borderBottom:"2px solid #eef2f7"}}>
            <TableRow>
              {tableData.map((td,index) => (
                <LightTooltip key={index} title={td.title} placement="top" arrow TransitionComponent={Zoom}>
                  <TableCell sx={{fontSize:"12px"}}>{td.name}</TableCell>
                </LightTooltip>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell sx={{backgroundColor:"#eef2f7",width:150, color:"#6c757d", borderBottom:"0px"}}>No Data Available</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default SkuTable;
