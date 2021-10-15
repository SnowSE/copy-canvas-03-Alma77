
const RatingInput = (props) => {

    return(
        <div className="col">
            <div className="col">
                <input className="form-control" onChange={(e) => props.OnChangeHandler(e.target.value)}></input>
            </div>
            <div className="col">
                <strong>pts</strong>
            </div>
        </div>
    )
}

export default RatingInput;