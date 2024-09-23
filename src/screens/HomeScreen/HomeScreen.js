import React from 'react';
import { View, Text, Image, TouchableOpacity,FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/dist/Entypo';
import styles from './styles';
const HomeScreen = ({navigation}) => {
    const categories = [
        { id: '1', title: 'Sports', count: '50 questions', image: require('../../assets/images/sports.png') },
        { id: '2', title: 'Chemistry', count: '30 questions', image: require('../../assets/images/chemistry.png') },
        { id: '3', title: 'Math', count: '95 questions', image: require('../../assets/images/math.png') },
        { id: '4', title: 'History', count: '128 questions', image: require('../../assets/images/history.png') },
        { id: '5', title: 'Biological', count: '30 questions', image: require('../../assets/images/biology.png') },
        { id: '6', title: 'Geography', count: '24 questions', image: require('../../assets/images/geography.png') }
    ];
    const renderItem = ({ item }) => (
        <TouchableOpacity style={[styles.categoryItem, styles.shadowEffect]} onPress={QuestionNavigation}>
            <Image source={item.image} style={styles.categoryImage} />
            <Text style={styles.categoryTitle}>{item.title}</Text>
            <Text style={styles.categoryCount}>{item.count}</Text>
        </TouchableOpacity>
    );
    function QuestionNavigation()
    {
        navigation.navigate("Question")
    }
    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <View>
                    <Text style={styles.greeting}>Hi, John</Text>
                    <Text style={styles.subtitle}>Let's make this day productive</Text>
                </View>
                <Image source={require('../../assets/images/profile.jpg')} style={{ width: 50, height: 50, borderRadius: 50 }} />
            </View>

            {/* Ranking and Points */}
            <View style={styles.statusBar}>
                <View style={[styles.statusItem, styles.shadowEffect]}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Icon name="trophy" size={27} color="#fcba03" style={{}} />
                        <View style={{ marginLeft: 15, }}>
                            <Text style={styles.statusText}>Ranking</Text>
                            <Text style={styles.statusValue}>348</Text>
                        </View>

                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Icon name="database" size={27} color="#fcba03" />
                        <View style={{ marginLeft: 15 }}>
                            <Text style={styles.statusText}>Points</Text>
                            <Text style={styles.statusValue}>1209</Text>
                        </View>
                    </View>

                </View>
            </View>

            {/* Let's Play Section */}
            <Text style={styles.sectionTitle}>Let's play</Text>
                <FlatList
                    data={categories}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    numColumns={2}
                    contentContainerStyle={styles.categoriesContainer}                />
        </View>
    );
}



export default HomeScreen;
