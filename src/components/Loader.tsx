import React from 'react'
import { ActivityIndicator, View } from 'react-native'

interface LoaderProps {
    color?: string
}

const Loader = ({ color = 'red' }: LoaderProps) => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <ActivityIndicator color={color} size={50} />
        </View>
    )
}

export default Loader