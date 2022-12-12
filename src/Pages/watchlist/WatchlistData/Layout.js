import React, { useEffect, useRef } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Button, Chip } from "@mui/material";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { BiGridVertical } from "react-icons/bi";

const Layout = ({ layout, scroll, handleCloseLayout }) => {
  const descriptionElementRef = useRef(null);
  useEffect(() => {
    if (layout) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [layout]);

  const draggables = document.querySelectorAll(".draggable");
  const containers = document.querySelectorAll(".container");

  draggables.forEach((draggable) => {
    draggable.addEventListener("dragstart", () => {
      draggable.classList.add("dragging");
    });

    draggable.addEventListener("dragend", () => {
      draggable.classList.remove("dragging");
    });
  });

  containers.forEach((container) => {
    container.addEventListener("dragover", (e) => {
      e.preventDefault();
      const afterElement = getDragAfterElement(container, e.clientY);
      const draggable = document.querySelector(".dragging");
      if (afterElement == null) {
        container.appendChild(draggable);
      } else {
        container.insertBefore(draggable, afterElement);
      }
    });
  });

  function getDragAfterElement(container, y) {
    const draggableElements = [
      ...container.querySelectorAll(".draggable:not(.dragging)"),
    ];

    return draggableElements.reduce(
      (closest, child) => {
        const box = child.getBoundingClientRect();
        const offset = y - box.top - box.height / 2;
        if (offset < 0 && offset > closest.offset) {
          return { offset: offset, element: child };
        } else {
          return closest;
        }
      },
      { offset: Number.NEGATIVE_INFINITY }
    ).element;
  }

  const layoutTitle = [
    {
      title: "#",
      chkd: "true",
    },
    {
      title: "Name",
      chkd: "true",
      dsbl: "true",
    },
    {
      title: "Price",
      chkd: "true",
    },
    {
      title: "Price Change (24h)",
      chkd: "true",
    },
    {
      title: "Price Change (7d)",
      chkd: "true",
    },
    {
      title: "Price Change (30d)",
      chkd: "true",
    },
    {
      title: "Market Cap",
      chkd: "true",
    },
    {
      title: "Fully DMC",
      chkd: "true",
    },
    {
      title: "Volume (24h)",
      chkd: "true",
    },
    {
      title: "Circ. Supply",
      chkd: "false",
    },
    {
      title: "Price Graph (7d)",
      chkd: "false",
    },
    {
      title: "Price Graph (30d)",
      chkd: "false",
    },
    {
      title: "Price Change (14d)",
      chkd: "false",
    },
    {
      title: "Price Change (30d)",
      chkd: "false",
    },
    {
      title: "Price Change (14d)",
      chkd: "false",
    },
    {
      title: "Price Change (MTD)",
      chkd: "false",
    },
    {
      title: "Price Change (3m)",
      chkd: "false",
    },
    {
      title: "Price Change (6m)",
      chkd: "false",
    },
    {
      title: "Price Change (YTD)",
      chkd: "false",
    },
    {
      title: "Price Change (Year)",
      chkd: "false",
    },
    {
      title: "Price Change (Q1)",
      chkd: "false",
    },
    {
      title: "Price Change (Q2)",
      chkd: "false",
    },
  ];
  return (
    <>
      <Dialog
        open={layout}
        onClose={handleCloseLayout}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">Layout Setting</DialogTitle>
        <DialogContent sx={{ minWidth: "35vw" }} dividers={scroll === "paper"}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            <span style={{ fontSize: "12px" }}>
              {" "}
              Please choose metrics to view from the list below
            </span>
          </DialogContentText>
          <FormGroup className="container">
            {layoutTitle.map((lt, index) => (
              <Chip
                key={index}
                className="draggable"
                style={{ cursor: "move" }}
                draggable="true"
                size="small"
                sx={{
                  display: "flex",
                  justifyContent: "start",
                  alignItems: "center",
                  py: 2,
                  mb: 1,
                  backgroundColor: "#EFF2F5",
                }}
                icon={<BiGridVertical />}
                label={
                  <>
                    <FormControlLabel
                      disabled={lt?.dsbl ? true : false}
                      control={
                        <Checkbox
                          defaultChecked={lt.chkd === "true" ? true : false}
                        />
                      }
                      label={lt.title}
                    />
                  </>
                }
              />
            ))}
          </FormGroup>
        </DialogContent>
        <DialogActions>
          <Button
            color="inherit"
            variant="outlined"
            onClick={handleCloseLayout}
          >
            save
          </Button>
          <Button
            color="warning"
            variant="outlined"
            onClick={handleCloseLayout}
          >
            Reset All
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Layout;
