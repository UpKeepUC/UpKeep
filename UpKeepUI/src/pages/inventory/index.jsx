import React, { useState, useEffect } from 'react'
import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import BasicSnackbar from '../../components/common/BasicSnackbar/BasicSnackbar';
import InventoryTable from '../../components/InventoryTable/InventoryTable';
import Header from "../../components/common/header";

const Inventory = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const [open, setOpen] = useState(false);

    const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
    };
  return (
    <Box m="20px">
      <Header title="INVENTORY" subtitle="Manage your Inventory!" />
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
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
       <InventoryTable onError={() => setOpen(true)} />
       <BasicSnackbar
                open={open}
                severity="error"
                message="Data couldn't be fetched"
                onClose={handleClose}
        />
      </Box>
    </Box>
  );
};

export default Inventory;