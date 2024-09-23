import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import styles from './styles';
const Splash = ({navigation}) => {
  function LoginNavigation()
  {
    navigation.navigate("Login")
  }
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require('../../assets/images/science.png')} style={{
          width: 130, height: 130, 
        }} />
        <Text style={styles.subText}>Play, Learn, and Win!!</Text>
      </View>
      <View style={{ marginBottom: 20 }}>
        <TouchableOpacity style={styles.button} onPress={()=>LoginNavigation()}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
        <Text style={styles.footerText}>
          By playing, you agree to our
          <Text style={styles.linkText}> Terms of Service </Text>
          and
          <Text style={styles.linkText}> Privacy Policy.</Text>
        </Text>
      </View>
    </View>
  );
};


export default Splash;
