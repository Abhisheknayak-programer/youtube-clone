import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  params: { maxResults: 50 },
  headers: {
    "X-RapidAPI-Key": "6749cf4ac5msh2cbbef89b3ffaedp1b3ec3jsn6a85864b62ce",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchFromApi = async (url) => {
  const response = await axios.get(`${BASE_URL}/${url}`, options);
  //   console.log(response);
  return response.data;
};
