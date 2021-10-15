import { useState } from 'react'
import CriterionInput from './Inputs/CriterionInput';
import Plus from './Icons/Plus';
import Delete from './Icons/Delete'


const Rubric = (props) => {

    const [rows, setRows] = useState([{id: 1}])
    const [criterion, setCriterion] = useState([{}])

    const AddRowHandler = () => {
        setRows(prevState => [...prevState, {id: prevState[prevState.length-1].id+1}])
    }
    const DeleteRowHandler = () => {
        const newRows = [...rows]
        newRows.pop()
        
        setRows(newRows)
    }

    const AddCriterion = (criterion) => {
        setCriterion(prevState => [...prevState, criterion])
    }

    return(
        <form>
            <div className="col-12 p-2 border-bottom">
                <label><strong>Title:</strong></label>
                <input value={props.assignment.name} type="text" className="m-1 w-33"/>
            </div>
            <div className="row">
                <div className="col-4 text-center p-3">
                    <strong>Criteria</strong>
                </div>
                <div className="col-4 text-center p-3 border-start">
                    <strong>Ratings</strong>
                </div>
                <div className="col-4 text-center p-3 border-start">
                    <strong>Pts</strong>
                </div>
            </div>
            <div className="row border-top">
                <CriterionInput rows={rows} AddCriterion={AddCriterion}/>
            </div>
            <div className="row border-top">
                <div className="col-4">
                    <button type="button" className="ml-1 btn btn-link" onClick={() => AddRowHandler()}><Plus /></button>
                    <button type="button" className="ml-1 btn btn-link" onClick={() => DeleteRowHandler()}><Delete /></button>
                </div>
                <span className="col-4"></span>
                <div className="col-4 text-center mt-2">
                    <p>Total Points:</p>
                </div>
            </div>
            <div className="row border-top">
                <button className="col-2 btn btn-light m-2" onClick={props.HideRubricFormHandler}>Cancel</button>
                <button className="col-3 btn btn-primary m-2">Create Rubric</button>
            </div>
        </form>
    )
}

export default Rubric;