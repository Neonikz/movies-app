import React from 'react'
import { View, Text } from 'react-native'
import useMovies from '../hooks/useMovies'
import Loader from '../components/Loader'

const HomeScreen = () => {

    const { moviesInCinema, isLoading } = useMovies()

    if (isLoading) return <Loader />

    return (
        <View>
            <Text>
                HomeScreen
            </Text>
        </View>
    )
}

export default HomeScreen