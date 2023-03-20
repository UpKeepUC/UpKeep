import React, { useState, useEffect, Fragment } from "react";
import { Box, Grid, Modal, useTheme, TextField } from "@mui/material";
import Button from '@mui/material/Button';
import { tokens } from "../../theme";
import Header from "../../components/common/Header";
import demoqrcode from "./demoqrcode.png"
import MaintenanceTable from "../../components/MaintenanceTable/MaintenanceTableByInventory";

const InventoryView = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [inventoryItem, setInventoryItem] = useState({});
    const [qrCodeGenerated, setQRCodeGenerated] = useState(false);
    

    const handleSubmit = (event) => {
        event.preventDefault();
        const apiURL = process.env.REACT_APP_API_URL;
        const data = new FormData(event.currentTarget);

        console.log("save");
      };

    const apiURL = process.env.REACT_APP_API_URL;
    useEffect(() => {
        const id = window.location.pathname.split('/')[2];
        fetch(apiURL + '/InventoryItem/GetInventoryItemById?id='+id)
            .then((response) => response.json())
            .then((json) => {
                setInventoryItem(json);
            })
            .catch(() => {console.log('error')})
        }, []);

    const generateQRCode = () => {
        setQRCodeGenerated(true);
    }
  
    return (
      <Box m="20px">
        <Header title="INVENTORY ITEM" subtitle="Manage Inventory Item!" />
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="cost"
                  required
                  fullWidth
                  id="cost"                 
                  value={inventoryItem.inventoryItemCost}
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="purchaseDate"                 
                  name="purchaseDate"
                  value={inventoryItem.purchaseDate}
                />
              </Grid>             
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Save
            </Button>
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
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}>
          <h2>Maintenance Tasks for Room</h2>
          <MaintenanceTable inventoryId={inventoryItem.inventoryItemId}/>  
            <Button
                onClick={generateQRCode}
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Generate QR Code
            </Button>
    </Box>
            {qrCodeGenerated &&
                <img src={demoqrcode} alt='qr code here'/>
            }
                    
        </Box>
      </Box>
    );
  };
  
  export default InventoryView;