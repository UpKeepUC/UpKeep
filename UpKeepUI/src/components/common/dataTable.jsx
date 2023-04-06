import React from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid'

const DataTable = ({
    rows, 
    columns, 
    loading,
    sx,
    getRowId,
    handleClick
}) => {

        return (
            <DataGrid
            rows={rows}
            columns={columns}
            components={{ Toolbar: GridToolbar }}
            loading={loading}
            sx={sx}
            getRowId={getRowId}
            onRowClick={handleClick}
            />
        );
    };

export default DataTable