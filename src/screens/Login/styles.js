import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    logoContainer: {
        marginBottom: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
    },
    welcomeText: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 5,
    },
    subText: {
        fontSize: 16,
        color: '#666',
        marginBottom: 30,
    },
    
    eyeIcon: {
        paddingLeft: 10,
    },
    loginButton: {
        backgroundColor: '#FFCC00',
        borderRadius: 25,
        paddingVertical: 12,
        paddingHorizontal: 80,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5,
    },
    loginButtonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
    },
    forgotPassword: {
        color: '#FFCC00',
        marginTop: 10,
        fontSize: 14,
    },
    signupText: {
        fontSize: 14,
        color: '#888',
        marginTop: 20,
    },
    signupLink: {
        color: '#FFCC00',
        fontWeight: 'bold',
    },
    inputWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 25,
        marginBottom: 20,
        paddingHorizontal: 15,
        backgroundColor: '#f9f9f9',
        width: '85%',
        height: 50,
    },
    iconStyle: {
        marginRight: 10,
    },
    input: {
        flex: 1,
        fontSize: 16,
        color: '#333',
    },
});
