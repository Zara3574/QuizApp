import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      paddingHorizontal: 20,
      width: '100%',
    },
    logoContainer: {
      flex: 1,
      alignItems: 'center',
      marginBottom: 100,
      justifyContent: 'center'
    },
    subText: {
      fontSize: 20,
      color: '#273382', // Light, soft grayish blue for subtlety
      marginTop: 10,
      fontStyle: 'italic',
      fontWeight:'bold'
    },
    button: {
      backgroundColor: '#273382',
      borderRadius: 50,
      paddingVertical: 15,
      paddingHorizontal: 110,
      shadowColor: '#000', 
      shadowOffset: { width: 0, height: 5 },
      shadowOpacity: 0.3,
      shadowRadius: 8,
      elevation: 5,
    },
    buttonText: {
      color: '#FFFFFF', // White text for button contrast
      fontSize: 18,
      fontWeight: 'bold',
    },
    footerText: {
      color: '#273382', // Subtle grayish blue for footer text
      fontSize: 12,
      textAlign: 'center',
      marginTop: 20,
    },
    linkText: {
      textDecorationLine: 'underline',
      color: '#FF5722', // Match the button color for links
    },
  });
  