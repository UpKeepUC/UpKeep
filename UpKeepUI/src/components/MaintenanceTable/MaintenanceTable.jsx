import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import DataTable from '../common/dataTable';

const columns = [
    { field: 'maintenanceTaskId', headerName: 'Id', type: "number", headerAlign: "left", align: "left",},
    { field: 'roomModel', headerName: 'Location', flex: 1 },
    { field: 'name', headerName: 'Name', flex: 1 },
    { field: 'description', headerName: 'Description', flex: 1 },
    { field: 'maintenanceTaskDueDate', headerName: 'Task Due Date', flex: 1 }
];

const MaintenanceTasksTableStyles = {
    height: '650px',
};


const MaintenanceTable = ({ onError }) => {
const [maintenanceTasks, setMaintenanceTasks] = useState([]);
const apiURL = process.env.REACT_APP_API_URL;
   useEffect(() => {
        fetch(apiURL + '/MaintenanceTask/GetMaintenanceTasks')
            .then((response) => response.json())
            .then((json) => {
                setMaintenanceTasks(json);
            })
            .catch(() => onError())
        }, []);    

return (
        <DataTable
            rows={maintenanceTasks}
            columns={columns}
            loading={!maintenanceTasks.length}
            sx={MaintenanceTasksTableStyles}
            getRowId={(row) => row.maintenanceTaskId}/>
    );
};
        
export default MaintenanceTable