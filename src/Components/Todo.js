
const Todo = (todo) => {
    return (
        <li>
            <div><button className="btn btn-link" onClick={() => todo.ShowDetailViewHandler(todo.id)}>{todo.name}</button></div>
            <div><bold>{todo.description}</bold></div>
            <div><sub>{(todo.due)}</sub></div>
            <div>
                <button className="btn btn-danger btn-sm" onClick={() => todo.deleteHandler(todo.id)} >Delete</button>
                <button className="btn btn-primary btn-sm" onClick={() => todo.updateHandler(todo.id)} >Update</button>
            </div>
        </li>
    )
}

export default Todo;