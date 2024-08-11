import React from 'react';
import Table from '../Table/Table.jsx';

function CourseList() {
  const columns = [
    { header: "ID", accessor: "id" },
    { header: "Course Name", accessor: "courseName" },
    { header: "Instructor", accessor: "instructor" },
    { header: "Credits", accessor: "credits" },
    { header: "Status", accessor: "status" }
  ];

  const data = [
    { id: 1, courseName: "Introduction to Programming", instructor: "Dr. Alice Brown", credits: 3, status: "Ongoing" },
    { id: 2, courseName: "Advanced Mathematics", instructor: "Prof. Mark Davis", credits: 4, status: "Completed" },
    { id: 3, courseName: "Modern Physics", instructor: "Dr. Emily Clark", credits: 4, status: "Ongoing" },
    { id: 4, courseName: "Organic Chemistry", instructor: "Dr. Robert White", credits: 3, status: "Completed" },
    { id: 5, courseName: "Biology 101", instructor: "Prof. Laura Green", credits: 2, status: "Ongoing" },
  ];

  return (
    <div className="course-list">
      <h1 className='letter-spacing-5 mb-4'>Courses</h1>
      <Table columns={columns} data={data} />
    </div>
  );
}

export default CourseList;
