import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/dist/Entypo';
import styles from './styles';

const Questions = ({navigation}) => {
    const [selectedOption, setSelectedOption] = useState(null); // User's selected option
    const [isAnswered, setIsAnswered] = useState(false); // Tracks whether the user has answered
    const correctOptionId = 2; // Correct answer ID

    const options = [
        { id: 1, label: 'Volleyball' },
        { id: 2, label: 'Football' }, // Correct answer
        { id: 3, label: 'Basketball' },
        { id: 4, label: 'Badminton' }
    ];

    const handleOptionPress = (optionId) => {
        if (!isAnswered) {
            setSelectedOption(optionId);
            setIsAnswered(true);
        }
    };
   
    const getOptionStyle = (optionId) => {
        if (!isAnswered) return styles.optionButton; // No color if unanswered

        if (optionId === correctOptionId) return styles.correctOption;
        if (optionId === selectedOption) return styles.incorrectOption; 

        return styles.optionButton; 
    };
   

    return (
        <View style={styles.container}>
            <View style={styles.progressBarContainer}>
                <Icon name="cross" size={27} color="black" />
                <View style={styles.progressBar}>
                    <View style={[styles.progress, { width: `70%` }]} />
                </View>
                <Text style={styles.questionCounter}>5/10</Text>
            </View>
            <Text style={styles.questionText}>What is the most popular sport throughout the world?</Text>
            {options.map((option) => (
                <TouchableOpacity
                    key={option.id}
                    style={getOptionStyle(option.id)} // Dynamically set the style based on the selection
                    onPress={() => handleOptionPress(option.id)}
                >
                    <Text style={styles.optionText}>{option.label}</Text>
                </TouchableOpacity>
            ))}
            <TouchableOpacity style={styles.nextButton} disabled={!isAnswered} onPress={()=>{
                navigation.navigate("WinnerUpdates")
            }}>
                <Text style={styles.nextButtonText}>Next</Text>
            </TouchableOpacity>
        </View>
    );
};



export default Questions;
