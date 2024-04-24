import React from 'react';
import renderer from 'react-test-renderer';
import DataTable from '../datatable';
import TestRenderer from 'react-test-renderer';


const LocationsActions = (cell, row, rowIndex, formatExtraData) => {    
    return ( 
        <>
          <a key="edit-button" className="display-inblock actionIcon me-1" data-bs-toggle="tooltip" title="Edit Location" onClick={()=> onTableEdit(row, rowIndex)}>
              Edit
          </a>
          || 
          <a key="delete-button" className="display-inblock actionIcon me-1" data-bs-toggle="tooltip" title="Delete Location" onClick={()=> onTableDelete(row, rowIndex)}>
              Delete
          </a>
        </> 
    ); 
}

const cols = [
    {
        dataField: 'type',
        text: 'TYPE',
        sort: false,
        headerStyle: () => {
            return { width: "10%" };
        }
    }, 
    {
        dataField: 'address',
        text: 'ADDRESS',
        sort: false,
        headerStyle: () => {
            return { width: "90%" };
        }
    }, 
    {
        dataField: 'place_id',
        text: 'PLACE_ID',
        sort: false,
        hidden: true
    },
    {
        dataField: 'actions',
        text: 'Actions',
        isDummyField: true,
        csvExport: false,
        headerStyle: () => {
            return { width: "20%" };
        },
        formatter: LocationsActions
    }
  ];
  
  const CommonArgs = {
    tableKey: "table1",
    keyField:'id',
    cols: cols,
    rows: [{id: '1', type: "Mailing Address", address: "311 GA", place_id: "123"}],
    isBordered: true,
    needPagination: "false",
    needSearchBar: "false",
    needCSVExport: "false",
};
  
it('renders without crashing', () => {
    const testRenderer = TestRenderer.create(<DataTable {...CommonArgs} />);
    testRenderer.unmount()
});
  
it('matches snapshot as expected', () => {
  const renderTree = renderer.create(<DataTable {...CommonArgs} />);
  expect(renderTree).toMatchSnapshot();
});