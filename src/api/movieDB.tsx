import axios from 'axios'

const movieDB = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key: 'a8f1b647b4e39d518e64d954cef93b86',
        language: 'es-ES'
    }
});

export default movieDB;
