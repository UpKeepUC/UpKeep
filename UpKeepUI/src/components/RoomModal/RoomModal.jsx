import React, { useEffect, useState } from 'react'
import { Box, Grid, Modal, useTheme } from "@mui/material";
import TextField from '@mui/material/TextField';
import { tokens } from "../../theme";
import Button from '@mui/material/Button';
import InventoryTable from '../InventoryTable/InventoryTableByRoom';
import MaintenanceTable from '../MaintenanceTable/MaintenanceTableByRoom';

function RoomModal(props) {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    // Access the object through the props
    const { selectedObject } = props;

    const handleSubmit = (event) => {
        event.preventDefault();
        const apiURL = process.env.REACT_APP_API_URL;
        const data = new FormData(event.currentTarget);

        console.log("save");
      };

    const handleClose = () => {
        console.log("close");
    }  
  
    return (
        <div sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "75%",
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
          }}>

             
        <h2>Room Number: {selectedObject.roomNumber}</h2>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="roomLocation"
                  required
                  fullWidth
                  id="roomLocation"
                  label="Room Location"
                  value={selectedObject.roomLocation}
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="roomNumber"
                  label="Room Number"
                  name="roomNumber"
                  value={selectedObject.roomNumber}
                />
              </Grid>             
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="secondary"
              sx={{ mt: 3, mb: 2 }}
            >
              Save
            </Button>           
        </Box>
        <Box m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
        }}>
          <Box>
          <h2>Inventory Items in Room</h2>
          <InventoryTable roomId={selectedObject.roomId}/>
          </Box>
          <Box>
          <h2>Maintenance Tasks for Room</h2>
          <MaintenanceTable roomId={selectedObject.roomId}/>  
          </Box>
        </Box>
        
        </div> 
    );
  }

  export default RoomModal