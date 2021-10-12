import React from 'react';
import Todo from './Todo';
import { useEffect, useState } from 'react';

const TodoList = (props) =>{

    const [filteredList, setFilteredList] = useState([]);

    const deleteHandler = (id) =>{
        props.DeleteAssignment(id);
    }

    const updateHandler = (id) => {
        props.UpdateFormHandler(id);
    }

    useEffect(()=>{
        showLessFilter();
        console.log(props.todoList)
    },[props.todoList])

    let showMoreView = (
        <ul className="list-group">{props.todoList.map(todo =>
                <Todo key={todo.id} id={todo.id} name={todo.name} description={todo.description} due={todo.due_at} deleteHandler={deleteHandler} updateHandler={updateHandler}/>
            )            
        }</ul>
    )

    const showLessFilter = () =>{
        let filteredList = [];
        for(let i = 0; i < 5 && i < props.todoList.length; i++)
        {
            filteredList[i] = props.todoList[i];
        }

        setFilteredList([...filteredList])
    }

    let showLessView = (
        <ul className="list-group">{filteredList.map(todo =>
            <Todo key={todo.id} id={todo.id} name={todo.name} description={todo.description} due={todo.due_at} deleteHandler={deleteHandler} updateHandler={updateHandler}/>
        )            
    }</ul>
    )

    let showMoreButton = (
        <button className="btn btn-link" onClick={props.ShowMoreHandler}>Show More</button>
    )

    let showLessButton = (
        <button className="btn btn-link" onClick={props.ShowLessHandler}>Show Less</button>
    )

    return (
        <React.Fragment>
            {props.showMore ? showMoreView : showLessView}
            <div>
                {props.showMore ? showLessButton : showMoreButton}
            </div>
            <div className="mr-5">
            <button className="btn btn-primary btn-sm" onClick={props.ShowFormHandler}>Add Assignment</button>
          </div>
        </React.Fragment>
        
    )
}

export default TodoList;