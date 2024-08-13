import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

const Table = ({ columns, data, onDelete, onBan }) => {
  const path = useLocation();
  const page = path.pathname.split('/').filter(Boolean).pop();

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [searchQuery, setSearchQuery] = useState(''); // State for search query

  // State for managing the modals
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showBanModal, setShowBanModal] = useState(false);
  const [deleteIndex, setDeleteIndex] = useState(null);
  const [banIndex, setBanIndex] = useState(null);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1); // Reset to first page when searching
  };

  // Filtered data based on the search query
  const filteredData = data.filter((row) =>
    columns.some((col) =>
      row[col.accessor]
        ?.toString()
        .toLowerCase()
        .includes(searchQuery.toLowerCase())
    )
  );

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedData = filteredData.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  const handleItemsPerPageChange = (e) => {
    setItemsPerPage(Number(e.target.value));
    setCurrentPage(1);
  };

  const handleDelete = (index) => {
    setShowDeleteModal(true);
    setDeleteIndex(index);
  };

  const handleBan = (index) => {
    setShowBanModal(true);
    setBanIndex(index);
  };

  const confirmDelete = () => {
    onDelete(deleteIndex);
    setShowDeleteModal(false);
  };

  const cancelDelete = () => {
    setShowDeleteModal(false);
    setDeleteIndex(null);
  };

  const confirmBan = () => {
    onBan(banIndex);
    setShowBanModal(false);
  };

  const cancelBan = () => {
    setShowBanModal(false);
    setBanIndex(null);
  };

  const handleDeleteClick = (e, index) => {
    e.preventDefault(); // Prevent page refresh
    handleDelete(index);
  };

  const handleBanClick = (e, index) => {
    e.preventDefault(); // Prevent page refresh
    handleBan(index);
  };

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  return (
    <div className="asset-table-container">
      {/* Search bar */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="form-control mb-3"
        />
      </div>

      <table className="asset-table rounded">
        <thead>
          <tr>
            {columns.map((col, index) => (
              <th key={index}>{col.header}</th>
            ))}
            <th>Delete</th>
            {(page !== "assets") && <th>Edit</th>}
            {(page === "students") && <th>Ban</th>}
          </tr>
        </thead>
        <tbody className="rounded">
          {paginatedData.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {columns.map((col, colIndex) => (
                <td key={colIndex}>{row[col.accessor]}</td>
              ))}
              <td>
                <a 
                  href="#"
                  className="bg-danger text-light rounded border"
                  onClick={(e) => handleDeleteClick(e, startIndex + rowIndex)}
                >
                  <i className="bi bi-trash-fill"></i>
                </a>
              </td>
              {(page !== "assets") && 
                <td>
                  <a 
                    href={`/${page}/:${paginatedData[rowIndex].id}`}
                    className="bg-success text-light rounded border"
                  >
                    <i className="bi bi-pen-fill"></i>
                  </a>
                </td>
              }
              {(page === "students") && 
                <td>
                  <a 
                    href="#"
                    className="bg-danger text-light rounded border"
                    onClick={(e) => handleBanClick(e, startIndex + rowIndex)}
                  >
                    <i className="bi bi-slash-circle-fill"></i>
                  </a>
                </td>
              }
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">
        <span>Per page: </span>
        <select
          className="select-control"
          value={itemsPerPage}
          onChange={handleItemsPerPageChange}
        >
          <option value={10}>10</option>
          <option value={20}>20</option>
          <option value={50}>50</option>
        </select>
        <div className="page-controls text-secondary">
          <button className='custom-button2'
            disabled={currentPage === 1}
            onClick={() => handlePageChange(currentPage - 1)}
          >
            Previous
          </button>
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              className={currentPage === index + 1 ? 'active custom-button2' : 'custom-button2'}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </button>
          ))}
          <button
            className='custom-button2'
            disabled={currentPage === totalPages}
            onClick={() => handlePageChange(currentPage + 1)}
          >
            Next
          </button>
        </div>
      </div>

      {/* Modal for confirming the delete */}
      <div
        className={`modal fade ${showDeleteModal ? 'show d-block' : 'd-none'}`}
        tabIndex="-1"
        role="dialog"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title text-dark">Confirm Deletion</h5>
            </div>
            <div className="modal-body text-dark">
              <p>Are you sure you want to delete this item?</p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={cancelDelete}
              >
                Cancel
              </button>
              <button
                type="button"
                className="btn btn-danger"
                onClick={confirmDelete}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for confirming the ban */}
      <div
        className={`modal fade ${showBanModal ? 'show d-block' : 'd-none'}`}
        tabIndex="-1"
        role="dialog"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title text-dark">Confirm Ban</h5>
            </div>
            <div className="modal-body text-dark">
              <p>Are you sure you want to ban this student? They won't be allowed to use the app for 30 days.</p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={cancelBan}
              >
                Cancel
              </button>
              <button
                type="button"
                className="btn btn-danger"
                onClick={confirmBan}
              >
                Ban
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
