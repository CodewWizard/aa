import React from "react";
import renderer from "react-test-renderer";
import AddDataToTable from "../addDataToTable";
import { render, screen, cleanup, fireEvent } from "@testing-library/react";

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

it("should render given schema correctly", () => {
    const testRenderer = renderer.create(<AddDataToTable {...addDataToTableArgs} />);
    expect(testRenderer.toJSON()).toMatchSnapshot();
    testRenderer.unmount();
});


describe("AddDataToTable UI Check", () => {
    it("should contain 'Add' button", () => {
        render(<AddDataToTable {...addDataToTableArgs} />);
        const addBtn = screen.getAllByText(/Add/i);
        expect(addBtn).not.toBeNull();
    });


    describe("should contain only Columns with key 'addDataToTableKey'", () => {
        it("should contain 'Type' Column", () => {
            render(<AddDataToTable {...addDataToTableArgs} />);
            const col = screen.getAllByText(/Type/i);
            expect(col).not.toBeNull();
        });

        it("should contain 'SubType' Column", () => {
            render(<AddDataToTable {...addDataToTableArgs} />);
            const col = screen.getAllByText(/SubType/i);
            expect(col).not.toBeNull();
        });

        it("should contain 'Value' Column", () => {
            render(<AddDataToTable {...addDataToTableArgs} />);
            const col = screen.getAllByText(/Value/i);
            expect(col).not.toBeNull();
        });
    });
});
