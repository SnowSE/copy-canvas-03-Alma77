import { useState } from "react";

const RatingInput = (props) => {

    const [hasBeenFocused, setHasBeenFocused] = useState(false)
    const [isValid, setIsValid] = useState(false)

    const OnBlurHandler = () => {
        if(props.ratings.length != 0)
        {
            if(props.ratings[props.column-1].points > 0)
            {
                setIsValid(true)
            }
            else{
                setIsValid(false)
            }
        }
        setHasBeenFocused(true)
    }

    const Valid = (
        isValid ? "form-control is-valid" : "form-control is-invalid"
    )

    return(
        <div className="col">
            <div className="row">
                <div className="col-auto">
                    <input type="number" className={hasBeenFocused ? Valid : "form-control"} onBlur={() => OnBlurHandler()} onChange={(e) => props.OnChangeHandler(e.target.value, props.column-1)} required></input> pts
                </div>
            </div>
           
        </div>
    )
}

export default RatingInput;