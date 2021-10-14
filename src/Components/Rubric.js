import { mapToStyles } from '@popperjs/core/lib/modifiers/computeStyles';
import { useState } from 'react'
import { rubricViewActions } from '../Store/Index';
import CriterionInput from './Inputs/CriterionInput';

const Rubric = (props) => {

    const [criterion, setCriterion] = useState([{}])
    const [description, setDescription] = useState()
    const [ratings, setRatings] = useState([])
    const [points, setPoints] = useState()

    const AddCriterionHandler = () => {
        setCriterion(prevState => [...prevState, {}])
    }
    const DeleteCriterionHandler = () => {
        const newCriterion = [...criterion]
        newCriterion.pop()

        setCriterion(newCriterion)
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
                <CriterionInput criterion={criterion}/>
            </div>
            <div className="row border-top">
                <div className="col-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z" fill="#000"/>
                    </svg>
                    <button type="button" className="ml-1 btn btn-link" onClick={() => AddCriterionHandler()}>Add Criterion</button>
                </div>
                <div className="col-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                    <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                </svg>
                    <button type="button" className="ml-1 btn btn-link" onClick={() => DeleteCriterionHandler()}>Delete Criterion</button>
                </div>
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