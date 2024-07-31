import React from 'react';
import CourseCard from '../components/CourseCard.jsx';
import AssignementCard from '../components/AssignementCard.jsx';
import PropTypes from 'prop-types';
import { courseShape, assignmentShape } from '../types/types.js';

const Dashboard = ({ enrolledCourses = [], recommendedCourses = [], assignments = [] }) => {
  return (
    <div   className="dashboard">
      <div>
        <div>
          <h4   className="mt-2">Enrolled Courses</h4>
          <div   className="row">
            {enrolledCourses.length > 0 ? (
              enrolledCourses.map((course, index) => (
                <div   className="col-3" key={index}>
                  <a href={`./course/${course.id}`}><CourseCard {...course} /></a>
                </div>
              ))
            ) : (
              <p>No enrolled courses available.</p>
            )}
          </div>
        </div>

        <div   className="mt-5">
          <h4   className="mt-2">Top Picks for You</h4>
          <div   className="row">
            {recommendedCourses.length > 0 ? (
              recommendedCourses.map((course, index) => (
                <div   className="col-3" key={index}>
                  <a href=""><CourseCard {...course} /></a>
                </div>
              ))
            ) : (
              <p>No recommended courses available.</p>
            )}
          </div>
        </div>

        <div   className="mt-5 mb-4">
          <h4   className="mt-2">Grades</h4>
          <div   className="row">
            {assignments.length > 0 ? (
              assignments.map((assignment, index) => (
                <div   className="col-6" key={index}>
                  <AssignementCard {...assignment} />
                </div>
              ))
            ) : (
              <p>No assignments available.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

Dashboard.propTypes = {
  enrolledCourses: PropTypes.arrayOf(courseShape),
  recommendedCourses: PropTypes.arrayOf(courseShape),
  assignments: PropTypes.arrayOf(assignmentShape),
};

Dashboard.defaultProps = {
  enrolledCourses: [],
  recommendedCourses: [],
  assignments: [],
};

export default Dashboard;
