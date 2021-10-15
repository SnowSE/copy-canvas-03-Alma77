import { useEffect, useState } from 'react'
import RatingInput from './RatingInput';
import NodePlus from '../Icons/NodePlus';
import NodeMinus from '../Icons/NodeMinus';

const RatingsInput = (props) => {

    const [numColumns, setNumColumns] = useState([{id: 1}]);
    const [ratings, setRatings] = useState([]);
    const [rating, setRating] = useState({
        criterion_use_range: false,
        description: "",
        points: null,
        id: "blank"
    });

    const ExpandRatingHandler = () => {
        setNumColumns(prevState => [...prevState, {id: prevState[prevState.length-1].id + 1}])
    }

    const CollapseRatingHandler = () => {
        const currentNumColumns = [...numColumns]
        currentNumColumns.pop()

        setNumColumns(currentNumColumns);
    }

    const OnChangeHandler = (points) => {
        const newRating = {
            criterion_use_range: false,
            description: "",
            points: points,
            id: "blank",
        }
        const timeOutId = setTimeout(() => setRating(newRating), 1000)
        return () => clearTimeout(timeOutId)
    };

    useEffect(() => {
        if(rating.points != null){
            setRatings(prevState => [...prevState, rating])
        }
    },[rating])

    useEffect(() => {
        props.AddRatingsHandler(ratings, props.row-1)
    },[ratings])

    return (
        <div className="col-4 border-end">
            <div className="row">{
                numColumns.map(c =>
                    <RatingInput key={c.id} OnChangeHandler={OnChangeHandler}/>
                )}
                <div className="col-1">
                    <div className="row">
                        <button type="button" className="btn btn-link" onClick={() => ExpandRatingHandler()}><NodePlus /></button>   
                    </div>
                    <div className="row">
                        <button type="button" className="btn btn-link" onClick={() => CollapseRatingHandler()}><NodeMinus /></button>   
                    </div>
                </div>
            </div>             
        </div>
    )
    
}

export default RatingsInput;