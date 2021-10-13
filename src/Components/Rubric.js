import { useState } from 'react'

const Rubric = (props) => {

    return(
        <form>
            <div className="col-12 p-2 border-bottom">
                <lablel><strong>Title:</strong></lablel>
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
            <div className="row">
                {/*
                    Dynamic Input goes here....
                */}
            </div>
            <div className="row border-top">
                <div className="col-2">
                    <i className="bi bi-plus-lg"></i><button className="ml-1 btn btn-link">Criterion</button>
                </div>
                <div className="col-4">
                    <i className="bi bi-search"></i><button className="ml-1 btn btn-link">Find Outcome</button>
                </div>
                <div className="col-6 text-end mt-2">
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