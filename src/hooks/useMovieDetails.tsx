import { useState, useEffect } from 'react';
import movieDB from "../api/movieDB";
import { MovieFull } from "../interfaces/movieInterface";
import { Cast, CreditsResponse } from '../interfaces/creditsInterface';

interface MovieDetails {
    cast: Cast[];
    isLoading: boolean;
    movieFull?: MovieFull;
}

const useMovieDetails = (movieId: number) => {

    const [state, setState] = useState<MovieDetails>({
        isLoading: true,
        movieFull: undefined,
        cast: []
    });

    const getMovieDetails = async () => {
        try {
            const movieDetails = movieDB.get<MovieFull>(`/${movieId}`);
            const cast = movieDB.get<CreditsResponse>(`/${movieId}/credits`);

            const [movieDetailsResponse, castResponse] = await Promise.all([movieDetails, cast])

            setState({
                isLoading: false,
                movieFull: movieDetailsResponse.data,
                cast: castResponse.data.cast
            })

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getMovieDetails();
    }, []);

    return {
        ...state
    }
}

export default useMovieDetails