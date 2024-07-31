import CourseCard from '../components/CourseCard.jsx'
import { courseShape } from '../types/types.js'
import PropTypes from 'prop-types'

function Courses({ courses }) {
    return (
        <div   className="course-list mt-4">
            <div   className="course-list-columns course-head" style={{height : "30px"}}>
                <div   className="row">
                    <div   className="col-12 col-md-2">Course of</div>
                    <div   className="col-12 col-md-2">Field</div>
                    <div   className="col-12 col-md-3">View</div>
                    <div   className="col-12 col-md-3">Edit</div>
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
                        <div   className="col-12 col-md-3"><a href={course.viewLink}>View</a></div>
                        <div   className="col-12 col-md-3"><a href={course.editLink}>Edit</a></div>
                    </div>
                </div>
                </a>
                
            ))}
        </div>
    );
}

Courses.propTypes = {
    courses: PropTypes.arrayOf(courseShape),
}

export default Courses;

