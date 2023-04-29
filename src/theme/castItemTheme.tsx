import { StyleSheet } from 'react-native';

export const castItemStyle = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        height: 50,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.6,
        shadowRadius: 6.27,
        elevation: 5,
        borderRadius: 10,
        marginRight: 30,
        paddingEnd: 15,
    },
    actorInfo: {
        marginLeft: 10,
        marginTop: 4,
    },
    image: { width: 50, height: 50, borderRadius: 10 },
    actorName: { fontSize: 18, fontWeight: 'bold', color: '#000' },
    actorCharacter: { fontSize: 16 }
});