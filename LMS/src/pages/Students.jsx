import PropTypes from 'prop-types'
import { studentShape } from '../types/types.js';
import defaultUserProfile from '../assets/group-profiles/user.avif'

function Students(props){
    return (
        <div className="students mt-5">
                        <table className="table shadow ">
                            <thead>
                                <tr>
                                <th scope="col">#</th>
                                <th scope="col">Id</th>
                                <th scope="col">Email</th>
                                <th scope="col">Courses Attended</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr scope="row" className="small-scale-on-hover">
                                    <td>
                                        <img className="profile-img" src={defaultUserProfile} alt="profile"/>  <span className="ms-2">  Youssef Moustaid / <span className="gender"> He</span> </span>
                                    </td>
                                    <td>21056</td>
                                    <td>youssefmoustaid@gmail.com</td>
                                    <td>10</td>
                                </tr>

                                <tr scope="row" className="small-scale-on-hover">
                                    <td>
                                        <img className="profile-img" src={defaultUserProfile} alt="profile"/>  <span className="ms-2"> Youssef Moustaid  / <span className="gender"> He</span> </span>
                                    </td>
                                    <td>3004</td>
                                    <td>youssefmoustaid@gmail.com</td>
                                    <td>10</td>
                                </tr>
                                <tr scope="row" className="small-scale-on-hover">
                                    <td>
                                        <img className="profile-img" src={defaultUserProfile} alt="profile"/> <span className="ms-2"> Youssef Moustaid / <span className="gender"> He</span> </span>
                                    </td>
                                    <td>21056</td>
                                    <td>youssefmoustaid@gmail.com</td>
                                    <td>10</td>
                                </tr>
                                <tr scope="row" className="small-scale-on-hover">
                                    <td>
                                        <img className="profile-img" src={defaultUserProfile} alt="profile" /> <span className="ms-2"> Youssef Moustaid <span className="gender"> He</span> </span>
                                    </td>
                                    <td>21056</td>
                                    <td>youssefmoustaid@gmail.com</td>
                                    <td>10</td>
                                </tr>
                                <tr scope="row0" className="small-scale-on-hover">
                                    <td> 
                                        <img className="profile-img" src={defaultUserProfile} alt="profile" /><span className="ms-2">  Youssef Moustaid <span className="gender"> He</span> </span>
                                    </td>
                                    <td>21056</td>
                                    <td>youssefmoustaid@gmail.com</td>
                                    <td>10</td>
                                </tr>
                            </tbody>
                        </table>
                        

                    </div>
    );
 }

 Students.propTypes = {
    students : PropTypes.studentShape,
 }
 
 export default Students;