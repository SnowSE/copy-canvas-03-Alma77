import { useEffect, useState } from 'react'

const PointsInput = (props) =>  {

    const [points, setPoints] = useState({
        value: null,
        row: props.row
    })

    const OnChangeHandler = (points) => {
        const newPoints = {
            value: points,
            row: props.row
        }

        const timeOutId = setTimeout(() => setPoints(newPoints), 500)
        return () => clearTimeout(timeOutId) 
    };

    useEffect(() => {
        props.AddPointsHandler(points.value, points.row-1)
    },[points])

    return (
        <div className="col-4">
            <div className="row">
                <div className="col">
                    <input type="number" className="form-control" onChange={(e) => OnChangeHandler(e.target.value)}></input>
                </div>
                <div className="col">
                    pts
                </div>
            </div>
        </div>
    )
}

export default PointsInput;