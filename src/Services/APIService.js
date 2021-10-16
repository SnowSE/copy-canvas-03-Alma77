import axios from 'axios'

const APIService = () => {
    const baseURL = "api/v1";
    const Token = 'Bearer dKYeNzbO2P6fuTnvcnyPepeNKEGV1kDWJwkr2PlXEG3lE1tscgEyC9xbnQSnvgbU';
    const courseID = '27';
    const header = { 
        headers: {
            Authorization: Token,
            "Access-Control-Allow-Origin": "*",
        }
    }

    const GetAssignments = async () => {
        const response = await axios.get(baseURL + "/courses/" + courseID + "/assignments", header);
        return response.data;
    }

    const GetCourses = async () => {
        const response = await axios.get(baseURL + '/courses/' + courseID, header);
        return response.data
    }

    const GetAssignment = async (key) => {
        const response = await axios.get(baseURL + '/courses/' + courseID + '/assignments/' + key, header)
        return response.data
    }

    const UpdateAssignment = async (assignment, id) => {
        await axios.put(baseURL + '/courses/' + courseID + '/assignments/' + id, {assignment: {...assignment}}, header)

    }
}

export default APIService;