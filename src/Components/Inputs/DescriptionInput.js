import { useEffect, useState } from 'react'

const DescriptionInput = (props) => {

    const [description, setDescription] = useState({
        value: "",
        row: props.row
    });

    const [hasBeenFocused, setHasBeenFocused] = useState(false)
    const [isValid, setIsValid] = useState(false)

    const OnChangeHandler = (description) => {
        const newDescription = {
            value: description,
            row: props.row
        }
        const timeOutId = setTimeout(() => setDescription(newDescription), 1000)
        return () => clearTimeout(timeOutId)
    };

    const OnBlurHandler = () => {
        if(description.value.trim() != "")
        {
            setIsValid(true)
        }
        else{
            setIsValid(false)
        }
        setHasBeenFocused(true)
    }

    const Valid = (
        isValid ? "form-control is-valid" : "form-control is-invalid"
    )

    useEffect(() =>{
        props.AddDescriptionsHandler(description.value, description.row-1)
    },[description])

    return(
        <div className="col-4 border-end">
            <label className="form-label"><strong>Description:</strong></label>
            <textarea type="text" className={hasBeenFocused ? Valid : "form-control"} onBlur={() => OnBlurHandler()} onChange={(e) => OnChangeHandler(e.target.value)} required></textarea>
            <div className="invalid-feedback">
                <p>The Criteria should have a description</p>
            </div>
        </div>
    )
}

export default DescriptionInput;