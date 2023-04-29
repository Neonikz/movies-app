import React from 'react'
import { Cast } from '../interfaces/creditsInterface'
import { Text, View, Image } from 'react-native';
import { castItemStyle } from '../theme/castItemTheme';

interface CastItemProps {
    actor: Cast
}

const CastItem = ({ actor }: CastItemProps) => {

    const uri = `https://image.tmdb.org/t/p/w500${actor.profile_path}`;

    return (
        <View style={castItemStyle.container}>
            {
                actor.profile_path &&
                <Image
                    style={castItemStyle.image}
                    source={{ uri }}
                />
            }
            <View style={castItemStyle.actorInfo}>
                <Text style={castItemStyle.actorName}>
                    {actor.name}
                </Text>
                <Text style={castItemStyle.actorCharacter}>
                    {actor.character}
                </Text>
            </View>
        </View>
    )
}

export default CastItem;