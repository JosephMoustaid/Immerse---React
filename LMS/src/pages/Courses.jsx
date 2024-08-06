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
                <a href="make-course" className='custom-button2 px-3 text-light'>Make a course</a>
            </div>
            <h4 className='underline mt-2 mb-3'>This is how the courses will be displayed to teachers</h4>
            <p className='underline mt-2 mb-3'>The teachers will have the courses they created here. If they want to browse public courses, they simply search.</p>
            <div className="course-list-columns course-head" style={{ height: "30px" }}>
                <div className="row">
                    <div className="col-12 col-md-2">Course of</div>
                    <div className="col-12 col-md-2">Field</div>
                    <div className="col-12 col-md-3">Privacy</div>
                    <div className="col-12 col-md-3">Actions</div>
                </div>
            </div>
            {courses.length > 0 ? 
                courses.map((course) => (
                    <div key={course.id} className="course rounded">
                        <div className="row">
                            <div className="col-12 col-md-2">
                                <img className="rounded" src={course.previewImg} alt={`Preview of ${course.title}`} />
                            </div>
                            <div className="col-12 col-md-2">{course.name}</div>
                            <div className="col-12 col-md-2">{course.type}</div>
                            <div className="col-12 col-md-3"><a href="#" onClick={() => handleShow(course)} role='button' className='blue-button'>View</a></div>
                            <div className="col-12 col-md-3"><a href={course.editLink} role='button' className='blue-button'>Edit</a></div>
                        </div>
                    </div>
                ))
            : ""}
            
            <h4 className='underline mt-2 mb-3 px-md-5'>This is how the courses will be displayed to students so they can browse</h4>
            <div className="dashboard px-md-5">
                <div className="mt-5 mb-5" id='topPicks'>
                    <h4 className="mt-2">Courses</h4>
                    <div className="row">
                        <h4 className="mt-2">Software</h4>
                        {courses.length > 0 ? (
                            courses.filter(course => course.category === "software")
                                .slice(0, visibleSoftwareCourses)
                                .map((course, index) => (
                                    <div className="col-12 col-sm-6 col-md-3 mb-2" key={index}>
                                        <a onClick={() => handleShow(course)} href="#"><CourseCard {...course} /></a>
                                    </div>
                                ))
                        ) : (
                            <p>No courses available.</p>
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
                        
                        <h4 className="mt-5">Mechanics</h4>
                        {courses.length > 0 ? (
                            courses.filter(course => course.category === "mechanics")
                                .slice(0, visibleMechanicsCourses)
                                .map((course, index) => (
                                    <div className="col-12 col-sm-6 col-md-3 mb-2" key={index}>
                                        <a onClick={() => handleShow(course)} href="#"><CourseCard {...course} /></a>
                                    </div>
                                ))
                        ) : (
                            <p>No courses available.</p>
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
