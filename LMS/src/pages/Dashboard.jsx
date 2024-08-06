import React, { useEffect, useState } from 'react';
import CourseCard from '../components/CourseCard.jsx';
import AssignementCard from '../components/AssignementCard.jsx';
import OffCanvasCourse from '../components/OffCanvasCourse.jsx';
import PropTypes from 'prop-types';
import { courseShape, assignmentShape } from '../types/types.js';

const Dashboard = ({ enrolledCourses = [], bookmarksCourses = [], recommendedCourses = [], assignments = [] }) => {
  const [showOffCanvas, setShowOffCanvas] = useState(false);
  const [currentCourse, setCurrentCourse] = useState(null);

  const handleShow = (course) => {
    setCurrentCourse(course);
    setShowOffCanvas(true);
  };

  const handleClose = () => {
    setShowOffCanvas(false);
    setCurrentCourse(null);
  };

  const removeExploreButton = () => {
    let exploreBtn = document.querySelector(".explore-button");
    if (exploreBtn) {
      exploreBtn.style.display = "none";
    }
  };

  useEffect(() => {
    removeExploreButton();
  }, []);

  return (
    <div className="dashboard px-md-5">
      <div>
        <div id='enrolled'>
          <h4 className="mt-2">Enrolled Courses</h4>
          <div className="row">
            {enrolledCourses.length > 0 ? (
              enrolledCourses.map((course, index) => (
                <div className="col-12 col-sm-6 col-md-3 mb-2" key={index}>
                  <a onClick={() => handleShow(course)} href="#"><CourseCard {...course} /></a>
                </div>
              ))
            ) : (
              <p>No enrolled courses available.</p>
            )}
          </div>
        </div>

        <div id='bookmarks'>
          <h4 className="mt-5">Bookmarks</h4>
          <div className="row">
            {bookmarksCourses.length > 0 ? (
              bookmarksCourses.map((course, index) => (
                <div className="col-12 col-sm-6 col-md-3 mb-2" key={index}>
                  <a onClick={() => handleShow(course)} href="#"><CourseCard {...course} /></a>
                </div>
              ))
            ) : (
              <p>No bookmarked courses available.</p>
            )}
          </div>
        </div>

        <div className="mt-5" id='topPicks'>
          <h4 className="mt-2">Top Picks for You</h4>
          <div className="row">
            {recommendedCourses.length > 0 ? (
              recommendedCourses.map((course, index) => (
                <div className="col-12 col-sm-6 col-md-3 mb-2" key={index}>
                  <a onClick={() => handleShow(course)} href="#"><CourseCard {...course} /></a>
                </div>
              ))
            ) : (
              <p>No recommended courses available.</p>
            )}
          </div>
        </div>

        <div className="mt-5 mb-5" id='grades'>
          <h4 className="mt-2">Grades</h4>
          <div className="row">
            {assignments.length > 0 ? (
              assignments.map((assignment, index) => (
                <div className="col-12 col-sm-6 col-md-6 mb-2" key={index}>
                  <AssignementCard {...assignment} />
                </div>
              ))
            ) : (
              <p>No assignments available.</p>
            )}
          </div>
        </div>
      </div>
      {currentCourse && (
        <OffCanvasCourse show={showOffCanvas} onClose={handleClose} course={currentCourse} id={`offcanvasCourse${currentCourse.id}`} />
      )}
    </div>
  );
};

Dashboard.propTypes = {
  enrolledCourses: PropTypes.arrayOf(courseShape),
  bookmarksCourses: PropTypes.arrayOf(courseShape),
  recommendedCourses: PropTypes.arrayOf(courseShape),
  assignments: PropTypes.arrayOf(assignmentShape),
};

Dashboard.defaultProps = {
  enrolledCourses: [],
  bookmarksCourses: [],
  recommendedCourses: [],
  assignments: [],
};

export default Dashboard;
