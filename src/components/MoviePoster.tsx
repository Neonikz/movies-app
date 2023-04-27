import React from 'react'
import { Image, View } from 'react-native'
import { Movie } from '../interfaces/movieInterface'
import { movieStyles } from '../theme/moviePosterTheme'


interface MoviePosterProps {
    movie: Movie;
    height?: number;
    width?: number;
}

const MoviePoster = ({ movie, height = 420, width = 300 }: MoviePosterProps) => {

    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`

    return (
        <View style={{
            height,
            width,
            marginHorizontal: 8
        }}>
            <View style={movieStyles.imageContainer}>
                <Image source={{ uri }} style={movieStyles.image} />
            </View>
        </View>
    )
}

export default MoviePoster

