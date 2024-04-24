import React, { useEffect, useState } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import { paginationOptions } from './constant.js';
import ToolkitProvider, { Search, CSVExport } from 'react-bootstrap-table2-toolkit';
const { SearchBar, ClearSearchButton } = Search;

const DataTable = (tableProps) => {

  const [internalRows, setInternalRows] = useState(tableProps.rows);
  const [updateRows, setUpdateRows] = useState('');
  const [message, setMessage] = useState("No Results Found !!!");

  const { ExportCSVButton } = CSVExport;
  useEffect(() => {
    setInternalRows(tableProps.rows);
    tableProps.onTableEdit && tableProps.onTableEdit(tableProps.rows, 1);
  }, [tableProps.rows]);
  useEffect(() => {

    setUpdateRows(tableProps.updateRows);
  }, [tableProps.updateRows]);

  useEffect(() => {
    setMessage(tableProps.message);
  }, [tableProps.message]);

  return (<>
    {/* <div>{JSON.stringify(internalRows)}</div> */}
    <ToolkitProvider
      bootstrap4
      keyField={tableProps.tableKey || 'Id'}
      data={tableProps.rows ? tableProps.rows : []}
      columns={tableProps.cols}
      search
      exportCSV
    >
      {
        props => (
          <div className='singleBox customDataTable'>
            {
              tableProps.tableHeading?.length > 0 &&
              <h5 className='primaryColor3 graphik-Medium mb-3'>{tableProps.tableHeading}</h5>
            }
            {tableProps.needCSVExport &&
              <>
                <ExportCSVButton {...props.csvProps} className="btn btnStyle btnSecon my-3">Export CSV</ExportCSVButton>
              </>
            }
            {tableProps.needSearchBar &&
              <div className='my-1'>
                <SearchBar {...props.searchProps} />
                <ClearSearchButton {...props.searchProps} />
              </div>
            }
            {
              tableProps.needPagination
                ? <>
                  <BootstrapTable
                    {...props.baseProps}
                    keyField={tableProps.tableKey || 'Id'}
                    bordered={tableProps.isBordered}
                    pagination={paginationFactory(paginationOptions)}
                    expandRow={tableProps.expandRow}
                    selectRow={tableProps.selectRow}
                    rowStyle={tableProps.rowStyle}
                    noDataIndication={message || 'No Results Found !!!'}

                  />
                </>
                :
                <>
                  <BootstrapTable
                    {...props.baseProps}
                    keyField={tableProps.tableKey || 'Id'}
                    bordered={tableProps.isBordered}
                    expandRow={tableProps.expandRow}
                    selectRow={tableProps.selectRow}
                    rowStyle={tableProps.rowStyle}
                    noDataIndication={message || 'No Results Found !!!'}
              
                  />
                </>
            }

          </div>
        )
      }
    </ToolkitProvider>
  </>
  );
}

export default DataTable;
