import axios from "axios";

//keeping base api endpoint in env file is a better idea, since i am dealing with a single api endpoint,
//proceeding with this approach
const fetchFeedsRequest = () => {
  return axios.get("https://api.myjson.com/bins/18feih").then(res => {
    console.log("api hit : ", res.data.aData);
    return res.data.aData;
  });
};

export const feedsApi = {
  fetchFeedsRequest
};
