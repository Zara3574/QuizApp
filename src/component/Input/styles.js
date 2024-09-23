import { StyleSheet } from "react-native";

export default styles=StyleSheet.create(
    {
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
    }
)