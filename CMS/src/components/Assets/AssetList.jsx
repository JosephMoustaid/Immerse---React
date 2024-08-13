import React, { useState } from "react";
import Table from "../Table/Table.jsx";

const AssetList = () => {
    const columns = [
        { header: "", accessor: "checkbox" },
        { header: "Name", accessor: "name" },
        { header: "Type", accessor: "type" },
        { header: "Size", accessor: "size" },
        { header: "Uploaded By", accessor: "uploadedBy" },
        { header: "Date", accessor: "date" },
        { header: "Status", accessor: "status" },
        { header: "Category", accessor: "category" }
    ];

    const initialData = [
        { id: 1, name: "Model_01.obj", type: "3D Model", size: "15MB", uploadedBy: "User A", date: "11/07/2023", status: "Active", category: "Architecture" },
        { id: 2, name: "Model_02.fbx", type: "3D Model", size: "25MB", uploadedBy: "User B", date: "12/07/2023", status: "Active", category: "Vehicle" },
        { id: 3, name: "Texture_01.jpg", type: "Texture", size: "5MB", uploadedBy: "User C", date: "13/07/2023", status: "Inactive", category: "Materials" },
        { id: 4, name: "Animation_01.fbx", type: "Animation", size: "20MB", uploadedBy: "User D", date: "13/07/2023", status: "Active", category: "Characters" },
        { id: 5, name: "Model_03.obj", type: "3D Model", size: "30MB", uploadedBy: "User E", date: "14/07/2023", status: "Inactive", category: "Architecture" },
        { id: 6, name: "Model_04.obj", type: "3D Model", size: "10MB", uploadedBy: "User F", date: "15/07/2023", status: "Active", category: "Environment" },
        { id: 7, name: "Texture_02.png", type: "Texture", size: "8MB", uploadedBy: "User G", date: "19/07/2023", status: "Active", category: "Materials" },
        { id: 8, name: "Model_05.fbx", type: "3D Model", size: "50MB", uploadedBy: "User H", date: "20/07/2023", status: "Inactive", category: "Characters" },
        { id: 9, name: "Animation_02.fbx", type: "Animation", size: "60MB", uploadedBy: "User I", date: "21/07/2023", status: "Active", category: "Vehicle" },
        { id: 10, name: "Model_06.obj", type: "3D Model", size: "40MB", uploadedBy: "User J", date: "22/07/2023", status: "Active", category: "Furniture" },
    ];

    const [data, setData] = useState(initialData);
    const [selectedRows, setSelectedRows] = useState([]);

    // row selection handling function
    const handleRowSelect = (id) => {
        setSelectedRows(prevSelected =>
            prevSelected.includes(id)
                ? prevSelected.filter(rowId => rowId !== id)
                : [...prevSelected, id]
        );
    };

    // Handle delete all selected rows
    const handleDeleteAll = () => {
        setData(data.filter(item => !selectedRows.includes(item.id)));
        setSelectedRows([]);
    };

    // Add a checkbox column manually
    const enhancedData = data.map(item => ({
        checkbox: (
            <input
                type="checkbox"
                checked={selectedRows.includes(item.id)}
                onChange={() => handleRowSelect(item.id)}
            />
        ),
        ...item
    }));

    return (
        <>
            <h1 className='letter-spacing-5 mb-4'>Assets</h1>
            {selectedRows.length > 0 && (
                <button className="btn btn-danger mb-3" onClick={handleDeleteAll}>
                    Delete All
                </button>
            )}
            <Table columns={columns} data={enhancedData} />
        </>
    );
};

export default AssetList;
