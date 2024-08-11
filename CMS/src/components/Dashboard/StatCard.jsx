import React, { useState } from 'react';

const StatCard = ({ index, title, value, change, activities }) => {
  const [isOpen, setIsOpen] = useState(false);

  let color = "";
  let bg = "";

  if (index === 1) {
    color = "text-danger";
    bg = "bg-danger-subtle";
  } else if (index === 2) {
    color = "text-primary";
    bg = "bg-primary-subtle";
  } else if (index === 3) {
    color = "text-success";
    bg = "bg-success-subtle";
  } else if (index === 4) {
    color = "text-warning";
    bg = "bg-warning-subtle";
  }

  const handleDropdownToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`stat-card bg-light shadow `}>
      <h3 className={`stat-card-title d-flex justify-content-between ${color}`}>
        <div>{title}</div>
        <div>
          {(index === 1) ? (<i className="bi bi-people-fill"></i>) : ""}
          {(index === 2) ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-mortarboard" viewBox="0 0 16 16">
              <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917zM8 8.46 1.758 5.965 8 3.052l6.242 2.913z"/>
              <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466zm-.068 1.873.22-.748 3.496 1.311a.5.5 0 0 0 .352 0l3.496-1.311.22.748L8 12.46z"/>
            </svg>
          ) : ""}
          {(index === 3) ? (<i className="bi bi-person-lines-fill"></i>) : ""}
          {(index === 4) ? (<i className="bi bi-folder-fill"></i>) : ""}
        </div>
      </h3>
      <p className={`stat-card-value ${color}`}>{value}</p>
      <div className={`stat-card-change d-flex justify-content-between ${color} ${bg}`}>
        {change}
        <button className="btn btn-light" onClick={handleDropdownToggle}>
          <i className={`bi bi-chevron-${isOpen ? 'up' : 'down'}`}></i>
        </button>
      </div>
      <div className={`dropdown-menu  z-5  text-wrap ${isOpen ? 'show' : ''}`}>
        {activities && activities.length > 0  ? (
          activities.map((activity, index) => (
            <a key={index} className="dropdown-item" href="#">
              <strong>{activity.user}</strong> {activity.action} <span className="activity-time">{activity.time}</span>
            </a>
          ))
        ) : (
          <p className="dropdown-item">No activities</p>
        )}
      </div>
    </div>
  );
}

export default StatCard;







