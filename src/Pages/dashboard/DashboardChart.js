import React, { useState } from "react";
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Bubble } from "react-chartjs-2";
import { faker } from "@faker-js/faker";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import {CssBaseline, Typography } from "@mui/material";

ChartJS.register(LinearScale, PointElement, Tooltip, Legend);

export const options = {
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

export const data = {
  datasets: [
    {
      label: "Red dataset",
      data: Array.from({ length: 50 }, () => ({
        x: faker.datatype.number({ min: -100, max: 100 }),
        y: faker.datatype.number({ min: -100, max: 100 }),
        r: faker.datatype.number({ min: 5, max: 20 }),
      })),
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Blue dataset",
      data: Array.from({ length: 50 }, () => ({
        x: faker.datatype.number({ min: -100, max: 100 }),
        y: faker.datatype.number({ min: -100, max: 100 }),
        r: faker.datatype.number({ min: 5, max: 20 }),
      })),
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

/* For Tabs */
function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

export function DashboardChart() {
  /* Tabs */
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
   <CssBaseline/>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box>
            <Typography>Buybox Price Status</Typography>
        </Box>
        
        <Box>
          <Tabs
            size="small"
            TabIndicatorProps={{
              hidden: true,
            }}
            value={value}
            onChange={handleChange}
            sx={{
              "& button:active": { backgroundColor: "blue" },
            }}
          >
            <LinkTab label="L24 Hour" href="#day-status" />
            <LinkTab label="L7 days" href="#" />
            <LinkTab label="L2 weeks" href="#" />
            <LinkTab label="L Months" href="#" />
          </Tabs>
        </Box>
      </Box>

      <Bubble options={options} data={data} />
    </>
  );
}
