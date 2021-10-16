import { useEffect, useState } from 'react'

const PointsInput = (props) =>  {

    const [points, setPoints] = useState({
        value: null,
        row: props.row
    })

    const [isValid, setIsValid] = useState(false);
    const [hasBeenFocused, setHasBeenFocused] = useState(false)

    const OnChangeHandler = (points) => {
        const newPoints = {
            value: points,
            row: props.row
        }

        const timeOutId = setTimeout(() => setPoints(newPoints), 500)
        return () => clearTimeout(timeOutId) 
    };

    const OnBlurHandler = () => {
        if(points.value == props.ratings[props.row-1][0].points)
        {
            setIsValid(true)
        }
        else{
            setIsValid(false)
        }
        setHasBeenFocused(true)
    }

    useEffect(() => {
        props.AddPointsHandler(points.value, points.row-1)
    },[points])

    const Valid = (
        isValid ? "form-control is-valid" : "form-control is-invalid"
    )

    return (
        <div className="col-4">
            <div className="row">
                <div className="col">
                    <input type="number" className={hasBeenFocused ? Valid : "form-control"} onBlur={() => OnBlurHandler()} onChange={(e) => OnChangeHandler(e.target.value)}></input>
                    <div className="invalid-feedback">
                        <p>Can't be less than highest rating points.</p>
                    </div>
                </div>
                <div className="col">
                    pts
                </div>
            </div>
        </div>
    )
}

export default PointsInput;