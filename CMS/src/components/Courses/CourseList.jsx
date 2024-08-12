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
    { id: 6, courseName: "Introduction to Programming", instructor: "Dr. Alice Brown", credits: 3, status: "Ongoing" },
    { id: 7, courseName: "Advanced Mathematics", instructor: "Prof. Mark Davis", credits: 4, status: "Completed" },
    { id: 8, courseName: "Modern Physics", instructor: "Dr. Emily Clark", credits: 4, status: "Ongoing" },
    { id: 9, courseName: "Organic Chemistry", instructor: "Dr. Robert White", credits: 3, status: "Completed" },
    { id: 10, courseName: "Biology 101", instructor: "Prof. Laura Green", credits: 2, status: "Ongoing" },
    { id: 11, courseName: "Introduction to Programming", instructor: "Dr. Alice Brown", credits: 3, status: "Ongoing" },
    { id: 12, courseName: "Advanced Mathematics", instructor: "Prof. Mark Davis", credits: 4, status: "Completed" },
    { id: 13, courseName: "Modern Physics", instructor: "Dr. Emily Clark", credits: 4, status: "Ongoing" },
    { id: 14, courseName: "Organic Chemistry", instructor: "Dr. Robert White", credits: 3, status: "Completed" },
    { id: 15, courseName: "Biology 101", instructor: "Prof. Laura Green", credits: 2, status: "Ongoing" },
    { id: 16, courseName: "Introduction to Programming", instructor: "Dr. Alice Brown", credits: 3, status: "Ongoing" },
    { id: 17, courseName: "Advanced Mathematics", instructor: "Prof. Mark Davis", credits: 4, status: "Completed" },
    { id: 18, courseName: "Modern Physics", instructor: "Dr. Emily Clark", credits: 4, status: "Ongoing" },
    { id: 19, courseName: "Organic Chemistry", instructor: "Dr. Robert White", credits: 3, status: "Completed" },
    { id: 20, courseName: "Biology 101", instructor: "Prof. Laura Green", credits: 2, status: "Ongoing" },
    { id: 21, courseName: "Introduction to Programming", instructor: "Dr. Alice Brown", credits: 3, status: "Ongoing" },
    { id: 22, courseName: "Advanced Mathematics", instructor: "Prof. Mark Davis", credits: 4, status: "Completed" },
    { id: 23, courseName: "Modern Physics", instructor: "Dr. Emily Clark", credits: 4, status: "Ongoing" },
    { id: 24, courseName: "Organic Chemistry", instructor: "Dr. Robert White", credits: 3, status: "Completed" },
    { id: 25, courseName: "Biology 101", instructor: "Prof. Laura Green", credits: 2, status: "Ongoing" },
    { id: 26, courseName: "Introduction to Programming", instructor: "Dr. Alice Brown", credits: 3, status: "Ongoing" },
    { id: 27, courseName: "Advanced Mathematics", instructor: "Prof. Mark Davis", credits: 4, status: "Completed" },
    { id: 28, courseName: "Modern Physics", instructor: "Dr. Emily Clark", credits: 4, status: "Ongoing" },
    { id: 29, courseName: "Organic Chemistry", instructor: "Dr. Robert White", credits: 3, status: "Completed" },
    { id: 30, courseName: "Biology 101", instructor: "Prof. Laura Green", credits: 2, status: "Ongoing" },
  ];

  return (
    <div className="course-list">
      <h1 className='letter-spacing-5 mb-4'>Courses</h1>
      <Table columns={columns} data={data} />
    </div>
  );
}

export default CourseList;
