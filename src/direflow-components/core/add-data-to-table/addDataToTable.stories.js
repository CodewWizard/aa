import React from "react";
import AddDataToTable from "./addDataToTable";

const columns = [
    {
        tablekey: "addDataToTableKey",
        dataField: 'Type',
        text: 'Type',
        sort: false,
        headerStyle: () => {
            return { width: "30%" };
        },
    },
    {
        tablekey: "addDataToTableKey",
        dataField: 'SubType',
        text: 'SubType',
        sort: false,
        headerStyle: () => {
            return { width: "30%" };
        },
    },
    {
        tablekey: "addDataToTableKey",
        dataField: 'Value',
        text: 'Value',
        sort: false,
        headerStyle: () => {
            return { width: "30%" };
        },
    },
];

const addDataToTableArgs = {
    controlKey: "addDataToTableKey",
    keyField: "Type",
    columns,
    schemaData: {},   //policy state where data is stored.
    dataPath: "",     // final datapath where data will be stored from table
    tempPath: "",      // temp datapath from where data will be fetched
    value: [],          // list of rows from where data can be changed dynamically
    onChange: (model) => { }, // event emitted when row is added or deleted.

    // optional props
    onAddHandler: (currObj, prevAddedRows, controlKey) => {
        return true;
    },
    onTableDeleteHandler: (deleteData, deleteIndex, controlKey) => {
        return true;
    },
    ignoreIndex: "0",
    requiredDataFields: [],
    btnLabel: "Add",
    parentClass: "",
}

export default {
    title: 'Design System/Core/AddDataToTable',
    component: AddDataToTable,
    parameters: {
        docs: {
            description: {
                component:
                    "AddDataToTable is one of the controltype of the DynamicForm Component which provides ability to add any controltype data to the table provided by this component. Check DynamicForm>AdvancedControls, where this component is used."
            }
        }
    },
    argTypes: {
        controlKey: {
            description: "Unique Key of 'adddatatotable' controltype in dynamicform. This key is also used to identify columns belonging to this table(must match with 'tableKey' property of columns).",
            table: {
                category: "String"
            }
        },
        keyField: {
            description: "Column DataField which will be considered as unique per table.",
            table: {
                category: "String"
            }
        },
        columns: {
            description: "Bootstrap table columns. Contains 'tableKey' property(custom property) to identify table to which column belongs(This is in the case of multiple 'adddatatotable' controltype in dynamicform. As columns are one of the props for dynamicform.)",
            table: {
                category: "Array"
            }
        },
        schemaData: {
            description: "Policy state where data is stored.",
            table: {
                category: "Object"
            }
        },
        dataPath: {
            description: "Final datapath where data will be stored from table on 'Add' click.E.g: InsuredAccount.Locations.",
            table: {
                category: "String",
            }
        },
        tempPath: {
            description: "Temp datapath from where data will be fetched. E.g: TableData.",
            table: {
                category: "String"
            }
        },
        value: {
            description: "List of rows from where data can be changed dynamically",
            table: {
                default: [],
                category: "Array"
            }
        },
        onChange: {
            description: "Event emitted when row is added or deleted. Provides rows as parameter.",
            table: {
                category: "Event"
            }
        },
        onAddHandler: {
            description: "Optional Event emitted before the row is added to the table. If this function returns 'true' then data is added to the table else ignored. E.g: Checks can be added here, such as 'Data is already present in table'.",
            table: {
                category: "Event"
            }
        },
        onTableDeleteHandler: {
            description: "Optional Event emitted before the row is deleted from the table. If this function returns 'true' then data is deleted from the table else ignored. E.g: Warnings can be added here, such as 'Do you really want to delete?'.",
            table: {
                category: "Event"
            }
        },
        requiredDataFields: {
            description: "Optional List of keys of the controls that are required and must be filled to be added in table. E.g: ['AddressLine1', 'State.0']. Here, 'AddressLine1' is the id and 'State.0' where 'State' is the class and '0' indicates first class in the DOM.",
            table: {
                category: "Array"
            }
        },
        ignoreIndex: {
            description: "Optional field that contains index to be ignored for deletion. E.g '0' for single ignore or ['0', '4'] for multiple ignores.",
            table: {
                category: "String/Array"
            }
        },
    }
}

const Template = args => <AddDataToTable {...args} />

export const Basic = Template.bind({});
Basic.args = addDataToTableArgs;


