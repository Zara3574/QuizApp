import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        padding: 20,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding:10
    },
    greeting: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
    },
    subtitle: {
        fontSize: 16,
        color: '#666',
        marginTop: 5,
    },
    statusBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
       
    },
    statusItem: {
        flexDirection: 'row',
        padding: 7,
        borderRadius: 10,
        alignItems: 'center',
        flex: 1,
        marginHorizontal: 5,
        justifyContent: 'space-around',
        backgroundColor: '#fff',
         paddingVertical:10,
    },
    shadowEffect: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 4, 
        elevation: 5,
    },
    statusText: {
        fontSize: 14,
        color: '#333',
        fontWeight: 'bold'
    },
    statusValue: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#3EB8D4',
        alignSelf: 'center'

    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
        marginTop: 19,
        marginVertical: 10,
    },
    categoriesContainer: {
        justifyContent: 'space-between',
        marginBottom:50,
    },
    categoryItem: {
        backgroundColor: '#fff',
        padding: 25,
        margin: 10,
        shadowColor: '#000', 
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4, 
        elevation: 5, 
        marginTop:30,
        borderRadius:8,
    },
    categoryImage: {
        width: 90, 
        height: 90,
        marginBottom: 10,
        marginTop:-36,
        zIndex:10,
    },
    textContainer: {
        alignItems: 'center', 
    },
    categoryTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    categoryCount: {
        fontSize: 14,
        color: '#888',
        marginTop: 5,
    },
});