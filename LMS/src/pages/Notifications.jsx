import PropTypes from 'prop-types';
import { notificationShape } from '../types/types';
import { useEffect } from 'react';

function Notifications(props) {

    const removeExploreButton = () => {
        let exploreBtn = document.querySelector(".explore-button");
        if (exploreBtn) {
            exploreBtn.style.display = "none";
        }
    };

    useEffect(() => {
        removeExploreButton();
    }, []);

    return (
        <div   className="notifications w-100 mt-3 w-75 m-auto">
            <div   className='col-12'>
                {props.notifications.map((notification, index) => (
                    <div 
                        className={`alert alert-${notification.type.toLowerCase()} bg-success m-auto mb-2  fade show small-scale-on-hover border`} 
                        role="alert" 
                        style={{maxWidth:"90%"}}
                        key={index}
                    >
                        <div   className="d-flex justify-content-between " role='button'>
                            <span><strong>{notification.type.charAt(0).toUpperCase() + notification.type.slice(1)}:</strong> {notification.message} </span> 
                            <small>{notification.time} ago</small>
                        </div>
                        <button 
                            type="button" 
                              className="btn-close" 
                            data-bs-dismiss="alert" 
                            aria-label="Close"
                        ></button>
                    </div>
                ))}
            </div>
        </div>
    );
}

Notifications.propTypes = {
    notifications: PropTypes.arrayOf(notificationShape).isRequired,
};
export default Notifications;
