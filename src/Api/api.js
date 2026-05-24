import axios from "axios";

const BASE_URL = "https://youtube138.p.rapidapi.com";
const YT_API_KEY = process.env.YT_API_KEY;
console.log({YT_API_KEY});


const options = {
    params: { hl: "en", gl: "US" },
    headers: {
        "X-RapidAPI-Key": YT_API_KEY,
        "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
    },
};

const fetchDataFromApi = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
};


export { fetchDataFromApi };

