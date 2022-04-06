import axios from "axios";

export default class AnimeService {

    static fetchAnimes = async () => {
        return axios.get("https://ghibliapi.herokuapp.com/films");
    }

    static fetchAnimesById = async (anime_id) => {
        return axios.get(`https://ghibliapi.herokuapp.com/films/${anime_id}`);
    }
}