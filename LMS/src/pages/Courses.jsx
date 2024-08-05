import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import CourseCard from '../components/CourseCard.jsx';
import { courseShape } from '../types/types.js';
import OffCanvasCourse from '../components/OffCanvasCourse.jsx';

function Courses({ courses }) {
    const [showOffCanvas, setShowOffCanvas] = useState(false);
    const [currentCourse, setCurrentCourse] = useState(null);

    const handleShow = (course) => {
        setCurrentCourse(course);
        setShowOffCanvas(true);
    };

    const handleClose = () => setShowOffCanvas(false);

    useEffect(() => {
        const exploreBtn = document.querySelector(".explore-button");
        if (exploreBtn) {
            exploreBtn.textContent = "Make a new course";
            exploreBtn.setAttribute("href", "make-course");
        }
    }, []);

    return (
        <div className="course-list mt-4">
            <div className="d-flex justify-content-end">
                <a href="make-course" className='custom-button2 px-3 text-light'>make a course</a>
            </div>
            <h4 className='underline mt-2 mb-3'>This is how the courses will be displayed to teachers</h4>
            <p className='underline mt-2 mb-3'>the teachers will have the courses they created in here , if they wanna browse public courses , thewy simply search</p>
            <div   className="course-list-columns course-head" style={{height : "30px"}}>
                <div   className="row">
                    <div   className="col-12 col-md-2">Course of</div>
                    <div   className="col-12 col-md-2">Field</div>
                    <div   className="col-12 col-md-3">Privacy</div>
                    <div   className="col-12 col-md-3">Actions</div>
                </div>
            </div>
            {courses.map((course) => (
                <a href="">
                    <div key={course.id}   className="course rounded">
                    <div   className="row">
                        <div   className="col-12 col-md-2">
                            <img   className="rounded" src={course.previewImg} alt={`Preview of ${course.title}`} />
                        </div>
                        <div   className="col-12 col-md-2">{course.name}</div>
                        <div   className="col-12 col-md-2">{course.type}</div>
                        <div   className="col-12 col-md-3"><a href="#" onClick={handleShow} className='underline'>View</a></div>
                        <div   className="col-12 col-md-3"><a href={course.editLink} className='underline'>Edit</a></div>
                    </div>
                    <OffCanvasCourse show={showOffCanvas} onClose={handleClose} course={course} />
                </div>
                </a>
                
            ))}
            <h4 className='underline mt-2 mb-3'>This is how the courses will be displayed to students so they can browse</h4>
            <div className="dashboard">
                <div   className="mt-5 mb-5" id='topPicks'>
                    <h4   className="mt-2">Courses </h4>
                    <div   className="row">
                        <h4   className="mt-2">Software </h4>
                        {courses.length > 0 ? (
                        courses.map((course, index) => (
                            course.category == "software" ? 
                            <div   className="col-12 col-sm-6 col-md-3 mb-2" key={index}>
                                <a onClick={handleShow} href="#"><CourseCard {...course} /></a>
                                <OffCanvasCourse show={showOffCanvas} onClose={handleClose} course={course} />
                            </div>
                            : ""
                        ))
                        ) : (
                        <p>No courses available.</p>
                        )}
                        <h4   className="mt-2">Mechanics </h4>
                        {courses.length > 0 ? (
                        courses.map((course, index) => (
                            course.category == "mechanics" ? 
                            <div   className="col-12 col-sm-6 col-md-3 mb-2" key={index}>
                                <a onClick={handleShow} href="#"><CourseCard {...course} /></a>
                                <OffCanvasCourse show={showOffCanvas} onClose={handleClose} course={course} />
                            </div>
                            : ""
                        ))
                        ) : (
                        <p>No courses available.</p>
                        )}
                    </div>
                </div>
            </div>
            
        
        </div>
    );
}

Courses.propTypes = {
    courses: PropTypes.arrayOf(courseShape),
}

export default Courses;

