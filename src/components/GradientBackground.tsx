import React from 'react'
import { StyleSheet, View } from 'react-native';
import { gradientStyles } from '../theme/gradientTheme';
import LinearGradient from 'react-native-linear-gradient';

interface GradientBackgroundProps {
    children: JSX.Element | JSX.Element[]
}

const GradientBackground = ({ children }: GradientBackgroundProps) => {
    return (
        <View style={gradientStyles.container}>
            <LinearGradient
                colors={['#084f6a', '#75cedb', '#fff']}
                style={{ ...StyleSheet.absoluteFillObject }}
                start={{ x: 0.1, y: 0.1 }}
                end={{ x: 0.5, y: 0.5 }}
            />
            {children}
        </View>
    )
}

export default GradientBackground