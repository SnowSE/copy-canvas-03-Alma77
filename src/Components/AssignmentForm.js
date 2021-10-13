import React, { useState, useEffect } from 'react'
import Rubric from './Rubric'

const AssignmentForm = (props) =>{

    const [newAssignmentName, setNewAssignmentName] = useState("");
    const [newAssignmentDate, setNewAssignmentDate] = useState(new Date().toISOString());
    const [newAssignmentDescription, setNewAssignmentDescription] = useState("");
    const [newAssignmentSubmissionType, setNewAssignmentSubmissionType] = useState(["none"]);
    const [newAssignmentGradingType, setNewAssignmentGradingType] = useState("points");
    const [newAssignmentUnlockAt, setNewAssignmentUnlockAt] = useState(new Date().toISOString());
    const [newAssignmentLockAt, setNewAssignmentLockAt] = useState(new Date().toISOString());
    const [newAssignmentPoints, setNewAssignmentPoints] = useState(0);
    const [newAssignmentPublished, setNewAssignmentPublished] = useState(false);
    const [hasBeenFocused, setHasBeenFocused] = useState(false);

    const OnSubmitHandler = async (event) =>{
        event.preventDefault();
        const assignment = {
            name: newAssignmentName,
            description: newAssignmentDescription,
            submission_types: newAssignmentSubmissionType,
            grading_type: newAssignmentGradingType,
            due_at: new Date(newAssignmentDate).toISOString(),
            unlock_at: new Date(newAssignmentUnlockAt).toISOString(),
            lock_at: new Date(newAssignmentLockAt).toISOString(),
            points_possible: newAssignmentPoints,
            published: newAssignmentPublished
        }
        console.log(props.currentAssignment)

        if(props.isUpdating == true)
        {
            props.UpdateAssignment(assignment)
        }
        else{
            props.AddAssignment(assignment);
        }        
    }

    return(
        <div className="row border shadow p-5">
            <div className="col-lg-6">
                <form className="was-validated my-2" onSubmit={(e) => OnSubmitHandler(e)}>
                    <div className="form-group">
                        <label for="validationTextarea" className="form-label">New Assignment Name</label>
                        <input type="text" className="form-control is-invalid" id="validationTextarea" placeholder="ex: New Assignment" onBlur={() => setHasBeenFocused(true)} onChange={(e) => setNewAssignmentName(e.target.value)} required/>
                    </div>
                    <div className="invalid-feedback">
                        Assignment Name can't be Blank
                    </div>
                    <div className="form-group">
                        <label for="validationTextarea" className="form-label">Assignment Description</label>
                        <input type="text" className="form-control" placeholder="ex: Advanced Algorithms" onChange={(e) => setNewAssignmentDescription(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Due at</label>
                        <input type="datetime-local" className="form-control" onChange={(e) => setNewAssignmentDate(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label className="form-label">Unlock at</label>
                        <input type="datetime-local" className="form-control" onChange={(e) => setNewAssignmentUnlockAt(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label className="form-label">Lock at</label>
                        <input type="datetime-local" className="form-control" onChange={(e) => setNewAssignmentLockAt(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label className="form-label">Possible Points</label>
                        <input type="numbers" className="form-control" onChange={(e) => setNewAssignmentPoints(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Published</label>
                        <div className="form-control">
                            <input type="radio"  onClick={() => setNewAssignmentPublished(true)} />
                            <label >True</label>
                            <input type="radio" onClick={() => setNewAssignmentPublished(false)}/>
                            <label >False</label>
                        </div>
                        
                    </div>
                    <div className="form-group mr-1">
                        <button type="submit" className="btn btn-primary my-2">Save Assignment</button>
                        <burron className="btn btn-secondary" onClick={props.HideFormHandler}>Cancel</burron>
                    </div>
                </form>
            </div>
            <div className="col-lg-6">
                <form>
                    <Rubric />
                </form>
            </div>
        </div>                   
    )
}

export default AssignmentForm;