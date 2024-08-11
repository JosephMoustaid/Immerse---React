import React from "react";
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

    const data = [
        { name: "Model_01.obj", type: "3D Model", size: "15MB", uploadedBy: "User A", date: "11/07/2023", status: "Active", category: "Architecture" },
        { name: "Model_02.fbx", type: "3D Model", size: "25MB", uploadedBy: "User B", date: "12/07/2023", status: "Active", category: "Vehicle" },
        { name: "Texture_01.jpg", type: "Texture", size: "5MB", uploadedBy: "User C", date: "13/07/2023", status: "Inactive", category: "Materials" },
        { name: "Animation_01.fbx", type: "Animation", size: "20MB", uploadedBy: "User D", date: "13/07/2023", status: "Active", category: "Characters" },
        { name: "Model_03.obj", type: "3D Model", size: "30MB", uploadedBy: "User E", date: "14/07/2023", status: "Inactive", category: "Architecture" },
        { name: "Model_04.obj", type: "3D Model", size: "10MB", uploadedBy: "User F", date: "15/07/2023", status: "Active", category: "Environment" },
        { name: "Texture_02.png", type: "Texture", size: "8MB", uploadedBy: "User G", date: "19/07/2023", status: "Active", category: "Materials" },
        { name: "Model_05.fbx", type: "3D Model", size: "50MB", uploadedBy: "User H", date: "20/07/2023", status: "Inactive", category: "Characters" },
        { name: "Animation_02.fbx", type: "Animation", size: "60MB", uploadedBy: "User I", date: "21/07/2023", status: "Active", category: "Vehicle" },
        { name: "Model_06.obj", type: "3D Model", size: "40MB", uploadedBy: "User J", date: "22/07/2023", status: "Active", category: "Furniture" },
    ];

    // Add a checkbox column manually
    const enhancedData = data.map(item => ({
        checkbox: <input type="checkbox" />,
        ...item
    }));

    return (
        <>
            <h1 className='letter-spacing-5 mb-4'>Assets</h1>
            <Table columns={columns} data={enhancedData} />
        </>
    );
};

export default AssetList;
