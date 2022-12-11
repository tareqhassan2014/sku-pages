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

    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

    const descriptionElementRef = useRef(null);
    useEffect(() => {
        if (layout) {
            const { current: descriptionElement } = descriptionElementRef;
            if (descriptionElement !== null) {
                descriptionElement.focus();
            }
        }
    }, [layout]);
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
                <DialogContent sx={{minWidth:"35vw"}} dividers={scroll === "paper"}>
                    <DialogContentText
                        id="scroll-dialog-description"
                        ref={descriptionElementRef}
                        tabIndex={-1}
                    >
                    <span style={{fontSize:"12px"}}> Please choose metrics to view from the list below</span>
                       
                    </DialogContentText>
                    <FormGroup>

                        <Chip
                            size="small"
                            sx={{ display: 'flex', justifyContent: 'start', alignItems: 'center', py: 2, mb: 1, backgroundColor: "#EFF2F5" }} icon={<BiGridVertical />} label={
                                <>
                                    <FormControlLabel
                                        disabled
                                        control={<Checkbox />}
                                        checked
                                        label="SKU"
                                    />
                                </>
                            } />

                        <Chip
                            size="small"
                            sx={{ display: 'flex', justifyContent: 'start', alignItems: 'center', py: 2, mb: 1, backgroundColor: "#EFF2F5" }} icon={<BiGridVertical />} label={
                                <>
                                    <FormControlLabel
                                        disabled
                                        control={<Checkbox />}
                                        checked
                                        label="Fulfilment Type"
                                    />
                                </>
                            } />
                        <Chip
                            size="small"
                            sx={{ display: 'flex', justifyContent: 'start', alignItems: 'center', py: 2, mb: 1, backgroundColor: "#EFF2F5" }} icon={<BiGridVertical />} label={
                                <>
                                    <FormControlLabel
                                        disabled
                                        control={<Checkbox />}
                                        checked
                                        label="Rank"
                                    />
                                </>
                            } />
                        <Chip
                            size="small"
                            sx={{ display: 'flex', justifyContent: 'start', alignItems: 'center', py: 2, mb: 1, backgroundColor: "#EFF2F5" }} icon={<BiGridVertical />} label={
                                <>
                                    <FormControlLabel
                                        disabled
                                        control={<Checkbox />}
                                        checked
                                        label="Rate"
                                    />
                                </>
                            } />
                        <Chip
                            size="small"
                            sx={{ display: 'flex', justifyContent: 'start', alignItems: 'center', py: 2, mb: 1, backgroundColor: "#EFF2F5" }} icon={<BiGridVertical />} label={
                                <>
                                    <FormControlLabel
                                        disabled
                                        control={<Checkbox />}
                                        checked
                                        label=" SKU Marketplace"
                                    />
                                </>
                            } />
                        <Chip
                            size="small"
                            sx={{ display: 'flex', justifyContent: 'start', alignItems: 'center', py: 2, mb: 1, backgroundColor: "#EFF2F5" }} icon={<BiGridVertical />} label={
                                <>
                                    <FormControlLabel
                                        disabled
                                        control={<Checkbox />}
                                        checked
                                        label="Stores"
                                    />
                                </>
                            } />
                        <Chip
                            size="small"
                            sx={{ display: 'flex', justifyContent: 'start', alignItems: 'center', py: 2, mb: 1, backgroundColor: "#EFF2F5" }} icon={<BiGridVertical />} label={
                                <>
                                    <FormControlLabel
                                        disabled
                                        control={<Checkbox />}
                                        checked
                                        label="Chg 24H"
                                    />
                                </>
                            } />
                        <Chip
                            size="small"
                            sx={{ display: 'flex', justifyContent: 'start', alignItems: 'center', py: 2, mb: 1, backgroundColor: "#EFF2F5" }} icon={<BiGridVertical />} label={
                                <>
                                    <FormControlLabel
                                        disabled
                                        control={<Checkbox />}
                                        checked
                                        label="Buybox Sale Price"
                                    />
                                </>
                            } />
                        <Chip
                            size="small"
                            sx={{ display: 'flex', justifyContent: 'start', alignItems: 'center', py: 2, mb: 1, backgroundColor: "#EFF2F5" }} icon={<BiGridVertical />} label={
                                <>
                                    <FormControlLabel
                                        disabled
                                        control={<Checkbox />}
                                        checked
                                        label="Max Offer Price"
                                    />
                                </>
                            } />
                        <Chip
                            size="small"
                            sx={{ display: 'flex', justifyContent: 'start', alignItems: 'center', py: 2, mb: 1, backgroundColor: "#EFF2F5" }} icon={<BiGridVertical />} label={
                                <>
                                    <FormControlLabel
                                        disabled
                                        control={<Checkbox />}
                                        checked
                                        label="Min Offer Price"
                                    />
                                </>
                            } />
                        <Chip
                            size="small"
                            sx={{ display: 'flex', justifyContent: 'start', alignItems: 'center', py: 2, mb: 1, backgroundColor: "#EFF2F5" }} icon={<BiGridVertical />} label={
                                <>
                                    <FormControlLabel
                                        disabled
                                        control={<Checkbox />}
                                        checked
                                        label="SKU Status"
                                    />
                                </>
                            } />
                        <Chip
                            size="small"
                            sx={{ display: 'flex', justifyContent: 'start', alignItems: 'center', py: 2, mb: 1, backgroundColor: "#EFF2F5" }} icon={<BiGridVertical />} label={
                                <>
                                    <FormControlLabel
                                        disabled
                                        control={<Checkbox />}
                                        checked
                                        label="E Opp to stock"
                                    />
                                </>
                            } />
                        <Chip
                            size="small"
                            sx={{ display: 'flex', justifyContent: 'start', alignItems: 'center', py: 2, mb: 1, backgroundColor: "#EFF2F5" }} icon={<BiGridVertical />} label={
                                <>
                                    <FormControlLabel
                                        control={<Checkbox  {...label} />}
                                        label="E Opp To Fulfilment"
                                    />
                                </>
                            } />

                        <Chip
                            size="small"
                            sx={{ display: 'flex', justifyContent: 'start', alignItems: 'center', py: 2, mb: 1, backgroundColor: "#EFF2F5" }} icon={<BiGridVertical />} label={
                                <>
                                    <FormControlLabel
                                        control={<Checkbox  {...label} />}
                                        label="Trade Volume"
                                    />
                                </>
                            } />

                        <Chip
                            size="small"
                            sx={{ display: 'flex', justifyContent: 'start', alignItems: 'center', py: 2, mb: 1, backgroundColor: "#EFF2F5" }} icon={<BiGridVertical />} label={
                                <>
                                    <FormControlLabel
                                        control={<Checkbox  {...label} />}
                                        label="Tags"
                                    />
                                </>
                            } />

                        <Chip
                            size="small"
                            sx={{ display: 'flex', justifyContent: 'start', alignItems: 'center', py: 2, mb: 1, backgroundColor: "#EFF2F5" }} icon={<BiGridVertical />} label={
                                <>
                                    <FormControlLabel
                                        control={<Checkbox  {...label} />}
                                        label="ASP"
                                    />
                                </>
                            } />

                        <Chip
                            size="small"
                            sx={{ display: 'flex', justifyContent: 'start', alignItems: 'center', py: 2, mb: 1, backgroundColor: "#EFF2F5" }} icon={<BiGridVertical />} label={
                                <>
                                    <FormControlLabel
                                        control={<Checkbox  {...label} />}
                                        label="Vol (24h)/MCap"
                                    />
                                </>
                            } />

                        <Chip
                            size="small"
                            sx={{ display: 'flex', justifyContent: 'start', alignItems: 'center', py: 2, mb: 1, backgroundColor: "#EFF2F5" }} icon={<BiGridVertical />} label={
                                <>
                                    <FormControlLabel
                                        control={<Checkbox  {...label} />}
                                        label="Estimated SOH"
                                    />
                                </>
                            } />

                        <Chip
                            size="small"
                            sx={{ display: 'flex', justifyContent: 'start', alignItems: 'center', py: 2, mb: 1, backgroundColor: "#EFF2F5" }} icon={<BiGridVertical />} label={
                                <>
                                    <FormControlLabel
                                        control={<Checkbox  {...label} />}
                                        label="DOH"
                                    />
                                </>
                            } />

                        <Chip
                            size="small"
                            sx={{ display: 'flex', justifyContent: 'start', alignItems: 'center', py: 2, mb: 1, backgroundColor: "#EFF2F5" }} icon={<BiGridVertical />} label={
                                <>
                                    <FormControlLabel
                                        control={<Checkbox  {...label} />}
                                        label="ENR"
                                    />
                                </>
                            } />

                        <Chip
                            size="small"
                            sx={{ display: 'flex', justifyContent: 'start', alignItems: 'center', py: 2, mb: 1, backgroundColor: "#EFF2F5" }} icon={<BiGridVertical />} label={
                                <>
                                    <FormControlLabel
                                        control={<Checkbox  {...label} />}
                                        label="Max Investment"
                                    />
                                </>
                            } />

                        <Chip
                            size="small"
                            sx={{ display: 'flex', justifyContent: 'start', alignItems: 'center', py: 2, mb: 1, backgroundColor: "#EFF2F5" }} icon={<BiGridVertical />} label={
                                <>
                                    <FormControlLabel
                                        control={<Checkbox  {...label} />}
                                        label="Min Investment"
                                    />
                                </>
                            } />

                        <Chip
                            size="small"
                            sx={{ display: 'flex', justifyContent: 'start', alignItems: 'center', py: 2, mb: 1, backgroundColor: "#EFF2F5" }} icon={<BiGridVertical />} label={
                                <>
                                    <FormControlLabel
                                        control={<Checkbox  {...label} />}
                                        label="EQTI"
                                    />
                                </>
                            } />

                        <Chip
                            size="small"
                            sx={{ display: 'flex', justifyContent: 'start', alignItems: 'center', py: 2, mb: 1, backgroundColor: "#EFF2F5" }} icon={<BiGridVertical />} label={
                                <>
                                    <FormControlLabel
                                        control={<Checkbox  {...label} />}
                                        label="EM"
                                    />
                                </>
                            } />

                        <Chip
                            size="small"
                            sx={{ display: 'flex', justifyContent: 'start', alignItems: 'center', py: 2, mb: 1, backgroundColor: "#EFF2F5" }} icon={<BiGridVertical />} label={
                                <>
                                    <FormControlLabel
                                        control={<Checkbox  {...label} />}
                                        label="Estimated SU Last 24H"
                                    />
                                </>
                            } />

                        <Chip
                            size="small"
                            sx={{ display: 'flex', justifyContent: 'start', alignItems: 'center', py: 2, mb: 1, backgroundColor: "#EFF2F5" }} icon={<BiGridVertical />} label={
                                <>
                                    <FormControlLabel
                                        control={<Checkbox  {...label} />}
                                        label="E Marketplace cap"
                                    />
                                </>
                            } />

                        <Chip
                            size="small"
                            sx={{ display: 'flex', justifyContent: 'start', alignItems: 'center', py: 2, mb: 1, backgroundColor: "#EFF2F5" }} icon={<BiGridVertical />} label={
                                <>
                                    <FormControlLabel
                                        control={<Checkbox  {...label} />}
                                        label="E Opp to Amazon Fulfilment"
                                    />
                                </>
                            } />

                        <Chip
                            size="small"
                            sx={{ display: 'flex', justifyContent: 'start', alignItems: 'center', py: 2, mb: 1, backgroundColor: "#EFF2F5" }} icon={<BiGridVertical />} label={
                                <>
                                    <FormControlLabel
                                        control={<Checkbox  {...label} />}
                                        label="E Opp to Noon Fulfilment"
                                    />
                                </>
                            } />

                        <Chip
                            size="small"
                            sx={{ display: 'flex', justifyContent: 'start', alignItems: 'center', py: 2, mb: 1, backgroundColor: "#EFF2F5" }} icon={<BiGridVertical />} label={
                                <>
                                    <FormControlLabel
                                        control={<Checkbox  {...label} />}
                                        label="Demand"
                                    />
                                </>
                            } />

                        <Chip
                            size="small"
                            sx={{ display: 'flex', justifyContent: 'start', alignItems: 'center', py: 2, mb: 1, backgroundColor: "#EFF2F5" }} icon={<BiGridVertical />} label={
                                <>
                                    <FormControlLabel
                                        control={<Checkbox  {...label} />}
                                        label="Supply"
                                    />
                                </>
                            } />

                    </FormGroup>
                </DialogContent>
                <DialogActions>
                    <Button color="inherit" variant="outlined" onClick={handleCloseLayout}>save</Button>
                    <Button color="warning" variant="outlined" onClick={handleCloseLayout}>Reset All</Button>
                </DialogActions>
            </Dialog>
        </>
    );
};

export default Layout;
