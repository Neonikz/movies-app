import { StyleSheet } from "react-native";

export const movieStyles = StyleSheet.create({
    container: {
        width: 300,
        height: 420
    },
    imageContainer: {
        flex: 1,
        borderRadius: 18,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.6,
        shadowRadius: 6.27,

        elevation: 10,
    },
    image: {
        flex: 1,
        borderRadius: 18,
    }
});