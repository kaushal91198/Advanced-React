
import React, { useState } from 'react';
import './App.css';
import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

const Table = ({ rowData, columnDefs }) => {

    const [gridApi, setGridApi] = useState()
    const [gridColApi, setGridColApi] = useState()


    const defaultColDef = {
        sortable: true,
        editable: true,
        flex: 1, filter: true,
        // floatingFilter: true
    }
    const onGridReady = (params) => {
        setGridApi(params.api)
        setGridColApi(params.columnApi)
        fetch("https://jsonplaceholder.typicode.com/comments").then(resp => resp.json())
            .then(resp => {
                params.api.applyTransaction({ add: resp })
            })
    }
    function isRowSelect(node) {
        console.log(node)
    }
    const onPaginationChange = (pageSize) => {
        gridApi.paginationSetPageSize(Number(pageSize))
    }

    const showColumn = () => {
        gridColApi.setColumnVisible('body', true)
    }
    const onFilterTextChange = (e) => {
        gridApi.setQuickFilter(e.target.value)
    }
    return (
        <div className="ag-theme-alpine" style={{ height: '400px' }}>
            <select onChange={(e) => onPaginationChange(e.target.value)}>
                <option value='10'>10</option>
                <option value='25'>25</option>
                <option value='50'>50</option>
                <option value='100'>100</option>
            </select>
            <button onClick={showColumn}>Show Column</button>
            <input type="search" onChange={onFilterTextChange} placeholder="search somethings..." />
            <AgGridReact
                columnDefs={columnDefs}
                // rowData={rowData}
                defaultColDef={defaultColDef}
                onGridReady={onGridReady}
                rowSelection='multiple'
                rowMultiSelectWithClick={true}
                onSelectionChanged={(event) => {
                    console.log(event.api.getSelectedRows())
                }}
                // isRowSelectable={isRowSelect}
                pagination={true}
                paginationPageSize={10}
            // paginationAutoPageSize={true}
            >
            </AgGridReact>
        </div>
    )
}

export default Table