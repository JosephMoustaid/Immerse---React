import React from 'react';
import PropTypes from 'prop-types';

const OffCanvasCourse = ({ show, onClose, course, id }) => {
  if (!course) return null;

  return (
    <div
      className={`z-5 offcanvas course-offcanvas offcanvas-end ${show ? 'show' : ''}`}
      tabIndex="-1"
      id={id}
      aria-labelledby="offCanvasCourseLabel"
      style={{ visibility: show ? 'visible' : 'hidden' }}
    >
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offCanvasCourseLabel">Course Details</h5>
        <button type="button" className="btn-close" aria-label="Close" onClick={onClose}></button>
      </div>
      <div className="offcanvas-body">
        <img src={course.previewImg} alt={course.name} className="img-fluid mb-3 rounded shadow" />
        <h6 className="fw-bold fs-5 mb-3"><em>{course.name}</em></h6>
        <p><strong>Description:</strong> {course.description}</p>
        <p><strong>Privacy:</strong> {course.type}</p>
        <p><strong>Creator:</strong> <span className='underline'>{course.teacher}</span></p>
        <div className="text-warning underline">
          <strong><i><a href={`rate?c=${course.id}`}>Rate</a></i></strong>
        </div>


        <button type="button" className="custom-button2 d-flex justify-content-center mt-3 px-5">Launch Experience</button>
      </div>
    </div>
  );
};

OffCanvasCourse.propTypes = {
    show: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    course: PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        description: PropTypes.string.isRequired,
        teacher: PropTypes.string,
        previewImg: PropTypes.string,
        type: PropTypes.string // public or private
    }),
};

export default OffCanvasCourse;
