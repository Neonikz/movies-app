import React from 'react'
import { View, Animated, Button } from 'react-native';
import { fadeScreenStyles } from '../theme/fadeScreenTheme';
import { useFade } from '../hooks/useFade';

const FadeScreen = () => {

    const { opacity, fadeIn, fadeOut } = useFade()

    return (
        <View style={fadeScreenStyles.container}>
            <Animated.View style={{
                ...fadeScreenStyles.fade,
                opacity
            }} />

            <Button
                title="Fade In"
                onPress={fadeIn}
            />
            <Button
                title="Fade Out"
                onPress={fadeOut}
            />


        </View>
    )
}

export default FadeScreen