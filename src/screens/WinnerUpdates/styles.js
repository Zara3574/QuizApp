import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: '#ffff',
        padding: 5,
        marginTop: 20,
        width: '80%',
        alignSelf: 'center',
        borderRadius: 20
    },
    LeaderView:
    {
        flexDirection:'row',
        justifyContent: 'center',
        padding: 10,
        marginTop: 40,
        alignItems: 'center',
        paddingHorizontal:30
    },
    LeaderBoardText:
    {
        fontSize:22,
        fontWeight:'bold'

    },
    tabButton: {
        paddingHorizontal: 20,
        paddingVertical: 13,
        borderRadius: 15
    },
    tabText: {
        color: '#1F8DA6',
        fontSize: 16,
        fontWeight: 'bold',
    },
    topThreeContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 30,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        paddingHorizontal: 20,
    },
    roundedContainer: {
        backgroundColor: '#1F8DA6',
    },
    topPlayer: {
        alignItems: 'center',
    },
    topAvatar: {
        width: 70,
        height: 70,
        borderRadius: 35,
    },
    topAvatarWithCrown: {
        width: 70,
        height: 70,
        borderRadius: 35,
        borderWidth: 3,
        borderColor: '#FFD700', // gold color for crown
    },
    topName: {
        marginTop: 5,
        fontWeight: 'bold',
        fontSize: 16,
    },
    topScore: {
        color: '#777',
    },
    leaderboardItem: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#fff',
        marginVertical: 5,
        marginHorizontal: 15,
        borderRadius: 10,
        elevation: 3,
    },
    rankContainer: {
        width: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    rankText: {
        fontSize: 18,
        fontWeight: 'bold',
        color:'black'
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginHorizontal: 10,
    },
    nameText: {
        flex: 1,
        fontSize: 16,
        fontWeight: 'bold',
        color:'black'
    },
    scoreText: {
        fontSize: 16,
        color: '#777',
    },
    leaderboardList: {
        paddingBottom: 20,
    },
});
