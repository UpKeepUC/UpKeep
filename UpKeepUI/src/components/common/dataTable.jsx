import React from 'react';
import { DataGrid } from '@mui/x-data-grid'

const DataTable = ({
    rows, 
    columns, 
    //loading,
    sx,
}) => {

        return (
            <DataGrid
            rows={rows}
            columns={columns}
             //loading={loading}
            sx={sx}
            />
        );
    };

export default DataTable