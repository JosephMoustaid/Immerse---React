import React, { useState } from 'react';
import axios from 'axios';

const CourseForm = ({ course, onSubmit }) => {
  const [title, setTitle] = useState(course ? course.title : '');

  const handleSubmit = (e) => {
    e.preventDefault();
    const courseData = { title };
    if (course) {
      axios.put(`/api/courses/${course.id}`, courseData)
        .then(response => onSubmit(response.data))
        .catch(error => console.error('Error updating course:', error));
    } else {
      axios.post('/api/courses', courseData)
        .then(response => onSubmit(response.data))
        .catch(error => console.error('Error creating course:', error));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
      </label>
      <button type="submit">{course ? 'Update' : 'Add'} Course</button>
    </form>
  );
};

export default CourseForm;
