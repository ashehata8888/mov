import axios from "axios";

const API_KEY = '16569e94bffba7dda6159dab91ddbd50';
const API_BASE_URL = 'https://api.themoviedb.org/3';

const client = axios.create({
    baseURL:API_BASE_URL,
    params: {api_key:API_KEY}
})

const searchMovies = async (query:string)=>{
    try{
        const response = await client.get("search/movie",{
            params:{query}
        })

        if(response.data && response.data.results){
            return response.data.results
        } else {
            console.error("couldn't get the data")
        }
    } catch(err){
        console.error(err)
        return[]
    }
}

export default searchMovies