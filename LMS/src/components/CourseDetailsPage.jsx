import React from 'react';

const CourseDetailsPage = () => (
    <div className="carousel-item active">
        <div className="container d-flex justify-content-center align-items-center min-vh-100">
            <div className="card p-4 shadow-lg course-card" style={{ width: '100%', maxWidth: '600px' }}>
                <h3 className="text-center mb-4">Course Details</h3>
                <form className="course-form">
                    <div className="form-group mb-3">
                        <label htmlFor="courseName" className="form-label">Course Name <span className="text-danger">*</span></label>
                        <input type="text" id="courseName" className="form-control" placeholder="Enter course name" required />
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="category" className="form-label">Category <span className="text-danger">*</span></label>
                        <select id="category" className="form-select" required>
                            <option value="electronics">Electronics</option>
                            <option value="mechanicx">Mechanics</option>
                            <option value="computerScience">Computer Science</option>
                            <option value="numeric">Numeric</option>
                            <option value="biology">Biology</option>
                        </select>
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="environment" className="form-label">Environment <span className="text-danger">*</span></label>
                        <select id="environment" className="form-select" required>
                            <option value="" disabled selected>Select environment</option>
                            <option value="lab">Lab</option>
                            <option value="school">School</option>
                        </select>
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="courseDescription" className="form-label">Course Description <span className="text-danger">*</span></label>
                        <textarea id="courseDescription" className="form-control" rows="4" placeholder="Enter course description" required></textarea>
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="privacy" className="form-label">Privacy <span className="text-danger">*</span></label>
                        <select id="privacy" className="form-select" required>
                            <option value="" disabled selected>Select privacy</option>
                            <option value="private">Private</option>
                            <option value="public">Public</option>
                        </select>
                    </div>
                </form>
            </div>
        </div>
    </div>
);

export default CourseDetailsPage;
