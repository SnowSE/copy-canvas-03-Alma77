
const RatingInput = (props) => {

    return(
        <div className="col">
            <div className="row">
                <div className="col">
                    <input type="number" className="form-control" onChange={(e) => props.OnChangeHandler(e.target.value, props.column-1)}></input>
                </div>
                <div className="col">
                    pts
                </div>
            </div>
           
        </div>
    )
}

export default RatingInput;