import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import DataTable from '../common/dataTable';

const columns = [
    { field: 'id', headerName: 'ID', width: 150 },
    { field: 'name', headerName: 'Name', width: 150 },
    { field: 'username', headerName: 'Username', width: 150 },
    { field: 'email', headerName: 'E-mail', width: 20 },
];

const inventoryItemTableStyles = {
    height: '650px',
};

const InventoryTable = ({ onError }) => {
//    const [inventoryItems, setInventoryItems] = useState([]);

//    useEffect(() => {
        // fetch('TO DO : api')
        //     .then((response) => response.json())
        //     .then((json) => setInventoryItems(json))
        //     .catch(() => onError())
        // }, []);

 const rows = [
    { id: 1, name: 'Snow', username: 'Jon', email: '35' },
    { id: 2, name: 'Lannister', username: 'Cersei', email: '42' },
    { id: 3, name: 'Lannister', username: 'Jaime', email: '45' },
    { id: 4, name: 'Stark', username: 'Arya', email: '16' },
    { id: 5, name: 'Targaryen', username: 'Daenerys', email: 'theeUser' },
    { id: 6, name: 'Melisandre', username: 'user22', email: '150' },
    { id: 7, name: 'Clifford', username: 'Ferrara', email: '44' },
    { id: 8, name: 'Frances', username: 'Rossini', email: '36' },
    { id: 9, name: 'Roxie', username: 'Harvey', email: '65' },
 ];     

return (
        <DataTable
            rows={rows}
            columns={columns}
            //loading={!inventoryItems.length}
            sx={inventoryItemTableStyles}
        />
    );
};
        
export default InventoryTable