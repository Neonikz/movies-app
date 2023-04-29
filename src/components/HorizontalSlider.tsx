import React from 'react'
import { Movie } from '../interfaces/movieInterface';
import { Text, View } from 'react-native';
import { homeScreenStyles } from '../theme/homeScreenTheme';
import { FlatList } from 'react-native-gesture-handler';
import MoviePoster from './MoviePoster';

interface HorizontalSliderProps {
    title?: string;
    movies: Movie[]
}

const HorizontalSlider = ({ title, movies }: HorizontalSliderProps) => {
    return (
        <View style={{
            height: !!title ? 260 : 220
        }}>
            {
                title && (<Text style={homeScreenStyles.title}>{title}</Text>)
            }
            <FlatList
                data={movies}
                renderItem={({ item }: any) => (
                    <MoviePoster movie={item} width={140} height={200} />
                )}
                keyExtractor={item => item.id.toString()}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}

export default HorizontalSlider