import React , {useEffect} from 'react';
import PropTypes from 'prop-types';

function ViewCourse({ course }) {
    // removing search box in this page
    useEffect(() => {
        let searchBox = document.querySelector(".search-box");
        if (searchBox) {
            searchBox.style.display = "none";
        }
    }, []);

      
  // Calculate average rating
  const averageRating = (
    course.ratings.reduce((acc, curr) => acc + curr.rating, 0) / course.ratings.length
  ).toFixed(1);

  // Calculate the percentage of each star rating
  const starCounts = [5, 4, 3, 2, 1].map((star) =>
    course.ratings.filter((r) => r.rating === star).length
  );
  const totalRatings = course.ratings.length;
  const starPercentages = starCounts.map((count) =>
    ((count / totalRatings) * 100).toFixed(0)
  );

  return (
    <div className="view-course-container mt-5 mb-5 m-auto" style={{ maxWidth: '800px' }}>
      <div className="card shadow-sm">
        <div className="card-header">
          <h3 className="mb-0">{course.name}</h3>
          <p className="mb-0">Course ID: <strong className='text-blue'>#{course.id}</strong></p>
        </div>
        <div className="card-body">
          <div className="row mb-4">
            <div className="col-md-4 text-center">
              <img
                src={course.previewImg || 'https://via.placeholder.com/400'}
                alt={`${course.name} Preview`}
                style={{ maxWidth: '100%', maxHeight: '200px' }}
                className="img-thumbnail"
              />
            </div>
            <div className="col-md-8">
              <h5>Course Information</h5>
              <p><strong>Type:</strong> {course.type}</p>
              <p><strong>Category:</strong> {course.category}</p>
              <p><strong>Instructor:</strong> {course.teacher}</p>
              <p><strong>Description:</strong> {course.description}</p>
            </div>
          </div>
          <div className="row mb-4">
            <div className="col-12">
              <h5>Instructor Profile</h5>
              <div className="d-flex align-items-center">
                <img
                  src={course.teacherProfile || 'https://via.placeholder.com/100'}
                  alt={`${course.teacher} Profile`}
                  style={{ width: '50px', height: '50px', borderRadius: '50%' }}
                  className="me-3"
                />
                <p className="mb-0"><strong>{course.teacher}</strong></p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <h5>Rating Insights</h5>
              <div className="d-flex align-items-center mb-2">
                <div style={{ fontSize: '24px', fontWeight: 'bold' }}>{averageRating}</div>
                <div className="ms-2">
                  <span className="text-warning">&#9733;</span>
                  <span className="text-warning">&#9733;</span>
                  <span className="text-warning">&#9733;</span>
                  <span className="text-warning">&#9733;</span>
                  <span className="text-muted">&#9733;</span> {/* Adjust stars based on averageRating */}
                </div>
                <div className="ms-2">
                  <strong>{averageRating} out of 5</strong>
                  <p className="text-muted">{totalRatings} ratings</p>
                </div>
              </div>
              {starCounts.map((count, index) => (
                <div key={index} className="d-flex align-items-center mb-1">
                  <div className="me-2" style={{ width: '50px' }}>{5 - index} star</div>
                  <div className="progress" style={{ flexGrow: 1, height: '10px' }}>
                    <div
                      className="progress-bar bg-warning"
                      role="progressbar"
                      style={{ width: `${starPercentages[index]}%` }}
                      aria-valuenow={starPercentages[index]}
                      aria-valuemin="0"
                      aria-valuemax="100"
                    />
                  </div>
                  <div className="ms-2" style={{ width: '50px', textAlign: 'right' }}>
                    {starPercentages[index]}%
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

ViewCourse.propTypes = {
  course: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    previewImg: PropTypes.string,
    teacher: PropTypes.string.isRequired,
    teacherProfile: PropTypes.string,
    description: PropTypes.string.isRequired,
    ratings: PropTypes.arrayOf(
      PropTypes.shape({
        studentName: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired,
        date: PropTypes.string.isRequired,
        comment: PropTypes.string.isRequired,
      })
    ).isRequired
  }).isRequired,
};

export default ViewCourse;
