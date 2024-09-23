import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, TextInput } from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';


const Input = (props) => {
    return (
        <View style={styles.inputWrapper}>
            <Icon name={props.icon} size={20} color="#888" style={styles.iconStyle} />
            <TextInput
                placeholder={props.placeholder}
                value={props.email}
                onChangeText={props.onpress}
                style={styles.input}
                placeholderTextColor="#888"
            />
        </View>
    );
}


export default Input;
