import ImageColors from 'react-native-image-colors'

export const getImageColors = async (uri: string) => {
    let primary;
    let secondary;
    try {
        const colors = await ImageColors.getColors(uri, {})

        if (colors.platform === 'android') {
            // android result properties
            primary = colors.dominant;
            secondary = colors.average;
        } else {
            // iOS result properties
            primary = colors.primary;
            secondary = colors.secondary;
        }

    } catch (error) {
        console.log({ error })
    }

    return [primary, secondary]
}