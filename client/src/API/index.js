import Followerlist from "../components/screens/Followerlist";

const APILINK = process.env.REACT_APP_API_URL;
const SummaryApi = {
    createPost:{
        API: `${APILINK}/createpost`,
        method:'Post',
    },
    Followerlist:{
        API: `${APILINK}/followerlist`,
        method:'Get',
    }
}

export default SummaryApi;