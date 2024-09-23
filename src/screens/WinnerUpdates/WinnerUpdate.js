import React from 'react';
import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import styles from './styles';
import IonIcon from 'react-native-vector-icons/Ionicons';


const WinnerUpdate = () => {
    const leaderboardData = [
        { id: '1', name: 'David James', score: '145,093', avatar: 'https://randomuser.me/api/portraits/men/1.jpg', crown: true },
        { id: '2', name: 'Lennert Niva', score: '120,774', avatar: 'https://randomuser.me/api/portraits/men/2.jpg' },
        { id: '3', name: 'Peter', score: '95,876', avatar: 'https://randomuser.me/api/portraits/men/3.jpg' },
        { id: '4', name: 'Smith Carol', score: '91,736', avatar: 'https://randomuser.me/api/portraits/men/4.jpg' },
        { id: '5', name: 'Stina Gunnarsdottir', score: '90,281', avatar: 'https://randomuser.me/api/portraits/women/5.jpg' },
        { id: '6', name: 'Benedikt Safiyulin', score: '88,463', avatar: 'https://randomuser.me/api/portraits/men/6.jpg' },
        { id: '7', name: 'Gabriel Soares', score: '85,287', avatar: 'https://randomuser.me/api/portraits/men/7.jpg' },
        { id: '8', name: 'Yahiro Ayuko', score: '84,009', avatar: 'https://randomuser.me/api/portraits/men/8.jpg' },
        { id: '9', name: 'Saami Al Samad', score: '83,292', avatar: 'https://randomuser.me/api/portraits/men/9.jpg' },
    ];
    const renderLeaderboardItem = ({ item, index }) => (
        <View style={styles.leaderboardItem}>
            <View style={styles.rankContainer}>
                <Text style={styles.rankText}>{index + 4}</Text>
            </View>
            <Image source={{ uri: item.avatar }} style={styles.avatar} />
            <Text style={styles.nameText}>{item.name}</Text>
            <Text style={styles.scoreText}>{item.score}</Text>
        </View>
    );
    return (
        <View style={styles.container}>
            <View style={styles.roundedContainer} >
                <View style={styles.LeaderView}>
                        <IonIcon name="chevron-back-outline" size={23} color="#fff" />
                    <View style={{flex:1,alignItems:'center'}}>
                        <Text style={styles.LeaderBoardText}>Leaderboard</Text>
                    </View>
                </View>
                <View style={styles.header}>
                    <TouchableOpacity style={[styles.tabButton, { backgroundColor: '#1F8DA6', }]}>
                        <Text style={[styles.tabText, { color: 'white' }]}>All time</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.tabButton}>
                        <Text style={styles.tabText}>This week</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.tabButton}>
                        <Text style={styles.tabText}>Month</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.topThreeContainer}>
                    <View style={[styles.topPlayer, { marginTop: 50 }]}>
                        <Image source={{ uri: leaderboardData[1].avatar }} style={styles.topAvatar} />
                        <Text style={styles.topName}>{leaderboardData[1].name}</Text>
                        <Text style={styles.topScore}>{leaderboardData[1].score}</Text>
                    </View>
                    <View style={styles.topPlayer}>
                        <Image source={{ uri: leaderboardData[0].avatar }} style={styles.topAvatarWithCrown} />
                        <Text style={styles.topName}>{leaderboardData[0].name}</Text>
                        <Text style={styles.topScore}>{leaderboardData[0].score}</Text>
                    </View>
                    <View style={[styles.topPlayer, { marginTop: 50 }]}>
                        <Image source={{ uri: leaderboardData[2].avatar }} style={styles.topAvatar} />
                        <Text style={styles.topName}>{leaderboardData[2].name}</Text>
                        <Text style={styles.topScore}>{leaderboardData[2].score}</Text>
                    </View>
                </View>
            </View>

            <FlatList
                data={leaderboardData.slice(3)}
                renderItem={renderLeaderboardItem}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.leaderboardList}
            />
        </View>
    );
}


export default WinnerUpdate;
