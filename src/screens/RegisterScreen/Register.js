import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';
import auth from '@react-native-firebase/auth';

const Register = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    function LoginNavigation() {
        navigation.navigate("Login")
    }
    function CreateUser() {
        auth()
            .createUserWithEmailAndPassword(email, password)
            .then(() => {
                console.log('User account created & signed in!');
            })
            .catch(error => {
                if (error.code === 'auth/email-already-in-use') {
                    console.log('That email address is already in use!');
                }

                if (error.code === 'auth/invalid-email') {
                    console.log('That email address is invalid!');
                }

                console.error(error);
            });
    }
    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Image
                    source={require('../../assets/images/science.png')}
                    style={styles.logo}
                />
            </View>
            <Text style={styles.welcomeText}>Create an Account</Text>
            <Text style={styles.subText}>Please sign up to continue</Text>
            <View style={styles.inputWrapper}>
                <Icon name="user" size={20} color="#888" style={styles.iconStyle} />
                <TextInput
                    placeholder="Username"
                    value={username}
                    onChangeText={(value) => setUsername(value)}
                    style={styles.input}
                    placeholderTextColor="#888"
                />
            </View>

            <View style={styles.inputWrapper}>
                <Icon name="envelope" size={20} color="#888" style={styles.iconStyle} />
                <TextInput
                    placeholder="Email"
                    value={email}
                    onChangeText={(value) => setEmail(value)}
                    style={styles.input}
                    placeholderTextColor="#888"
                />
            </View>

            <View style={styles.inputWrapper}>
                <Icon name="lock" size={24} color="#888" style={styles.iconStyle} />
                <TextInput
                    placeholder="Password"
                    secureTextEntry={!showPassword}
                    value={password}
                    onChangeText={(value) => setPassword(value)}
                    style={styles.input}
                    placeholderTextColor="#888"
                />
                <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={styles.eyeIcon}>
                    <Icon name={showPassword ? 'eye' : 'eye-slash'} size={20} color="#888" />
                </TouchableOpacity>
            </View>

            <View style={styles.inputWrapper}>
                <Icon name="lock" size={24} color="#888" style={styles.iconStyle} />
                <TextInput
                    placeholder="Confirm Password"
                    secureTextEntry={!showPassword}
                    value={confirmPassword}
                    onChangeText={(value) => setConfirmPassword(value)}
                    style={styles.input}
                    placeholderTextColor="#888"
                />
            </View>

            <TouchableOpacity style={styles.registerButton} onPress={() =>
                CreateUser()
            }>
                <Text style={styles.registerButtonText}>Register</Text>
            </TouchableOpacity>

            <Text style={styles.signupText}>
                Already have an account?{' '}
                <TouchableOpacity onPress={() => LoginNavigation()}>
                    <Text style={styles.signupLink}>Login!</Text>
                </TouchableOpacity>
            </Text>
        </View>
    );
};



export default Register;
