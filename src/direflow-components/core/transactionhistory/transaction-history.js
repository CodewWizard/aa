import React, { useEffect, useState } from "react";
import DataTable from "../data-table/datatable";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp, faEye } from "@fortawesome/free-solid-svg-icons";

const TransactionHistory = (props) => {
  const { policy, container, fetchHistory, groupColumnName, isShowExpandCol, needActionBtn, isExpandRow, sortColumnName, needSorting, groupRows } = props;
  const [rows, setRows] = useState([]);
  const [tableCols, setTableCols] = useState(props.tableCols);
  const [tempTableRowData, setTempTableRowData] = useState(rows);
  const [tableRowData, setTableRowData] = useState(rows);

  const groupByColumnHandler = (column, dataRows) => {
    const result = [];
    const check = [];
    dataRows.forEach((item, indx) => {
      let temp = {};
      if (!check.includes(item[column])) {
        temp[column] = item[column];
        temp["Index"] = indx.toString();
        temp["headerStyle"] = { textAlign: "center" };
        result.push(temp);
        check.push(item[column]);
      }
    });
    return result;
  };

  useEffect(() => {
    setTempTableRowData(rows);
    if (isExpandRow) {
      if (groupRows.length > 0) setTableRowData(groupRows)
      else setTableRowData(groupByColumnHandler(groupColumnName, rows));
    } else {
      setTableRowData(rows);
    }
  }, [rows]);

  const expandRow = {
    renderer: (row) => {
      let expandTableRow = tempTableRowData.filter(
        (item) => item[groupColumnName] === row[groupColumnName]
      )

      if (needSorting && sortColumnName) {
        expandTableRow = expandTableRow.sort((a,b)=> {
          if (typeof a[sortColumnName] === "number") return b[sortColumnName] - a[sortColumnName]
          else return a[sortColumnName].toLowerCase() < b[sortColumnName].toLowerCase() ? 1 : -1
        })
        };

      return (
        <div className="row m-auto expandRows">
          <table className="table">
            <tbody>
            {expandTableRow.map((item, indx) => {
              return (
                <tr key={`tr-${indx}`}>
                  {tableCols.map((i, ix) => {
                    if (!i.hidden && i.dataField != 'action'){
                      return (
                        item[i.dataField] ? (
                          <td
                            key={`td-${ix}`}
                            style={i.headerStyle && i?.headerStyle()}
                          >
                            {i.dataField != groupColumnName
                              ? i.customFormatter
                                ? i.customFormatter(item[i.dataField], item)
                                : item[i.dataField]
                              : ""}
                          </td>
                        ) : <td key={`td-${ix}`}></td>
                      );
                    }
                  })}
                  <td style={{width: "60px"}}></td>
                </tr>
              );
            })}
            </tbody>
          </table>
        </div>
      );
    },
    showExpandColumn: isShowExpandCol ? isShowExpandCol : true,
    expandByColumnOnly: isShowExpandCol ? isShowExpandCol : true,
    onlyOneExpanding: true,
    expandColumnPosition: "right",
    expandColumnRenderer: ({ expanded }) => {
      if (expanded) {
        return <FontAwesomeIcon icon={faAngleUp} size="lg" />;
      }
      return <FontAwesomeIcon icon={faAngleDown} size="lg" />;
    },
    className: "p-0 m-0 text-center",
    parentClass: "text-center",
  };

  const TransactionHistoryArgs = {
    tableKey: props.tableKey || "transaction-history-key",
    cols: tableCols,
    rows: tableRowData,
    isBordered: false,
    needPagination: false,
    needSearchBar: false,
    needCSVExport: false,
    expandRow: isExpandRow && expandRow,
    ...props.tableProps,
    parentClass: props.parentClass,
    titleClass: props.titleClass,
    tableClass: props.tableClass
  };

  const TableActions = (cell, row) => {
    return (
      <>
        <div className="">
          <a
            title="View"
            className="display-inblock actionIcon ms-2"
            target="_blank"
            style={{ cursor: "pointer" }}
            rel="noreferrer"
            onClick={()=>{
                if(props.viewHandler){
                    props.viewHandler(row);
                    return;
                }
                window.open(row.Uri, "_blank");
            }}
          >
            <FontAwesomeIcon icon={faEye} size="lg" />
          </a>
        </div>
      </>
    );
  };

  useEffect(() => {
    (async () => {
      let policies = await fetchHistory(policy, container);
      setRows(policies);
    })();

    (needActionBtn) && setTableCols((prev) => {
      if (prev) {
        const incAction = prev.filter(x=>x.dataField == "action");
        if(incAction.length>0){
            return prev;
        }
        return [
          ...prev,
          {
            dataField: "action",
            text: "Action",
            sort: false,
            hidden: false,
            formatter: TableActions,
          },
        ];
      }
    });
  }, []);

  return (
    <>
      <div className={props.parentClass || "first-table position-relative"}>
        {props.title && (
          <h3 className={props.titleClass || "m-0"}>{props.title}</h3>
        )}
        <div className={props.tableClass || "w-100"}>
          <DataTable {...TransactionHistoryArgs} />
        </div>
      </div>
    </>
  );
};

export default TransactionHistory;
