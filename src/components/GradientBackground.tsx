import React, { useContext, useEffect } from 'react'
import { StyleSheet, View, Animated } from 'react-native';
import { gradientStyles } from '../theme/gradientTheme';
import LinearGradient from 'react-native-linear-gradient';
import { GradientContext } from '../context/GradientContext';
import { useFade } from '../hooks/useFade';

interface GradientBackgroundProps {
    children: JSX.Element | JSX.Element[]
}

const GradientBackground = ({ children }: GradientBackgroundProps) => {

    const { colors, prevColors, setPrevMainColors } = useContext(GradientContext)

    const { opacity, fadeIn, fadeOut } = useFade()

    useEffect(() => {
        fadeIn(() => {
            setPrevMainColors(colors);
            fadeOut(0)
        })
    }, [colors])


    return (
        <View style={gradientStyles.container}>
            <LinearGradient
                colors={[prevColors.primary, prevColors.secondary, '#fff']}
                style={{ ...StyleSheet.absoluteFillObject }}
                start={{ x: 0.1, y: 0.1 }}
                end={{ x: 0.7, y: 0.7 }}
            />
            <Animated.View
                style={{
                    ...StyleSheet.absoluteFillObject,
                    opacity
                }}
            >
                <LinearGradient
                    colors={[colors.primary, colors.secondary, '#fff']}
                    style={{ ...StyleSheet.absoluteFillObject }}
                    start={{ x: 0.1, y: 0.1 }}
                    end={{ x: 0.7, y: 0.7 }}
                />
            </Animated.View>
            {children}
        </View>
    )
}

export default GradientBackground