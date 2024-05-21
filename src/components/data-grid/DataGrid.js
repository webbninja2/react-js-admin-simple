
import { DataGrid } from '@mui/x-data-grid';
import React from 'react'

function DataGrids({rows, columns, rowCount, page, paginationHandler, paginationMode }) {
    console.log('rowCount', rowCount)
  return (
    <DataGrid
    disableColumnMenu
    rows={rows}
    columns={columns} 
    getRowId={(rows) => rows.mal_id}
    pagination 
    rowCount={rowCount} 
    page={page} 
    onPaginationModelChange={paginationHandler} 
    paginationMode={paginationMode}
    // pageSizeOptions={[25, 50, 100]} /// due to api issue it's commented if you want to pageSize option you need to remove paginationModel 
    initialState={{ 
        ...rows.initialState,
        pagination: {
            ...rows.initialState?.pagination,
            paginationModel: {
                pageSize: 10, 
            },
        },
    }}
/>
  )
}

export default DataGrids