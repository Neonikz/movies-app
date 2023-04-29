import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Text, View, Image, ScrollView, TouchableOpacity } from 'react-native'
import { RootStackParams } from '../navigation/Navigation';
import { detailScreenStyles } from '../theme/detailScreenTheme';
import useMovieDetails from '../hooks/useMovieDetails';
import Loader from '../components/Loader';
import MovieDetails from '../components/MovieDetails';
import Icon from 'react-native-vector-icons/Ionicons';

interface DetailScreenProps extends StackScreenProps<RootStackParams, 'DetailScreen'> { }

const DetailScreen = ({ route, navigation }: DetailScreenProps) => {

    const movie = route.params;
    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

    const { isLoading, cast, movieFull } = useMovieDetails(movie.id)


    return (
        <ScrollView>
            <View style={detailScreenStyles.imageContainer}>
                <Image
                    source={{ uri }}
                    style={detailScreenStyles.posterImage}
                />
            </View>
            <View style={detailScreenStyles.titleContainer}>
                <Text style={detailScreenStyles.subTitle}>{movie.original_title}</Text>
                <Text style={detailScreenStyles.title}>{movie.title}</Text>
            </View>
            {
                isLoading
                    ? <Loader color="#ccc" />
                    : <MovieDetails movieFull={movieFull!} cast={cast} />
            }
            <TouchableOpacity
                style={detailScreenStyles.backButton}
                onPress={() => navigation.pop()}
            >
                <Icon
                    color="#fff"
                    name="arrow-back-outline"
                    size={60}
                />
            </TouchableOpacity>

        </ScrollView>
    )
}

export default DetailScreen