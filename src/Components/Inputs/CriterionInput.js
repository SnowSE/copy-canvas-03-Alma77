import DescriptionInput from "./DescriptionInput";
import RatingsInput from "./RatingsInput";
import PointsInput from "./PointsInput";
import { useState, useEffect } from 'react'

const RowInput = (props) => {
    const [descriptions, setDescriptions] = useState([])
    const [ratings, setRatings] = useState([])
    const [points, setPoints] = useState([])
    
    const AddDescriptionsHandler = (description, row) => {
        const newDescriptions = [...descriptions]
        newDescriptions[row] = description
        setDescriptions(newDescriptions)
    }

    const AddRatingsHandler = (rating, row) => {
        const newRatings = [...ratings]
        newRatings[row] = rating
        setRatings(newRatings)
    }

    const AddPointsHandler = (point, row) => {
        const newPoints = [...points]
        newPoints[row] = point
        setPoints(newPoints)
    }

    useEffect(() =>{
        props.AddRubric(descriptions, ratings, points)
    },[descriptions, ratings, points])

    return (           
        <div>{console.log(...descriptions)}{console.log(...ratings)}{console.log(...points)}{
            props.rows.map(r => 
                <div className="row border-bottom">
                    <DescriptionInput row={r.id} key={"description" + r.id} AddDescriptionsHandler={AddDescriptionsHandler}/>
                    <RatingsInput row={r.id} key={"rating" + r.id} AddRatingsHandler={AddRatingsHandler}/>
                    <PointsInput ratings={ratings} row={r.id} key={"points" + r.id} AddPointsHandler={AddPointsHandler}/>
                </div>
            )}
        </div>
    )
    
}

export default RowInput;