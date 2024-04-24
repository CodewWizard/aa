const paginationOptions = {
    pageStartIndex: 1, // first page will be 0, default is 1
    sizePerPage: 10,  // the pagination bar size, default is 10
    showTotal: true, // display pagination information
    sizePerPageList: [ 
        { text: '5', value: 5 }, 
        { text: '10', value: 10 }, 
        { text: '20', value: 20 }, 
        { text: '50', value: 50 },
        { text: '100', value: 100 }
    ], // A numeric array is also available: [5, 10]. the purpose of above example is custom the text
    withFirstAndLast: false, // hide the going to first and last page button
    alwaysShowAllBtns: true, // always show the next and previous page button
    firstPageText: 'First', // the text of first page button
    prePageText: 'Prev', // the text of previous page button
    nextPageText: 'Next', // the text of next page button
    lastPageText: 'Last', // the text of last page button
    nextPageTitle: 'Go to next', // the title of next page button
    prePageTitle: 'Go to previous', // the title of previous page button
    firstPageTitle: 'Go to first', // the title of first page button
    lastPageTitle: 'Go to last', // the title of last page button
    hideSizePerPage: false, // hide the size per page dropdown
    hidePageListOnlyOnePage: false, // hide pagination bar when only one page, default is false
    // onPageChange: (page, sizePerPage) => {document.documentElement.scrollTop = 0}, // callback function when page was changing
    // onSizePerPageChange: (sizePerPage, page) => {}, // callback function when page size was changing
    // paginationTotalRenderer: (from, to, size) => {}  // custom the pagination total
  };
export { paginationOptions };