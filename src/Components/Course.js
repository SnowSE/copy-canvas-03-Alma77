import React from "react";
import green from '../Images/green.png'
import course from '../CSS Modules/Course.css'

const Course = (course) => {
    return (
        <div class="card card2 shadow-sm mb-5 bg-white rounded" >
            <img class="card-img-top card-top" src={green}/>
            <div class="card-body">
                <h5 class="card-title">{course.name}</h5>
                <p class="card-text">{course.crn}</p>              
            </div>
        </div>
    )
}

export default Course;