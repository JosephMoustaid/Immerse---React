import React, { useEffect, useState } from 'react';
import CourseCard from '../components/CourseCard.jsx';
import AssignementCard from '../components/AssignementCard.jsx';
import OffCanvasCourse from '../components/OffCanvasCourse.jsx';
import PropTypes from 'prop-types';
import { courseShape, assignmentShape } from '../types/types.js';

const Dashboard = ({ enrolledCourses = [], bookmarksCourses = [], recommendedCourses = [], assignments = [] }) => {
  const [showOffCanvas, setShowOffCanvas] = useState(false);
  const [currentCourse, setCurrentCourse] = useState(null);
  const [visibleEnrolledCourses, setVisibleEnrolledCourses] = useState(4);
  const [visibleBookmarksCourses, setVisibleBookmarksCourses] = useState(4);
  const [visibleRecommendedCourses, setVisibleRecommendedCourses] = useState(4);
  const [showMoreEnrolled, setShowMoreEnrolled] = useState(true);
  const [showMoreBookmarks, setShowMoreBookmarks] = useState(true);
  const [showMoreRecommended, setShowMoreRecommended] = useState(true);

  const handleShow = (course) => {
    setCurrentCourse(course);
    setShowOffCanvas(true);
  };

  const handleClose = () => {
    setShowOffCanvas(false);
    setCurrentCourse(null);
  };

  const handleLoadMore = (category) => {
    if (category === "enrolled") {
      if (showMoreEnrolled) {
        setVisibleEnrolledCourses(prev => prev + 4);
        if (visibleEnrolledCourses >= enrolledCourses.length) {
          setShowMoreEnrolled(false);
        }
      } else {
        setVisibleEnrolledCourses(4);
        setShowMoreEnrolled(true);
      }
    } else if (category === "bookmarks") {
      if (showMoreBookmarks) {
        setVisibleBookmarksCourses(prev => prev + 4);
        if (visibleBookmarksCourses >= bookmarksCourses.length) {
          setShowMoreBookmarks(false);
        }
      } else {
        setVisibleBookmarksCourses(4);
        setShowMoreBookmarks(true);
      }
    } else if (category === "recommended") {
      if (showMoreRecommended) {
        setVisibleRecommendedCourses(prev => prev + 4);
        if (visibleRecommendedCourses >= recommendedCourses.length) {
          setShowMoreRecommended(false);
        }
      } else {
        setVisibleRecommendedCourses(4);
        setShowMoreRecommended(true);
      }
    }
  };

  useEffect(() => {
    let exploreBtn = document.querySelector(".explore-button");
    if (exploreBtn) {
      exploreBtn.style.display = "none";
    }
  }, []);

  return (
    <div className="dashboard px-md-5">
      <div>
        <div id='enrolled'>
          <h4 className="mt-2" >Enrolled Courses</h4>
          <div className="row">
            {enrolledCourses.slice(0, visibleEnrolledCourses).map((course, index) => (
              <div className="col-12 col-sm-6 col-md-3 mb-2" key={index}>
                <a onClick={() => handleShow(course)} href="#"><CourseCard {...course} /></a>
              </div>
            ))}
            {enrolledCourses.length > visibleEnrolledCourses && (
              <div className="col-12 mt-2">
                <a onClick={() => handleLoadMore("enrolled")} className="loadMoreButton loadMoreButton2" href='#enrolled'> 
                  {showMoreEnrolled ? 'Load More' : 'Show Less'}
                </a>
              </div>
            )}
          </div>
        </div>

        <div id='bookmarks'>
          <h4 className="mt-5" >Bookmarks</h4>
          <div className="row">
            {bookmarksCourses.slice(0, visibleBookmarksCourses).map((course, index) => (
              <div className="col-12 col-sm-6 col-md-3 mb-2" key={index}>
                <a onClick={() => handleShow(course)} href="#"><CourseCard {...course} /></a>
              </div>
            ))}
            {bookmarksCourses.length > visibleBookmarksCourses && (
              <div className="col-12 mt-2">
                <a onClick={() => handleLoadMore("bookmarks")} className="loadMoreButton loadMoreButton2" href='#bookmarks'>
                  {showMoreBookmarks ? 'Load More' : 'Show Less'}
                </a>
              </div>
            )}
          </div>
        </div>

        <div className="mt-5" id='topPicks'>
          <h4 className="mt-2">Top Picks for You</h4>
          <div className="row">
            {recommendedCourses.slice(0, visibleRecommendedCourses).map((course, index) => (
              <div className="col-12 col-sm-6 col-md-3 mb-2" key={index}>
                <a onClick={() => handleShow(course)} href="#"><CourseCard {...course} /></a>
              </div>
            ))}
            {recommendedCourses.length > visibleRecommendedCourses && (
              <div className="col-12 mt-2">
                <a onClick={() => handleLoadMore("recommended")} className="loadMoreButton loadMoreButton2" href='#topPicks'>
                  {showMoreRecommended ? 'Load More' : 'Show Less'}
                </a>
              </div>
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
