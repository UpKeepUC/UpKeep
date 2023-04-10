import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import DataTable from '../common/dataTable';
import { useNavigate } from 'react-router-dom';

const columns = [
    { field: 'maintenanceTaskId', headerName: 'Id', type: "number", headerAlign: "left", align: "left",},
    // { field: 'maintenanceTaskRooms', headerName: 'Room', flex: 1, valueFormatter: ({ value }) => value[0].roomNumber ?? "No Room" },
    { field: 'maintenanceTaskType', headerName: 'Task Type', flex: 1, valueFormatter: ({ value }) => value.name },
    { field: 'name', headerName: 'Name', flex: 1 },
    { field: 'description', headerName: 'Description', flex: 1 },
    { field: 'maintenanceTaskDueDate', headerName: 'Task Due Date', flex: 1 }
];

const MaintenanceTasksTableStyles = {
    height: '650px',
};



const MaintenanceTable = ({ onError }) => {

const navigate = useNavigate();

const [maintenanceTasks, setMaintenanceTasks] = useState([]);
const apiURL = process.env.REACT_APP_API_URL;
   useEffect(() => {
        fetch(apiURL + '/MaintenanceTask/GetMaintenanceTasks')
            .then((response) => response.json())
            .then((json) => {
                setMaintenanceTasks(json);
                console.log(json)
            })
            .catch(() => onError())
        }, []);    

return (
        <DataTable
            rows={maintenanceTasks}
            columns={columns}
            loading={!maintenanceTasks.length}
            sx={MaintenanceTasksTableStyles}
            getRowId={(row) => row.maintenanceTaskId}
            // handleClick={(event) => navigate('/maintenanceTask/' + event.id)}
            />
    );
};
        
export default MaintenanceTable