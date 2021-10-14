import CriteriaInput from "./CriteriaInput";
import RatingInput from "./RatingInput";
import PointsInput from "./PointsInput";

const RowInput = ({criterion}) => {

    return (
           
        <div className="row border-bottom">{
            criterion.map(c => 
                <>
                    <CriteriaInput />
                    <RatingInput />
                    <PointsInput />
                </>
                
            )}
        </div>
    )
    
}

export default RowInput;