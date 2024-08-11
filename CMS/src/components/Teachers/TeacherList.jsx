import React from 'react';
import Table from '../Table/Table.jsx';

function TeacherList() {
  const columns = [
    { header: "ID", accessor: "id" },
    { header: "Name", accessor: "name" },
    { header: "Subject", accessor: "subject" },
    { header: "Experience", accessor: "experience" },
    { header: "Status", accessor: "status" }
  ];

  const data = [
    { id: 1, name: "Dr. Alice Brown", subject: "Computer Science", experience: "10 years", status: "Active" },
    { id: 2, name: "Prof. Mark Davis", subject: "Mathematics", experience: "15 years", status: "On Leave" },
    { id: 3, name: "Dr. Emily Clark", subject: "Physics", experience: "8 years", status: "Active" },
    { id: 4, name: "Dr. Robert White", subject: "Chemistry", experience: "12 years", status: "Retired" },
    { id: 5, name: "Prof. Laura Green", subject: "Biology", experience: "5 years", status: "Active" },
  ];

  return (
    <div className="teacher-list">
      <h1 className='letter-spacing-5 mb-4'>Teachers</h1>
      <Table columns={columns} data={data} />
    </div>
  );
}

export default TeacherList;
