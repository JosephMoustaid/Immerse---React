import React from 'react';

const CoursePreviewPage = ({ courseData, onConfirm }) => {
    return (
        <div className="carousel-item" id="coursePreviewPage">
            <div className="container d-flex justify-content-center align-items-center min-vh-100">
                <div className="card p-4 shadow-lg course-card" style={{ width: '100%', maxWidth: '800px' }}>
                    <h3 className="text-center mb-4">Course Preview</h3>
                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <h5>Course Details</h5>
                            <p><strong>Course Title:</strong> {courseData.title}</p>
                            <p><strong>Description:</strong> {courseData.description}</p>
                            <p><strong>type:</strong> {courseData.type}</p>
                            <p><strong>Instructor:</strong> {courseData.instructor}</p>
                        </div>
                        <div className="col-md-6 mb-3">
                            <h5 >File Uploads</h5>
                            {courseData.files.length > 0 ? (
                                <ul className='mt-3'>
                                    {courseData.files.map((file, index) => (
                                        <li key={index}>
                                            <p><strong>Type:</strong> {file.type}</p>
                                            <p><strong>Name:</strong> {file.name}</p>
                                            <p><strong>File:</strong> {file.file.name}</p>
                                            <p><strong>Size:</strong> {file.file.size}</p>
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <p>No files uploaded.</p>
                            )}
                        </div>
                    </div>
                    <div className="text-center mt-4">
                        <button className="btn custom-button2 px-4" onClick={onConfirm}>Confirm Data</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoursePreviewPage;
