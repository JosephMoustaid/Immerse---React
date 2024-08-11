// src/components/Teachers/TeacherList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TeacherList = () => {
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    axios.get('/api/teachers')
      .then(response => setTeachers(response.data))
      .catch(error => console.error('Error fetching teachers:', error));
  }, []);

  return (
    <div>
      <h2>Teacher List</h2>
      <ul>
        {teachers.map(teacher => (
          <li key={teacher.id}>{teacher.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default TeacherList;
