import React from 'react'
import { ActivityIndicator, View } from 'react-native'

const Loader = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <ActivityIndicator color="red" size={50} />
        </View>
    )
}

export default Loader