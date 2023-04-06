import React, { useEffect, useState } from 'react'
import { GridToolbar } from '@mui/x-data-grid'
import DataTable from '../common/dataTable';
import { useNavigate } from 'react-router-dom';

const columns = [
    { field: 'inventoryItemId', headerName: 'Id', type: "number", headerAlign: "left", align: "left",},
    { field: 'inventoryItemTypeModel', headerName: 'Item Type', flex: 1, valueFormatter: ({ value }) => value.name },
    { field: 'inventoryItemCost', headerName: 'Item Cost', flex: 1 },
    { field: 'purchaseDate', headerName: 'Purchase Date', type:'date', flex: 1 },
    { field: 'roomModel', headerName: 'Room', flex: 1, valueFormatter: ({ value }) => value.roomLocation + ' - ' + value.roomTypeModel.name + ' - ' + value.roomNumber },
];

const inventoryItemTableStyles = {
    height: '650px',
};

const InventoryTable = ({ onError }) => {

const navigate = useNavigate();
  
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
            components={{ Toolbar: GridToolbar }}
            loading={!inventoryItems.length}
            sx={inventoryItemTableStyles}
            getRowId={(row) => row.inventoryItemId}
            handleClick={(event) => navigate('/inventory/' + event.id)}
            />
    );
};
        
export default InventoryTable