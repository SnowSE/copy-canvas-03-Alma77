import './App.css';
import React, { useState, useEffect } from 'react'
import header from './CSS Modules/Header.css'
import logo from './Images/snow_logo.png'
import accountIcon from './Images/my_account.png'
import dashboardIcon from './Images/dashboard.png'
import coursesIcon from './Images/courses.png'
import groupsIcon from './Images/groups.png'
import calenderIcon from './Images/calender.png'
import inboxIcon from './Images/inbox.jfif'
import historyIcon from './Images/history.png'
import helpIcon from './Images/help.png'
import CourseList from './Components/CourseList';
import Content from './CSS Modules/Content.css';
import TodoList from './Components/TodoList.js';
import AssignmentForm from './Components/AssignmentForm';
import axios from 'axios'
import Rubric from './Components/Rubric'
import AssignmentDetail from './Components/AssignmentDetail';

function App() {

  const [showMore, setShowMore] = useState(false);
  const [showNewAssignmentForm, setShowNewAssignmentForm] = useState(false);
  const [showDetailView, setShowDetailView] = useState(false);
  const [currentAssignment, setCurrentAssignment] = useState({
    id: "",
    name: "",
    description: "",
    submission_type: ["none"],
    grading_type: "not_graded",
    due_at: "",
    unlock_at: "",
    lock_at: "",
    points_possible: 0,
    published: false
  });
  const [courseList, setCourseList] = useState([]);
  const [todoList, setTodoList] = useState([]);
  const [isUpdating, setIsUpdating] = useState(false);

  const ShowMoreHandler = (event) =>{
    setShowMore(true);
  }

  const ShowLessHandler = (event) =>{
    setShowMore(false);
  }

  const ShowFormHandler = (event) =>{
    setShowNewAssignmentForm(true);
  }

  const ShowDetailViewHandler = async (key) =>{
    const assignment = await axios.get(baseURL + '/courses/' + courseID + '/assignments/' + key, header)
    setCurrentAssignment(assignment.data)
    setShowDetailView(true)
  }

  const HideDetailViewHandler = () =>{
    setShowDetailView(false);
  }

  const UpdateFormHandler = async (key) => {
    const assignment = await axios.get(baseURL + '/courses/' + courseID + '/assignments/' + key, header)
    console.log(assignment.data)
    setShowNewAssignmentForm(true)
    setCurrentAssignment(assignment.data)
    setIsUpdating(true);
  }

  const HideFormHandler = (event) =>{
    setShowNewAssignmentForm(false);
  }

  const baseURL = "api/v1";
  const Token = 'Bearer khZRIwO6Ocq9qJkt4s3Os0xdmEjYYBlIp1jckndL99c0HhnzxFbqVWqJrZdtwnGS';
    const courseID = '27';
    const header = { 
        headers: {
            Authorization: Token,
            "Access-Control-Allow-Origin": "*",
        }
    }

    const GetAssignments = async () => {
      const response = await axios.get(baseURL + "/courses/" + courseID + "/assignments", header);
      console.log(response.data)
      setTodoList(response.data)
  }

    const GetCourses = async () =>{
      const response = await axios.get(baseURL + '/courses/' + courseID, header);

      const course = response.data

      setCourseList([course]);
    }

    const AddAssignment = async (assignment) => {
      await axios.post(baseURL + '/courses/' + courseID + '/assignments', {assignment: {...assignment}}, header)
      GetAssignments();
    }

    const DeleteAssignment = async (id) => {
      await axios.delete(baseURL + '/courses/' + courseID + '/assignments/' + id, header)
      GetAssignments();
    }

    const UpdateAssignment = async (assignment) => {
      await axios.put(baseURL + '/courses/' + courseID + '/assignments/' + currentAssignment.id, {assignment: {...assignment}}, header)
      setIsUpdating(false);
      GetAssignments();
    }

    useEffect(() =>{
        GetAssignments();
        GetCourses();
    },[])

  const newAssignmentFormView = (
    <AssignmentForm isUpdating={isUpdating} AddAssignment={AddAssignment} UpdateAssignment={UpdateAssignment} currentAssignment={currentAssignment} HideFormHandler={HideFormHandler}/>
  )

  const assignmentDetailView = (
    <AssignmentDetail content={currentAssignment} HideDetailViewHandler={HideDetailViewHandler}/>
  )

  return (
    
    <div>
      <header className="side-bar">
        <a href=""><img className="logo" src={logo} /></a>
        <span className="icon-wrapper">
          <img className="icon" src={accountIcon} /><span className="icon">Account</span>
        </span>
        <span className="icon-wrapper">
          <img className="icon" src={dashboardIcon} alt="" /><span className="icon">Dashboard</span>
        </span>        
        <span className="icon-wrapper">
          <img className="icon" src={coursesIcon} alt="" /><span className="icon">Courses</span>
        </span>        
        <span className="icon-wrapper">
          <img className="icon" src={groupsIcon} alt="" /><span className="icon">Groups</span>
        </span>
        <span className="icon-wrapper">
          <img className="icon" src={calenderIcon} alt="" /><span className="icon">Calender</span>
        </span>
        <span className="icon-wrapper">
          <img className="icon" src={inboxIcon} alt="" /><span className="icon">Inbox</span>
        </span>
        <span className="icon-wrapper">
          <img className="icon" src={historyIcon} alt="" /><span className="icon">History</span>
        </span>
        <span className="icon-wrapper">
          <img className="icon" src={helpIcon} alt="" /><span className="icon">Help</span>
        </span>
      </header>

      <div className="content-main">
        <div className="container">
          <div className="header-layout">
            <h1 className="title">Dashboard</h1>
          </div>
          <div className="content-layout">
            <CourseList courseList={courseList} ShowFormHandler={ShowFormHandler} DeleteAssignment={DeleteAssignment}/>
            <span></span>
          </div>  
            {showNewAssignmentForm ? newAssignmentFormView : <span></span>}
            {showDetailView ? assignmentDetailView : <span></span>} 
        </div>
        <div className="todoList">
          <div className="header-layout">
            <h6>To Do</h6>
          </div>
          <TodoList todoList={todoList} showMore={showMore} ShowFormHandler={ShowFormHandler} ShowMoreHandler={ShowMoreHandler} ShowLessHandler={ShowLessHandler} DeleteAssignment={DeleteAssignment} UpdateFormHandler={UpdateFormHandler} ShowDetailViewHandler={ShowDetailViewHandler}/>
        </div>
      </div>    
    </div>
    
  );
}

export default App;
