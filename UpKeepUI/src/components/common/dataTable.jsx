import React from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import { Route, Routes, useNavigate } from 'react-router-dom';

const DataTable = ({
    rows, 
    columns, 
    loading,
    sx,
    getRowId
}) => {

    const navigate = useNavigate();
    const handleClick = (event) => {
        navigate('/inventory/' + event.id);
    }

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