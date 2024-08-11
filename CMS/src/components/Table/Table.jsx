import React, { useState } from 'react';

const Table = ({ columns, data }) => {
    // State for pagination
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);

    // Calculate the indices of the items to display
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedData = data.slice(startIndex, endIndex);

    // Handle page change
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    // Handle items per page change
    const handleItemsPerPageChange = (e) => {
        setItemsPerPage(Number(e.target.value));
        setCurrentPage(1); // Reset to first page when items per page changes
    };

    // Calculate total pages
    const totalPages = Math.ceil(data.length / itemsPerPage);

    return (
        <div className="asset-table-container">
            <div className="table-header">
                <button className="add-asset-btn">Add Asset</button>
                <button className="report-btn">Report</button>
            </div>
            <table className="asset-table rounded">
                <thead>
                    <tr>
                        {columns.map((col, index) => (
                            <th key={index}>{col.header}</th>
                        ))}
                    </tr>
                </thead>
                <tbody className="rounded">
                    {paginatedData.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            {columns.map((col, colIndex) => (
                                <td key={colIndex}>{row[col.accessor]}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="pagination">
                <span>Per page: </span>
                <select className="select-control" value={itemsPerPage} onChange={handleItemsPerPageChange}>
                    <option value={10}>10</option>
                    <option value={20}>20</option>
                    <option value={50}>50</option>
                </select>
                <div className="page-controls text-secondary">
                    <button
                        disabled={currentPage === 1}
                        onClick={() => handlePageChange(currentPage - 1)}
                    >
                        Previous
                    </button>
                    {[...Array(totalPages)].map((_, index) => (
                        <button
                            key={index}
                            className={currentPage === index + 1 ? 'active' : ''}
                            onClick={() => handlePageChange(index + 1)}
                        >
                            {index + 1}
                        </button>
                    ))}
                    <button
                        disabled={currentPage === totalPages}
                        onClick={() => handlePageChange(currentPage + 1)}
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Table;
