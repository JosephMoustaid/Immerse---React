import PropTypes from 'prop-types'
function CourseCard(props){
    return(
            <div   className="course-card rounded shadow scale-on-hover">
                <img   className="rounded" src={props.previewImg} alt="course preview" />
                <h5   className="teacher-name mt-2">{props.teacher}</h5>
                <h6   className="course-name" >{props.type} Course : {props.name}</h6>
                <p>Course</p>
            </div>
    );
}
CourseCard.propTypes = {
    id : PropTypes.number , 
    name : PropTypes.string , 
    teacher : PropTypes.string , 
    type : PropTypes.string , 
    previewImg : PropTypes.string
}

CourseCard.defaultProps = {
    id : 0 , 
    name : "course name" , 
    teacher : "teacher name" , 
    type : "course type" , 
    previewImg : "course preview image src"
}

export default CourseCard;

