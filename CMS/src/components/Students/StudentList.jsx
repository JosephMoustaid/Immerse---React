import React from 'react';
import Table from '../Table/Table.jsx';

function StudentList() {
  const columns = [
    { header: "ID", accessor: "id" },
    { header: "Name", accessor: "name" },
    { header: "Age", accessor: "age" },
    { header: "Major", accessor: "major" },
    { header: "Status", accessor: "status" }
  ];

  const data = [
    { id: 1, name: "John Doe", age: 21, major: "Computer Science", status: "Enrolled" },
    { id: 2, name: "Jane Smith", age: 22, major: "Mathematics", status: "Enrolled" },
    { id: 3, name: "Sam Johnson", age: 20, major: "Physics", status: "Graduated" },
    { id: 4, name: "Emily Davis", age: 23, major: "Biology", status: "Enrolled" },
    { id: 5, name: "Michael Brown", age: 19, major: "Chemistry", status: "Dropped" },
  ];

  return (
    <div className="student-list">
      <h1 className='letter-spacing-5 mb-4'>Students</h1>
      <Table columns={columns} data={data} />
    </div>
  );
}

export default StudentList;
