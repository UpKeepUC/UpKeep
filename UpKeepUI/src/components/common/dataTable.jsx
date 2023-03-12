import React from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid'

const DataTable = ({
    rows, 
    columns, 
    loading,
    sx,
    getRowId
}) => {

        return (
            <DataGrid
            rows={rows}
            columns={columns}
            components={{ Toolbar: GridToolbar }}
            loading={loading}
            sx={sx}
            getRowId={getRowId}
            />
        );
    };

export default DataTable