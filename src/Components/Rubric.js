import { useEffect, useState } from 'react'
import CriterionInput from './Inputs/CriterionInput';
import Plus from './Icons/Plus';
import Delete from './Icons/Delete'
import axios from 'axios'


const Rubric = (props) => {

    const [rows, setRows] = useState([{id: 1}])
    const [totalPoints, setTotalPoints] = useState(0)
    const [rubric, setRubric] = useState({
        rubric_id: 0,
        rubric: {
            title: "",
            free_form_criterion_comments: true,
            points_possible: 0,
            criteria: []
        }
    })

    const baseURL = "api/v1";
    const Token = 'Bearer HhQcX7hWv3AZxMnB22tHXv0OuEUbEO4beEIf9W4apl8lqbIGIJLycbY8If1NCXer';
    const courseID = '27';
    const header = { 
        headers: {
            Authorization: Token,
            "Access-Control-Allow-Origin": "*",
        }
    }

    const AddRowHandler = () => {
        setRows(prevState => [...prevState, {id: prevState[prevState.length-1].id+1}])
    }
    const DeleteRowHandler = () => {
        if(rows.length != 1)
        {
           const newRows = [...rows]
           newRows.pop()
        
           setRows(newRows) 
        }        
    }

    const UpdatePoints = () => {
        if(rubric.rubric.criteria.length != 0)
        {
            var sum = 0;
            for(let i = 0; i < rows.length; i++)
            {
                sum = Number(sum) + Number(rubric.rubric.criteria[i].points)
            }

            setTotalPoints(sum);
        }        
    }

    useEffect(() => {
           UpdatePoints();
    },[rubric.rubric])

    const AddRubric = (descriptions, ratings, points) => {
        const Criteria = []
        const Ratings = []

        for(let i = 0; i < ratings.length; i++)
        {
            Ratings[i] = {
                criterion_use_range: false,
                description: "",
                points: ratings[i].points,
                id: "blank"
            }
        }

        for(let i = 0; i < rows.length; i++)
        {
            Criteria[i] = {
                description: descriptions[i],
                points: points[i],
                criterion_use_range: false,
                ratings: [...Ratings]
            }
        }
        const Criterion = {
            title: props.assignment.name,
            free_form_criterion_comments: true,
            points_possible: props.assignment.points_possible,
            criteria: [...Criteria]
        }

        const Rubric = {
            rubric_id: rubric.rubric_id+1,
            rubric: {...Criterion}
        }

        setRubric(Rubric)
    }

    const OnSubmitHandler = async (event) => {
        event.preventDefault()
        const rubric_association = {
            association_id: props.assignment.id,
            association_type: "Assignment",
            purpose: "grading"
        }
        await axios.post(baseURL + "/courses/" + courseID + "/rubrics", {rubric: {...rubric}, rubric_association: {...rubric_association}}, header)
        props.HideRubricFormHandler()
    }

    return(
        <form onSubmit={(e) => OnSubmitHandler(e)}>
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
                <CriterionInput rows={rows} AddRubric={AddRubric}/>
            </div>
            <div className="row border-top">
                <div className="col-4">
                    <button type="button" className="ml-1 btn btn-link" onClick={() => AddRowHandler()}><Plus /></button>
                    <button type="button" className="ml-1 btn btn-link" onClick={() => DeleteRowHandler()}><Delete /></button>
                </div>
                <span className="col-4"></span>
                <div className="col-4 text-center mt-2">
                    <p>Total Points: {totalPoints}</p>
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