import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import DataTable from '../common/dataTable';

const columns = [
    { field: 'inventoryItemId', headerName: 'Id', width: 150 },
    { field: 'inventoryItemTypeModel', headerName: 'Item Type', width: 150, valueFormatter: ({ value }) => value.name },
    { field: 'inventoryItemCost', headerName: 'Item Cost', width: 150 },
    { field: 'purchaseDate', headerName: 'Purchase Date', width: 150 },
    { field: 'roomModel', headerName: 'Room', width: 150, valueFormatter: ({ value }) => value.roomLocation },
];

const inventoryItemTableStyles = {
    height: '650px',
};

const InventoryTable = ({ onError }) => {
const [inventoryItems, setInventoryItems] = useState([]);

   useEffect(() => {
        fetch('https://localhost:7285/api/InventoryItem/GetInventoryItems')
            .then((response) => response.json())
            .then((json) => {
                setInventoryItems(json);
                console.log(json);
            })
            .catch(() => onError())
        }, []);    

return (
        <DataTable
            rows={inventoryItems}
            columns={columns}
            loading={!inventoryItems.length}
            sx={inventoryItemTableStyles}
            getRowId={(row) => row.inventoryItemId}/>
    );
};
        
export default InventoryTable