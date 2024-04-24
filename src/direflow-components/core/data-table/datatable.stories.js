import React from 'react';
import DataTable from './datatable';

const onTableEdit = (row, rowIndex) => {
  console.log(row, rowIndex);
}

const onTableDelete = (row, rowIndex) => {
  console.log(row, rowIndex);
}

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
      dataField: 'UnitNumber',
      text: 'UNIT_NUMBER',
      sort: false,
      hidden: true
  },
    {
      dataField: 'type',
      text: 'TYPE',
      sort: false,
      headerStyle: () => {
          return { width: "30%" };
      }
  },
  {
      dataField: 'address',
      text: 'ADDRESS',
      sort: false,
      headerStyle: () => {
          return { width: "50%" };
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

const selectRow = {
  mode: 'checkbox',
  clickToSelect: true,
  clickToExpand: true,
  onSelect: (row, isSelect, rowIndex, e) => {
      console.log(row.id);
      console.log(isSelect);
      console.log(rowIndex);
      console.log(e);
  },
  onSelectAll: (isSelect, rows, e) => {
      console.log(isSelect);
      console.log(rows);
      console.log(e);
  }
};
const expandRow = {
    renderer: (row) => {
        console.log("ACCOUNT HUB FILTER",row);
        return (
            <div name="expandRows">
                <div className="row m-auto">
                    <div className="col-lg-12 p-0">
                        <div className="vehicleInfo">
                            {row.UnitNumber}
                        </div>
                    </div>
                </div>
            </div>
        )
    },
    showExpandColumn: true,
    expandByColumnOnly: true,
    onlyOneExpanding: true,
    expandColumnPosition: 'right',
    expandColumnRenderer: ({ expanded }) => {
        if (expanded) {
            return (
                // <FontAwesomeIcon icon={faAngleUp} size="lg" />
                <h6>REMOVE</h6>
            );
        }
        return (
                <h6>ADD</h6>
            // <FontAwesomeIcon icon={faAngleDown} size="lg" />
        );
    }
};
const CommonArgs = {
    tableKey: "UnitNumber",
    cols: cols,
    rows: [
        {UnitNumber: "12345",type: "Mailing Address", address: "311 GA", place_id: "123"},
        {UnitNumber: "12345",type: "Mailing Address", address: "311 GA", place_id: "123"},
        {UnitNumber: "12347",type: "Mailing Address", address: "311 GA", place_id: "123"},
        {UnitNumber: "12348",type: "Mailing Address", address: "311 GA", place_id: "123"},
        {UnitNumber: "12349",type: "Mailing Address", address: "311 GA", place_id: "123"},
        {UnitNumber: "12340",type: "Mailing Address", address: "311 GA", place_id: "123"},
        {UnitNumber: "12341",type: "Mailing Address", address: "311 GA", place_id: "123"},
        {UnitNumber: "12342",type: "Mailing Address", address: "311 GA", place_id: "123"},
        {UnitNumber: "12343",type: "Mailing Address", address: "311 GA", place_id: "123"},
        {UnitNumber: "12344",type: "Mailing Address", address: "311 GA", place_id: "123"},
        {UnitNumber: "12350",type: "Mailing Address", address: "311 GA", place_id: "123"},
        {UnitNumber: "12351",type: "Mailing Address", address: "311 GA", place_id: "123"},
        {UnitNumber: "12352",type: "Mailing Address", address: "311 GA", place_id: "123"},
        {UnitNumber: "12353",type: "Mailing Address", address: "311 GA", place_id: "123"},
        {UnitNumber: "12354",type: "Mailing Address", address: "311 GA", place_id: "123"},
        {UnitNumber: "12346",type: "Mailing Address", address: "311 GA", place_id: "123"},
    ],
    isBordered: true,
    needPagination: true,
    needSearchBar: true,
    needCSVExport: true,
    selectRow:selectRow,
    expandRow: expandRow,
    // SelectedQuote:SelectedQuote
};

export default {
    title: 'Design System/Core/DataTable',
    component: DataTable,
    argTypes: {
        tableKey: {
          description: "sets unique key to the specific table",
          table: {
            category: 'Element'
          }
        },
        cols: {
            description: "UI schema which gets passes as the JSON of the child elements with thier attributes to render table headers on screen.",
            table: {
              category: 'Element'
            }
        },
        rows: {
            description: "Data which gets passes as the array of objects to render table body on screen.",
            table: {
              category: 'Element'
            }
        },
        isDummyField: {
            control: 'boolean',
            description: "Passes boolean value to specific column in column object to make it dummy column.",
            table: {
              category: 'Element'
            }
        },
        sort: {
            control: 'boolean',
            description: "Passes boolean value to specific column in column object to make it sortable.",
            table: {
              category: 'Element'
            }
        },
        selectRow: {
            description: "Passes an object to add checkbox/radio button to select the pertucal row.",
            table: {
              category: 'Element'
            }
        },
        cellEdit: {
            description: "Passes an object to edit perticula column using cellEditFactory module with mode parameter.",
            table: {
              category: 'Element'
            }
        },
        exportCSV:{
            description: "Passed to ToolkitProvider to add export button on top of table.",
            table: {
              category: 'Element'
            }
        },
        search: {
            description: "Passed to ToolkitProvider to add search bar on top of table.",
            table: {
              category: 'Element'
            }
        },
        pagination: {
            description: "Passes an object to add pagination to the perticula table using paginationFactory module.",
            table: {
              category: 'Element'
            }
        },
        expandRow: {
            description: "Passes an object with render method to expand the pertucal row with html elements.",
            table: {
              category: 'Element'
            }
        },
        filter: {
            description: "Passes an object to add filters to the perticula table using filterFactory module.",
            table: {
              category: 'Element'
            }
        },
        overlay:{
            description: "Passes an object to add overlay spinner to the perticula table using overlayFactory module with parameters.",
            table: {
              category: 'Element'
            }
        },
        footer:{
            description: "could be a string value or a function returning data value.",
            table: {
              category: 'Element'
            }
        },
        footerFormatter:{
            description: "Passes a function to format the data of perticula column.",
            table: {
              category: 'Element'
            }
        },
        style: {
            description: "Sets the styles to the specific column to which this prop is passed.",
            table: {
              category: 'Style'
            }
        },
        editCellClasses:{
            description: "Add class to the specific column to which this prop is passed.",
            table: {
              category: 'Style'
            }
        },
        headerSortingClasses:{
            description: "Add sorting class to the specific header of the column to which this prop is passed.",
            table: {
              category: 'Style'
            }
        },
        editorClasses:{
            description: "Add editor class to the specific column to which this prop is passed.",
            table: {
              category: 'Style'
            }
        },
        isBordered: {
            description: "Sets the border to the table of the generated html table.",
            table: {
              category: 'Style'
            }
        },
        needPagination: {
            description: "Sets the pagination to the table of the generated html table.",
            table: {
              category: 'Style'
            }
        },
        needSearchBar: {
            description: "Sets the search bar to the table of the generated html table.",
            table: {
              category: 'Style'
            }
        },
        needCSVExport: {
            description: "Sets the CSVExport button to the table of the generated html table.",
            table: {
              category: 'Style'
            }
        },
        onTableEdit: {
            action: (e) => { console.log(e); },
            description: "Emits the events as soon as user clicks on edit action button.",
            table: {
              category: 'Events'
            }
        },
        onTableDelete: {
            action: (e) => { console.log(e); },
            description: "Emits the events as soon as user clicks on delete action button.",
            table: {
              category: 'Events'
            }
        }
    },
    parameters: {
        docs: {
          description: {
            component: 'DataTable component will generate the html Table with child html elements based on Ui schema also captures user input and emits as an event with updated data model.',
          },
        },
    }
};

const Template = (args) => <DataTable {...args} />;

export const Basicdattable = Template.bind({});
Basicdattable.args = CommonArgs;