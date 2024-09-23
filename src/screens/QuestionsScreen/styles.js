import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#F9FBFF',
    },
    progressBarContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 20,
    },
    progressBarContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 20,
    },
    questionCounter: {
        marginLeft: 10,
        color: '#333',
        fontSize: 14,
    },
    progressBar: {
        flex: 1, // Take up the available space between the cross icon and the question counter
        height: 10,
        backgroundColor: '#ddd',
        borderRadius: 5,
        marginHorizontal: 10, // Adds space around the progress bar
    },
    progress: {
        height: '100%',
        backgroundColor: '#FF9F41', // Progress bar color (green)
        borderRadius: 5,
    },
    questionCounter: {
        marginLeft: 10,
        color: '#333',
        fontSize: 14,
    },
    questionText: {
        fontSize: 18,
        color: '#000',
        marginVertical: 40,
        textAlign: 'center',
        paddingVertical: 70,
        backgroundColor: '#b7eaf7',
        paddingHorizontal: 20,
        borderRadius: 20,
    },
    optionButton: {
        padding: 15,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#ddd',
        marginBottom: 10,
    },
    correctOption: {
        padding: 15,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#79adba',
        backgroundColor: '#b7eaf7',
        marginBottom: 10,
    },
    incorrectOption: {
        padding: 15,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#FF0000',
        backgroundColor: '#FFD6D6',
        marginBottom: 10,
    },
    optionText: {
        textAlign: 'center',
        fontSize: 16,
        color: 'black'
    },
    nextButton: {
        backgroundColor: '#3EB8D4',
        padding: 15,
        borderRadius: 10,
        marginTop: 20,
    },
    nextButtonText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 16,
    },
});