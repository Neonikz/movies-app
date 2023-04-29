import React from 'react'
import { Image, View, TouchableOpacity } from 'react-native'
import { Movie } from '../interfaces/movieInterface'
import { movieStyles } from '../theme/moviePosterTheme'
import { useNavigation } from '@react-navigation/native';


interface MoviePosterProps {
    movie: Movie;
    height?: number;
    width?: number;
}

const MoviePoster = ({ movie, height = 420, width = 300 }: MoviePosterProps) => {

    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`

    const navigation = useNavigation();

    return (
        <TouchableOpacity
            onPress={() => navigation.navigate('DetailScreen', movie)}
            activeOpacity={0.8}
            style={{
                height,
                width,
                marginHorizontal: 2,
                paddingBottom: 20,
                paddingHorizontal: 7
            }}>
            <View style={movieStyles.imageContainer}>
                <Image source={{ uri }} style={movieStyles.image} />
            </View>
        </TouchableOpacity>
    )
}

export default MoviePoster

