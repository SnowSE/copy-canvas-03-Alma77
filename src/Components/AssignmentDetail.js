import { useState } from 'react'
import Rubric from './Rubric'

const AssignmentDetail = (props) => {
    const [showRubricForm, setShowRubricForm] = useState(false);
    
    const HideRubricFormHandler = () => {
        setShowRubricForm(false)
    }

    const RubricFormView = (
        <Rubric assignment={props.content} HideRubricFormHandler={HideRubricFormHandler}/>
    )

    return(
        <div className="border p-5 shadow">
            <div className="row">
                <div className="col-md-5 border">
                    <div className="row ">
                        <div className="col-5 border-end border-bottom">
                            <strong>Assignment Name:</strong> 
                        </div>
                        <div className="col-7 border-bottom">
                            {props.content.name}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-5 border-end border-bottom">
                            <strong>Assignment Description:</strong>
                        </div>
                        <div className="col-7 border-bottom">
                            {props.content.description}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-5 border-end border-bottom">
                            <strong>Due At:</strong>
                        </div>
                        <div className="col-7 border-bottom">
                            {props.content.due_at}
                        </div>
                    </div> 
                    <div className="row">
                        <div className="col-5 border-end border-bottom">
                            <strong>Unlock At:</strong>
                        </div>
                        <div className="col-7 border-bottom">
                            {props.content.unlock_at}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-5 border-end border-bottom">
                            <strong>Lock At:</strong>
                        </div>
                        <div className="col-7 border-bottom">
                            {props.content.lock_at}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-5 border-end border-bottom">
                            <strong>Possible Points:</strong>
                        </div>
                        <div className="col-7 border-bottom">
                            {props.content.possible_points}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-5 border-end border-bottom">
                            <strong>Published:</strong>
                        </div>
                        <div className="col-7 border-bottom">
                            {props.content.published}
                        </div>
                    </div>           
                </div>
                <div className="col-1"></div>
                <div className={showRubricForm ? "col-md-6 border" : "col-sm-6"}>
                    {showRubricForm ? RubricFormView : <span></span>}
                </div>
            </div>
            <div className="form-group">
                <button className="btn btn-light m-2" onClick={props.HideDetailViewHandler}>Hide</button>
                <button className="btn btn-primary" onClick={() => setShowRubricForm(true)}>Add Rubric</button>
            </div>
        </div>
    )
    
}

export default AssignmentDetail;