
import { groupShape } from '../types/types.js';
import PropTypes from 'prop-types'
import defaultGroupProfile from '../assets/group-profiles/group.png'
import defaultUserProfile from '../assets/group-profiles/user.avif'



function GroupChat(props){
    return (
        <div className="group-chat mt-2 w-100">
                        <div className="group-chat-head rounded">
                            <div className="d-flex flex-row justify-content-between">
                                <div className="d-flex flex-row">
                                    <img className="group-profile me-2" src={defaultGroupProfile} alt="group profile" />
                                    <div className="d-flex flex-column ml-2">
                                        <div className="group-name">3IIR G3</div>
                                    </div>
                                </div>
                                <div className="group-last-msg-time mt-4">11:31 pm</div>
                            </div>
                        </div>
                        <div className="group-chat-msgs">
                            <div className="msgs-pack">
                                <img className="user-profile" src={defaultUserProfile} alt="user" />
                                <div className="msg-content">
                                    <div className="user-name">Ahmed Mensouri</div>
                                    <div className="user-msg shadow">
                                        Hello Guys <span className="msg-time">10:00 am</span>
                                    </div>
                                    <div className="user-msg shadow">
                                        Did you see the updates on the Django Documentation <span className="msg-time">10:05 am</span>
                                    </div>
                                </div>
                            </div>
                            <div className="msgs-pack">
                                <img className="user-profile" src={defaultUserProfile} alt="user" />
                                <div className="msg-content">
                                    <div className="user-name">Med Amine</div>
                                    <div className="user-msg shadow">
                                        yup, they changed lots of things when it comes to the methods used for saving Data! <span className="msg-time">10:10 am</span>
                                    </div>
                                </div>
                            </div>
                            <div className="msgs-pack current-user">
                                <div className="msg-content">
                                    <div className="user-name">You  <img className="user-profile" src={defaultUserProfile} alt="user" />                                    </div>
                                    <div className="current-user-msg user-msg shadow">
                                        Well , Actually ?<span className="msg-time">10:10 am</span>
                                    </div>
                                </div>
                            </div>
                            <div className="msgs-pack">
                                <img className="user-profile" src={defaultUserProfile} alt="user" />
                                <div className="msg-content">
                                    <div className="user-name">Amine Allawi</div>
                                    <div className="user-msg shadow">
                                        Crazy how they did <span className="msg-time">10:15 am</span>
                                    </div>
                                    <div className="user-msg shadow">
                                        Now we will have to learn all those new methods and how they work <span className="msg-time">10:20 am</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="group-chat-new-msg mx-5">
                            <input type="text" className="mt-1 form-control shadow new-msg-input" placeholder="Type your message here..." />
                            <button className="custom-button2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-send" viewBox="0 0 16 16">
                                    <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z"/>
                                </svg>
                            </button>
                        </div>
                    </div>
    );
}

GroupChat.propTypes = {
    groups : PropTypes.groupShape,
 }
 export default GroupChat;