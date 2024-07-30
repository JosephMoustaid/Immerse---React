
import PropTypes from 'prop-types'
import {groupShape} from '../types/types.js'
import defaultGroupProfile from '../assets/group-profiles/group.png'
function Groups(props){
    return (
        <div className="groups">
                        <div >
                            <div>
                                <h4 className="mt-2">Groups</h4>
                                <div className="group rounded shadow small-scale-on-hover">
                                    <a href="./group-chat">
                                        <div className="d-flex flex-row justify-content-between">
                                            <div className="d-flex flex-row">
                                                <img className="group-profile me-2" src={defaultGroupProfile} alt="group profile" />
                                                <div className="d-flex flex-column ml-2">
                                                    <div className="group-name">3IIR G1</div>
                                                    <div className="group-last-msg">Guys, When will the exam take place?</div>
                                                </div>
                                            </div>
                                            <div className="group-last-msg-time mt-4">11:31 pm</div>
                                        </div>
                                    </a>   
                                </div>
                                <div className="group rounded shadow mt-2 small-scale-on-hover">
                                    <a href="./group-chat">
                                        <div className="d-flex flex-row justify-content-between">
                                            <div className="d-flex flex-row">
                                                <img className="group-profile me-2" src={defaultGroupProfile} alt="group profile" />
                                                <div className="d-flex flex-column ml-2">
                                                    <div className="group-name">3IIR G2</div>
                                                    <div className="group-last-msg">Guys, When will the exam take place?</div>
                                                </div>
                                            </div>
                                            <div className="group-last-msg-time mt-4">11:31 pm</div>
                                        </div>
                                    </a>   
                                </div>
                                <div className="group rounded shadow mt-2 small-scale-on-hover">
                                    <a href="./group-chat">
                                        <div className="d-flex flex-row justify-content-between">
                                            <div className="d-flex flex-row">
                                                <img className="group-profile me-2" src={defaultGroupProfile} alt="group profile" />
                                                <div className="d-flex flex-column ml-2">
                                                    <div className="group-name">3IIR G3</div>
                                                    <div className="group-last-msg">Guys, When will the exam take place?</div>
                                                </div>
                                            </div>
                                            <div className="group-last-msg-time mt-4">11:31 pm</div>
                                        </div>
                                    </a>   
                                </div>
                            </div>

                        </div>
                    </div>
    );
 }
 Groups.propTypes = {
    groups : PropTypes.arrayOf(groupShape),
 }
 export default Groups;