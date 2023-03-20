import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import DataTable from '../common/dataTable';

const columns = [
    { field: 'inventoryItemId', headerName: 'Id', flex: 1 },
    { field: 'inventoryItemTypeModel', headerName: 'Item Type', flex: 1, valueFormatter: ({ value }) => value.name },
    { field: 'inventoryItemCost', headerName: 'Item Cost', flex: 1 },
    { field: 'purchaseDate', headerName: 'Purchase Date', flex: 1 },
    { field: 'roomModel', headerName: 'Room', flex: 1, valueFormatter: ({ value }) => value.roomLocation + ' - ' + value.roomTypeModel.name + ' - ' + value.roomNumber },
];

const inventoryItemTableStyles = {
    height: '650px',
};

const InventoryTable = ({ onError }) => {
const [inventoryItems, setInventoryItems] = useState([]);
const apiURL = process.env.REACT_APP_API_URL;
   useEffect(() => {
        fetch(apiURL + '/InventoryItem/GetInventoryItems')
            .then((response) => response.json())
            .then((json) => {
                setInventoryItems(json);
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