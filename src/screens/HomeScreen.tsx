import React from 'react'
import { Dimensions, View, ScrollView } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Carousel from 'react-native-snap-carousel';
import useMovies from '../hooks/useMovies'
import Loader from '../components/Loader'
import MoviePoster from '../components/MoviePoster'
import { homeScreenStyles } from '../theme/homeScreenTheme';
import HorizontalSlider from '../components/HorizontalSlider';


const { width: windowWidth } = Dimensions.get('window')

const HomeScreen = () => {

    const { nowPlaying, popular, topRated, upcoming, isLoading } = useMovies()
    const { top } = useSafeAreaInsets()

    if (isLoading) return <Loader />

    return (
        <ScrollView>
            <View style={{ marginTop: top + 20 }}>

                <View style={homeScreenStyles.carrouselContainer}>
                    <Carousel
                        data={nowPlaying}
                        renderItem={({ item }: any) => <MoviePoster movie={item} />}
                        sliderWidth={windowWidth}
                        itemWidth={300}
                        inactiveSlideOpacity={0.9}
                    />
                </View>

                <HorizontalSlider title="Populares" movies={popular} />
                <HorizontalSlider title="Los más Valoradas" movies={topRated} />
                <HorizontalSlider title="Proximamente" movies={upcoming} />
            </View>
        </ScrollView>
    )
}

export default HomeScreen