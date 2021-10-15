import DescriptionInput from "./DescriptionInput";
import RatingsInput from "./RatingsInput";
import PointsInput from "./PointsInput";
import { useState } from 'react'
import { right } from "@popperjs/core";

const RowInput = (props) => {
    const [descriptions, setDescriptions] = useState([])
    const [ratings, setRatings] = useState([])
    const [points, setPoints] = useState([])
    
    const AddDescriptionsHandler = (description, row) => {
        const newDescriptions = [...descriptions]
        setDescriptions([newDescriptions[row], description])
    }

    const AddRatingsHandler = (rating, row) => {
        const newRatings = [...ratings]
        setRatings([newRatings[row], ...rating])
    }

    const AddPointsHandler = (point, row) => {
        const newPoints = [...points]
        setPoints([newPoints[row], point])
    }

    return (           
        <div className="row border-bottom">{console.log(...descriptions)}{console.log(...ratings)}{console.log(...points)}{
            props.rows.map(r => 
                <>
                    <DescriptionInput row={r.id} key={"description" + r.id} AddDescriptionsHandler={AddDescriptionsHandler}/>
                    <RatingsInput row={r.id} key={"rating" + r.id} AddRatingsHandler={AddRatingsHandler}/>
                    <PointsInput row={r.id} key={"points" + r.id} AddPointsHandler={AddPointsHandler}/>
                </>
            )}
        </div>
    )
    
}

export default RowInput;