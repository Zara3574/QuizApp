import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, TextInput, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';
import Input from '../../component/Input/Input';
import auth from '@react-native-firebase/auth';
const Login = ({ navigation }) => {
    const [email, setEmail] = useState('muzamil@gmail.com');
    const [password, setPassword] = useState('123456789');
    const [showPassword, setShowPassword] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleLogin = async () => {
        console.log("YES I AM ENTERED"); // Logs when the function starts executing.

        try {
            console.log("Attempting to sign in with email:", email); // Logs the email that will be used for login.
            console.log("Attempting to sign in with password:", password); // Logs the password that will be used for login.

            await auth().signInWithEmailAndPassword(email, password);
            console.log("Login successful!"); // Logs if the login was successful.

            Alert.alert('Login Success', 'You are now logged in.');
            console.log("Navigating to Home screen"); // Logs when the app tries to navigate to the 'Home' screen.

            navigation.navigate('Home'); // This will navigate the user to the 'Home' screen.
        } catch (error) {
            console.log("Login failed! Error message:", error.message); // Logs the error message if login fails.
            setErrorMessage(error.message); // Updates the error message state if an error occurs.
        }

    };


    function RegisterNavigation() {
        navigation.navigate("Register")
    }

    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Image
                    source={require('../../assets/images/science.png')}
                    style={styles.logo}
                />
            </View>

            {/* Welcome Text */}
            <Text style={styles.welcomeText}>Welcome Back!</Text>
            <Text style={styles.subText}>Please login to continue</Text>

            {/* Input Fields */}
            <Input
                value={email}
                onpress={txt => setEmail(txt)}
                placeholder={"Email"}
                icon={'envelope'}
            />
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
            <TouchableOpacity style={styles.loginButton} onPress={() => handleLogin()
            }>
                <Text style={styles.loginButtonText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.forgotPassword}>Forgot password?</Text>
            </TouchableOpacity>
            <Text style={styles.signupText}>
                Don’t have an account?{' '}
                <TouchableOpacity onPress={() => RegisterNavigation()}>
                    <Text style={styles.signupLink}>Register!</Text>
                </TouchableOpacity>
            </Text>
        </View>
    );
};


export default Login;
