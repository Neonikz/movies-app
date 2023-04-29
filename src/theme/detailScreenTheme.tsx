import { StyleSheet, Dimensions } from 'react-native';

const screenHeight = Dimensions.get('screen').height;

export const detailScreenStyles = StyleSheet.create({
    imageContainer: {
        overflow: 'hidden',
        width: '100%',
        height: screenHeight * 0.7,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.6,
        shadowRadius: 6.27,

        elevation: 10,
        borderBottomEndRadius: 25,
        borderBottomStartRadius: 25,
    },
    posterImage: {
        flex: 1,
    },
    titleContainer: {
        marginHorizontal: 20,
        marginTop: 20
    },
    subTitle: {
        fontSize: 16
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000'
    },
    backButton: {
        position: 'absolute',
        zIndex: 999,
        elevation: 9,
        top: 30,
        left: 5
    },
});