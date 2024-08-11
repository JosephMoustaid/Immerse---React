import React, { useState } from 'react';
import axios from 'axios';

const TeacherForm = ({ teacher, onSubmit }) => {
  const [name, setName] = useState(teacher ? teacher.name : '');

  const handleSubmit = (e) => {
    e.preventDefault();
    const teacherData = { name };
    if (teacher) {
      axios.put(`/api/teachers/${teacher.id}`, teacherData)
        .then(response => onSubmit(response.data))
        .catch(error => console.error('Error updating teacher:', error));
    } else {
      axios.post('/api/teachers', teacherData)
        .then(response => onSubmit(response.data))
        .catch(error => console.error('Error creating teacher:', error));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </label>
      <button type="submit">{teacher ? 'Update' : 'Add'} Teacher</button>
    </form>
  );
};

export default TeacherForm;
