import Header from "../../components/common/Header";
import React, { useState, useEffect } from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import BasicSnackbar from "../../components/common/BasicSnackbar/BasicSnackbar";
import MaintenanceTable from "../../components/MaintenanceTable/MaintenanceTable";
import CommonButton from "../../components/common/CommonButton/CommonButton";
import CreateMaintenanceTaskModal from "../../components/CreateMaintenanceTaskModal/CreateMaintenanceTaskModal";

const MaintenanceTask = () => {
  const [open, setOpen] = useState(false);
  const [snackOpen, setSnackOpen] = useState(false);
  const [maintenanceTasks, setMaintenanceTasks] = useState([]);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const addMaintenanceTask = () => {
    setOpen(true);
    console.log("click");
  };

  const addNewMaintenanceTask = (data) => {
    maintenanceTasks.push({ ...data });
    setOpen(false);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackOpen(false);
  };

  return (
    <Box m="20px">
      <Header title="MAINTENANCE" subtitle="Manage your Maintenance Tasks!" />
      <Box>
        <CommonButton
          variant="contained"
          onClick={addMaintenanceTask}
          size="large"
          color="secondary"
        >
          Add Maintenance Task
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
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        <MaintenanceTable onError={() => setSnackOpen(true)} />
        <BasicSnackbar
          snackOpen={snackOpen}
          severity="error"
          message="Data couldn't be fetched"
          onClose={handleClose}
        />
      </Box>
      <Box>
      <CreateMaintenanceTaskModal
          open={open}
          onClose={() => setOpen(false)}
          addNewMaintenanceTask={addNewMaintenanceTask}
        />
      </Box>
    </Box>
  );
};

export default MaintenanceTask;
