import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa'; // Import star and half-star icons

function CourseCard(props) {
    const bookmarkEmpty = `<i class="bi bi-bookmark" title="Save to bookmarks"></i>`;
    const bookmarkFilled = `<i class="bi bi-bookmark-fill" title="Unsave"></i>`;

    const [isBookmarked, setIsBookmarked] = useState(props.bookmark);

    useEffect(() => {
        setIsBookmarked(props.bookmark);
    }, [props.bookmark]);

    const handleSaveToBookmarks = (event) => {
        event.stopPropagation(); // Prevent parent click events from firing
        event.preventDefault(); // Prevent default button behavior

        setIsBookmarked(prevState => {
            const newState = !prevState;
            // Call any external function here to save the new state if needed
            return newState;
        });
    };

    const renderStars = (rating) => {
        const stars = [];
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;

        for (let i = 1; i <= 5; i++) {
            if (i <= fullStars) {
                stars.push(<FaStar key={i} size={16} color="#ffc107" />); // Use smaller size for stars
            } else if (i === fullStars + 1 && hasHalfStar) {
                stars.push(<FaStarHalfAlt key={i} size={16} color="#ffc107" />);
            } else {
                stars.push(<FaStar key={i} size={16} color="#e4e5e9" />);
            }
        }
        return stars;
    };

    return (
        <div className="course-card rounded shadow small-scale-on-hover">
            <img className="rounded" src={props.previewImg} alt="course preview" />
            <div className="d-flex align-items-start mt-2">
                <img src={props.teacherProfile} style={{ width: "25px", height: "25px" }} className='rounded-circle shadow-sm' alt="teacher profile" />
                <h5 className="teacher-name mt-1 ms-2">{props.teacher}</h5>
            </div>
            <h6 className="course-name">{props.type} Course: {props.name}</h6>
            <p>Course</p>
            <div className="d-flex justify-content-between">
                <div className="rating">
                    {renderStars(props.rating.percentage)} ({props.rating.number})
                </div>
                <button
                    style={{ border: "none", backgroundColor: "inherit", fontSize: "1.2em" }}
                    id='saveToBookmarksBtn'
                    onClick={handleSaveToBookmarks}
                    dangerouslySetInnerHTML={{ __html: isBookmarked ? bookmarkFilled : bookmarkEmpty }}
                />
            </div>
            
        </div>
    );
}

CourseCard.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    teacher: PropTypes.string,
    teacherProfile: PropTypes.string,
    type: PropTypes.string,
    previewImg: PropTypes.string,
    bookmark: PropTypes.bool,
    rating: PropTypes.shape({
        percentage: PropTypes.number.isRequired,
        number: PropTypes.number.isRequired
    }).isRequired // Updated rating to be an object with percentage and number
};

CourseCard.defaultProps = {
    id: 0,
    name: "Course Name",
    teacher: "Teacher Name",
    teacherProfile: "Profile Img",
    type: "Course Type",
    previewImg: "Course Preview Image Src",
    bookmark: false,
    rating: {
        percentage: 0,
        number: 0 
    }
};

export default CourseCard;
