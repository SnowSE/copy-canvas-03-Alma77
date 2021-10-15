import { useEffect, useState } from 'react'

const DescriptionInput = (props) => {

    const [description, setDescription] = useState({
        value: "",
        row: props.row
    });

    const OnChangeHandler = (description) => {
        const newDescription = {
            value: description,
            row: props.row
        }
        const timeOutId = setTimeout(() => setDescription(newDescription), 1000)
        return () => clearTimeout(timeOutId)
    };

    useEffect(() =>{
        props.AddDescriptionsHandler(description.value, description.row-1)
    },[description])

    return(
        <div className="col-4 border-end">
            <label className="form-label"><strong>Description:</strong></label>
            <textarea type="text" className="form-control" onChange={(e) => OnChangeHandler(e.target.value)}></textarea>
        </div>
    )
}

export default DescriptionInput;