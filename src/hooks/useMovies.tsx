
import { useEffect, useState } from 'react'
import movieDB from '../api/movieDB'
import { Movie, MovieDBNowPlaying } from '../interfaces/movieInterface'

const useMovies = () => {

    const [isLoading, setIsLoading] = useState(true)
    const [moviesInCinema, setMoviesInCinema] = useState<Movie[]>([])

    const getMovies = async () => {
        try {
            const response = await movieDB.get<MovieDBNowPlaying>('/now_playing')
            const movies = response.data.results;
            setMoviesInCinema(movies)
            setIsLoading(false)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getMovies()
    }, [])


    return {
        moviesInCinema,
        isLoading
    }
}

export default useMovies