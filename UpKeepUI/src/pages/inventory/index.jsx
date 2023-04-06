import React, { useState, useEffect, Fragment } from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import BasicSnackbar from "../../components/common/BasicSnackbar/BasicSnackbar";
import CommonButton from "../../components/common/CommonButton/CommonButton";
import InventoryTable from "../../components/InventoryTable/InventoryTable";
import Header from "../../components/common/Header";
import CreateInventoryItemModal from "../../components/CreateInventoryItemModal/CreateInventoryItemModal";
import { grey } from "@mui/material/colors";

const Inventory = () => {


  
  const [open, setOpen] = useState(false);
  const [snackOpen, setSnackOpen] = useState(false);
  const [inventoryItems, setInventoryItems] = useState([]);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);


  const addInventoryItems = () => {
    setOpen(true);
    console.log("click");
  };

  const addNewInventoryItems = (data) => {
    inventoryItems.push({ ...data });
    setOpen(false);
  };

    const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnackOpen(false);
  };



  return (
    <Box m="20px">
      <Header title="INVENTORY" subtitle="Manage your Inventory!" />
      <Box>
        <CommonButton
          variant="contained"
          onClick={addInventoryItems}
          size="large"
          color="secondary"
        >
          Add Inventory Item
        </CommonButton>
      </Box>
      <Box
        m="40px 0 0 0"
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
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        <InventoryTable onError={() => setSnackOpen(true)} />
        <BasicSnackbar
          snackOpen={snackOpen}
          severity="error"
          message="Data couldn't be fetched"
          onClose={handleClose}
          />
      </Box>
      <Box>
        <CreateInventoryItemModal
          open={open}
          onClose={() => setOpen(false)}
          addNewInventoryItems={addNewInventoryItems}
        />
      </Box>
    </Box>
  );
};

export default Inventory;
