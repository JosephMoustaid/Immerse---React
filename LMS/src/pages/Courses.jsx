import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import CourseCard from '../components/CourseCard.jsx';
import { courseShape } from '../types/types.js';
import OffCanvasCourse from '../components/OffCanvasCourse.jsx';

function Courses({ courses }) {
    const [showOffCanvas, setShowOffCanvas] = useState(false);
    const [currentCourse, setCurrentCourse] = useState(null);
    const [visibleSoftwareCourses, setVisibleSoftwareCourses] = useState(4);
    const [visibleMechanicsCourses, setVisibleMechanicsCourses] = useState(4);
    const [expandedSoftware, setExpandedSoftware] = useState(false);
    const [expandedMechanics, setExpandedMechanics] = useState(false);

    const handleShow = (course) => {
        setCurrentCourse(course);
        setShowOffCanvas(true);
    };

    const handleClose = () => {
        setShowOffCanvas(false);
        setCurrentCourse(null);
    };

    const handleLoadMore = (category) => {
        if (category === "software") {
            const remainingCourses = courses.filter(course => course.category === "software").length - visibleSoftwareCourses;
            if (expandedSoftware) {
                setVisibleSoftwareCourses(4);
                setExpandedSoftware(false);
            } else {
                setVisibleSoftwareCourses(prev => prev + Math.min(remainingCourses, 8));
                setExpandedSoftware(true);
            }
        } else if (category === "mechanics") {
            const remainingCourses = courses.filter(course => course.category === "mechanics").length - visibleMechanicsCourses;
            if (expandedMechanics) {
                setVisibleMechanicsCourses(4);
                setExpandedMechanics(false);
            } else {
                setVisibleMechanicsCourses(prev => prev + Math.min(remainingCourses, 8));
                setExpandedMechanics(true);
            }
        }
    };

    useEffect(() => {
        const exploreBtn = document.querySelector(".explore-button");
        if (exploreBtn) {
            exploreBtn.textContent = "Make a new course";
            exploreBtn.setAttribute("href", "make-course");
        }
    }, []);

    return (
        <div className="course-list mt-4 px-md-5">
            <div className="d-flex justify-content-end">
                <a href="join-course" className='custom-button2 px-3 text-light me-2'><i className="bi bi-box-arrow-in-right "></i> join a course</a>
                <a href="make-course" className='custom-button2 px-3 text-light'><i className="bi bi-plus-lg"></i> Make a course</a>
            </div>
            <h4 className='underline mt-2 mb-3'>This is how the courses will be displayed to teachers</h4>
            <p className='underline mt-2 mb-3'>The teachers will have the courses they created here. If they want to browse public courses, they simply search.</p>
            <div className="table-responsive">
            <div className="table-responsive">
    <table className="table table-bordered">
        <thead className="thead-light">
        <tr>
            <th scope="col" className="d-none d-sm-table-cell">Preview</th>
            <th scope="col">Course</th>
            <th scope="col">Field</th>
            <th scope="col">Privacy</th>
            <th scope="col">Actions</th>
        </tr>
        </thead>
        <tbody>
        {courses.length > 0 ? (
            courses.map((course) => (
            <tr key={course.id} className="course rounded">
                <td className="text-center d-none d-sm-table-cell">
                    <img
                        className="rounded course-list-previewImg img-fluid"
                        src={course.previewImg}
                        alt={`Preview of ${course.name}`}
                        style={{ maxWidth: '100px', height: 'auto' }}
                    />
                </td>
                <td>
                    <div className="d-flex flex-column">
                        <strong>Course</strong> 
                        <span>{course.name}</span>
                    </div>
                </td>
                <td>
                    <div className="d-flex flex-column">
                        <strong>Field</strong> 
                        <span>{course.type}</span>
                    </div>
                </td>
                <td>
                    <div className="d-flex flex-column">
                        <strong>Privacy</strong> 
                        <span>{course.category}</span>
                    </div>
                </td>
                <td>
                    <div className="d-flex flex-column">
                        <strong>Actions</strong> 
                        <div className="d-flex justify-content-center justify-content-md-start">
                            <a
                            href={`view-course?c=${course.id}`}
                            onClick={() => handleShow(course)}
                            role="button"
                            className="btn btn-sm editCourseButton px-2 me-2"
                            >
                            View
                            </a>
                            <a
                            href={`edit-course?c=${course.id}`}
                            role="button"
                            className="btn btn-sm borderButton px-2"
                            >
                            Edit
                            </a>
                        </div>
                    </div>
                </td>
            </tr>
            ))
        ) : (
            <tr>
            <td colSpan="5" className="text-center">
                No courses available.
            </td>
            </tr>
        )}
        </tbody>
    </table>
</div>


            </div>

            
            <h4 className='underline mt-2 mb-3 px-md-5'>This is how the courses will be displayed to students so they can browse</h4>
            <div className="dashboard px-md-5">
                <div className="mt-5 mb-5" id='topPicks'>
                    <h2 className="mt-2">Courses</h2>
                    <div className="row">
                        <h4 className="mt-2" id='software'>Software</h4>
                        {courses.length > 0 ? (
                            courses.filter(course => course.category === "software")
                                .slice(0, visibleSoftwareCourses)
                                .map((course, index) => (
                                    <div className="col-12 col-sm-6 col-md-3 mb-2" key={index}>
                                        <a onClick={() => handleShow(course)} href="#software"><CourseCard {...course} /></a>
                                    </div>
                                ))
                        ) : (
                            <p>No courses available yet.</p>
                        )}
                        <div className="col-12"></div>

                        {courses.filter(course => course.category === "software").length > visibleSoftwareCourses && (
                            <div className="loadMoreButton ms-md-3">
                                <a onClick={() => handleLoadMore("software")}>
                                    {expandedSoftware ? 'Display Less' : `Display ${Math.min(courses.filter(course => course.category === "software").length - visibleSoftwareCourses, 8)} More`}
                                </a>
                            </div>
                        )}
                        <div className="borderButton ms-1">
                            <a href="">See All</a>
                            <i className="bi bi-arrow-right ms-2"></i>
                        </div> 
                        
                        <h4 className="mt-5" id='mechanics'> Mechanics</h4>
                        {courses.length > 0 ? (
                            courses.filter(course => course.category === "mechanics")
                                .slice(0, visibleMechanicsCourses)
                                .map((course, index) => (
                                    <div className="col-12 col-sm-6 col-md-3 mb-2" key={index}>
                                        <a onClick={() => handleShow(course)} href="#mechanics"><CourseCard {...course} /></a>
                                    </div>
                                ))
                        ) : (
                            <p>No courses available yet.</p>
                        )}
                        <div className="col-12"></div>
                        {courses.filter(course => course.category === "mechanics").length > visibleMechanicsCourses && (
                            <div className="loadMoreButton ms-md-3">
                                <a onClick={() => handleLoadMore("mechanics")}>
                                    {expandedMechanics ? 'Display Less' : `Display ${Math.min(courses.filter(course => course.category === "mechanics").length - visibleMechanicsCourses, 8)} More`}
                                </a>
                            </div>
                        )}
                        <div className="borderButton ms-2">
                            <a href="">See All</a>
                            <i className="bi bi-arrow-right ms-1"></i>
                        </div> 
                    </div>
                </div>
            </div>
            {currentCourse && (
                <OffCanvasCourse show={showOffCanvas} onClose={handleClose} course={currentCourse} id={`offcanvasCourse${currentCourse.id}`} />
            )}
        </div>
    );
}

Courses.propTypes = {
    courses: PropTypes.arrayOf(courseShape),
}

export default Courses;
