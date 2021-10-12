import Course from "./Course";
import course from "../CSS Modules/Course.css";

const CourseList = (props) => {

    return (
        <div className="card-layout">
            {props.courseList.map(course => (
                <Course name={course.name} crn={course.course_code} key={course.id} ShowFormHandler={props.ShowFormHandler}/>
            ))}
        </div>
        
    )
}

export default CourseList;