import CourseCard from '../components/CourseCard.jsx'
import arduino from '../assets/course-preview/arduino.png'
import motor from '../assets/course-preview/motor.png'
import { courseShape } from '../types/types.js';
import PropTypes from 'prop-types'

function Courses(props){
    return (
        <div className="course-list mt-4">
                        <div className="course-list-columns couse-head">
                            <div className="row">
                                <div className="col-2">Course of</div>
                                <div className="col-2">Field</div>
                                <div className="col-4">Total lessons</div>
                            </div>
                        </div>
                        <div className="course rounded ">
                            <div className="row">
                                <div className="col-2"><img className="rounded" src={arduino} alt="course preview" /></div>
                                <div className="col-2">Arduino Uno</div>
                                <div className="col-2">Robotics</div>
                                <div className="col-2">1</div>
                                <div className="col-2"><a href="">view</a></div>
                                <div className="col-2"><a href="">edit</a></div>
                            </div>
                        </div>
                        <div className="course rounded ">
                            <div className="row">
                                <div className="col-2"><img className="rounded" src={motor} alt="course preview" /></div>
                                <div className="col-2">Electric motor</div>
                                <div className="col-2">Mecanic</div>
                                <div className="col-2">1</div>
                                <div className="col-2"><a href="">view</a></div>
                                <div className="col-2"><a href="">edit</a></div>
                            </div>
                        </div>
                    </div>
    );
 }
 Courses.propTypes = {
    courses : PropTypes.arrayOf(courseShape),
 }
 export default Courses;