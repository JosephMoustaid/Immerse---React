import React, { useState } from 'react';
import axios from 'axios';

const StudentForm = ({ student, onSubmit }) => {
  const [name, setName] = useState(student ? student.name : '');

  const handleSubmit = (e) => {
    e.preventDefault();
    const studentData = { name };
    if (student) {
      axios.put(`/api/students/${student.id}`, studentData)
        .then(response => onSubmit(response.data))
        .catch(error => console.error('Error updating student:', error));
    } else {
      axios.post('/api/students', studentData)
        .then(response => onSubmit(response.data))
        .catch(error => console.error('Error creating student:', error));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </label>
      <button type="submit">{student ? 'Update' : 'Add'} Student</button>
    </form>
  );
};

export default StudentForm;
