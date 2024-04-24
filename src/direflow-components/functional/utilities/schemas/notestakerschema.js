import moment from "moment";

const dateFormatter = (cell) => {
    return moment(cell).format("MM-DD-YYYY HH:mm A")
}

const descriptionformatter = (cell) => {
    if(cell.trim()?.length >= 20){
        return `${cell}...`
    }
    return cell;
}

const tableColumns = [
    {
        dataField: "id",
        text: "id",
        hidden: true,
        sort: false,
        headerStyle: () => {
            return { width: "20%", textAlign: "center" };
        },
        style: {
            textAlign: "center"
        }
    },
    {
        dataField: "Description",
        text: "Description",
        sort: false,
        headerStyle: () => {
            return { width: "20%", textAlign: "center" };
        },
        style: {
            textAlign: "center"
        },
        formatter: descriptionformatter
    },
    {
        dataField: "CreatedBy",
        text: "Created By ",
        sort: false,
        headerStyle: () => {
            return { width: "16%", textAlign: "center" };
        },
        style: {
            textAlign: "center"
        }
    },
    {
        dataField: "CreatedOn",
        text: "Created On",
        sort: true,
        headerStyle: () => {
            return { width: "16%", textAlign: "center" };
        },
        style: {
            textAlign: "center"
        },
        formatter: dateFormatter
    },
    {
        dataField: "LastUpdatedBy",
        text: "Last update by",
        sort: false,
        headerStyle: () => {
            return { width: "17%", textAlign: "center" };
        },
        style: {
            textAlign: "center"
        }
    },
    {
        dataField: "LastUpdatedOn",
        text: "Last updated on",
        sort: true,
        headerStyle: () => {
            return { width: "20%", textAlign: "center" };
        },
        style: {
            textAlign: "center"
        },
        formatter: dateFormatter
    }
]

export {
    tableColumns
}