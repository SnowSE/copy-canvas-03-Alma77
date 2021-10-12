import { useEffect, useState } from 'react'
import TodoList from './TodoList';

const [filterInput, setFilterInput] = useState('');

const FilterForm = (props) => {

    useEffect(() => {
        const newTodoList = props.todoList.filter(todoItem => todoItem.name.includes(filterInput))

        props.SetFilterList(newTodoList)
    },[filterInput])

    return(
        <form className="form-group">
            <label className="form-control">Filter TodoList</label>
            <input type="text" onChange={(e) => {setFilterInput(e.target.value)}} />
        </form>
    )
}

export default FilterForm;