import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import { GridToolbar } from '@mui/x-data-grid'
import DataTable from '../common/dataTable';

const columns = [
    { field: 'inventoryItemId', headerName: 'Id', type: "number", headerAlign: "left", align: "left",},
    { field: 'inventoryItemTypeModel', headerName: 'Item Type', flex: 1, valueFormatter: ({ value }) => value.name },
    { field: 'inventoryItemCost', headerName: 'Item Cost', flex: 1 },
    { field: 'purchaseDate', headerName: 'Purchase Date', type:'date', flex: 1 },
    { field: 'roomModel', headerName: 'Room', flex: 1, valueFormatter: ({ value }) => value.roomLocation + ' - ' + value.roomNumber },
];

const inventoryItemTableStyles = {
    height: '300px',
};

function InventoryTable (props) {

const { roomId } = props; 

const [inventoryItems, setInventoryItems] = useState([]);
const apiURL = process.env.REACT_APP_API_URL;
   useEffect(() => {
        fetch(apiURL + '/InventoryItem/GetInventoryItemByRoomId?id='+roomId)
            .then((response) => response.json())
            .then((json) => {
                setInventoryItems(json);
            })
            .catch(() => {console.log("error");})
        }, []);    

return (
        <DataTable
            rows={inventoryItems}
            columns={columns}
            components={{ Toolbar: GridToolbar }}
            loading={!inventoryItems.length}
            sx={inventoryItemTableStyles}
            getRowId={(row) => row.inventoryItemId}/>
    );
};
        
export default InventoryTable