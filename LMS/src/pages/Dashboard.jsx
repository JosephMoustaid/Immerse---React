import CourseCard from '../components/CourseCard.jsx'
import AssingnementCard from '../components/AssignementCard.jsx'
import arduino from '../assets/course-preview/arduino.png'
import motor from '../assets/course-preview/motor.png'
import PropTypes from 'prop-types'
import { courseShape, assignmentShape } from '../types/types.js';
function Dashboard(props){
    return (
        <div className="dashboard">
                        <div >
                            <div>
                                <h4 className="mt-2">Enrolled courses</h4>
                                <div className="row">
                                   <div className="col-3" > 
                                        <CourseCard id={1} name="Combustion Motor" type="Mecanics" teacher="Pr. Ahmed El Mensouri" previewImg={motor} />
                                    </div>
                                    <div className="col-3" > 
                                        <CourseCard id={1} name="Arduino Card Components" type="Arduino Card" teacher="Pr. Boutaleb Amine" previewImg={arduino} />
                                    </div>
                                    <div className="col-3" > 
                                        <CourseCard id={1} name="Combustion Motor" type="Mecanics" teacher="Pr. Ahmed El Mensouri" previewImg={motor} />
                                    </div>
                                    <div className="col-3" > 
                                        <CourseCard id={1} name="Arduino Card Components" type="Arduino Card" teacher="Pr. Boutaleb Amine" previewImg={arduino} />
                                    </div>
                                    <div className="col-3" > 
                                        <CourseCard id={1} name="Combustion Motor" type="Mecanics" teacher="Pr. Ahmed El Mensouri" previewImg={motor} />
                                    </div>
                                    <div className="col-3" > 
                                        <CourseCard id={1} name="Arduino Card Components" type="Arduino Card" teacher="Pr. Boutaleb Amine" previewImg={arduino} />
                                    </div>
                                </div>
                            </div>

                            <div className="mt-5">
                                <h4 className="mt-2">Top picks for you</h4>
                                <div className="row">
                                    <div className="col-3" > 
                                        <CourseCard id={1} name="Combustion Motor" type="Mecanics" teacher="Pr. Ahmed El Mensouri" previewImg={motor} />
                                    </div>
                                    <div className="col-3" > 
                                        <CourseCard id={1} name="Arduino Card Components" type="Arduino Card" teacher="Pr. Boutaleb Amine" previewImg={arduino} />
                                    </div>
                                    <div className="col-3" > 
                                        <CourseCard id={1} name="Combustion Motor" type="Mecanics" teacher="Pr. Ahmed El Mensouri" previewImg={motor} />
                                    </div>
                                    <div className="col-3" > 
                                        <CourseCard id={1} name="Arduino Card Components" type="Arduino Card" teacher="Pr. Boutaleb Amine" previewImg={arduino} />
                                    </div>
                                    <div className="col-3" > 
                                        <CourseCard id={1} name="Combustion Motor" type="Mecanics" teacher="Pr. Ahmed El Mensouri" previewImg={motor} />
                                    </div>
                                    <div className="col-3" > 
                                        <CourseCard id={1} name="Arduino Card Components" type="Arduino Card" teacher="Pr. Boutaleb Amine" previewImg={arduino} />
                                    </div>
                                </div>
                            </div>

                            <div className="mt-5 mb-4">
                                <h4 className="mt-2">Grades</h4>
                                <div className="row">
                                    <div className="col-6" > 
                                        <AssingnementCard id={2} name="Combustion Motor" type ="Mecanics" precentage={88} passed={true} />
                                    </div>                        
                                </div>
                            </div>
                        </div>
                    </div>

        
    );
 }

Dashboard.propTypes = {
    enrolledCourses: PropTypes.arrayOf(courseShape),
    recommendedCourses: PropTypes.arrayOf(courseShape),
    assignments: PropTypes.arrayOf(assignmentShape)
};

 export default Dashboard;















                    