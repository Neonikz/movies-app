import React from 'react'
import { View, Text } from 'react-native';
import { MovieFull } from '../interfaces/movieInterface';
import { Cast } from '../interfaces/creditsInterface';
import Icon from 'react-native-vector-icons/Ionicons';
import currencyFormatter from 'currency-formatter'
import CastItem from './CastItem';
import { FlatList } from 'react-native-gesture-handler';

interface MovieDetailsProps {
    movieFull: MovieFull;
    cast: Cast[]
}

const MovieDetails = ({ movieFull, cast }: MovieDetailsProps) => {
    return (
        <>
            <View style={{ marginHorizontal: 20 }}>
                <View style={{ flexDirection: 'row' }}>
                    <Icon name="star-outline" color="#ccc" size={16} />
                    <Text>{movieFull.vote_average}</Text>
                    <Text style={{ marginStart: 5 }}>
                        -{movieFull.genres.map(genre => genre.name).join(', ')}
                    </Text>
                </View>

                <Text style={{ fontSize: 23, marginTop: 10, fontWeight: 'bold', color: '#000' }}>
                    Historia
                </Text>

                <Text style={{ fontSize: 16, color: '#000' }}>
                    {movieFull.overview}
                </Text>

                <Text style={{ fontSize: 23, marginTop: 10, fontWeight: 'bold', color: '#000' }}>
                    Presupuesto
                </Text>
                <Text style={{ fontSize: 18, color: '#000' }}>
                    {currencyFormatter.format(movieFull.budget, { code: 'USD' })}
                </Text>

                <View style={{ marginTop: 10, marginBottom: 100 }}>
                    <Text style={{ fontSize: 23, marginTop: 10, fontWeight: 'bold', color: '#000', }}>
                        Actores
                    </Text>
                    <FlatList
                        data={cast}
                        keyExtractor={item => item.id.toString()}
                        renderItem={({ item }) => <CastItem actor={item} />}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        style={{ marginTop: 10, height: 70 }}
                    />
                </View>

            </View>
        </>
    )
}

export default MovieDetails