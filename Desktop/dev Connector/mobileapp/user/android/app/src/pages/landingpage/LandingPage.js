import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView, Dimensions } from 'react-native';

const LandingPage = ({navigation}) => {

    const handleLoginPress = () => {
        navigation.navigate('Login');
      };
    
      const handleSignupPress = () => {
        navigation.navigate('Signup'); // Replace 'Signup' with the actual screen name for signup
      };
  return (
    <ScrollView
      contentContainerStyle={styles.scrollViewContainer}
      style={styles.scrollView}
    >
      <Image
        source={require('../../img/showcase.jpg')} // Adjust the path accordingly
        style={styles.backgroundImage}
      />
      <View style={styles.darkOverlay}>
        <View style={styles.landingInner}>
          <Text style={styles.xLarge}>Developer Connector</Text>
          <Text style={styles.lead}>
            Create a developer profile/portfolio, share posts and get help from
            other developers
          </Text>
          <View style={styles.buttons}>
            <TouchableOpacity style={styles.primaryButton}  onPress={handleSignupPress}>
              <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.lightButton}  onPress={handleLoginPress}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const screenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  scrollViewContainer: {
    flexGrow: 1,
    // height: screenHeight, // Set height to full screen height
  },
  scrollView: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  darkOverlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    flex: 1,
    width: '100%', // Ensure overlay covers the entire screen
    alignItems: 'center',
    justifyContent: 'center', 
  },
  landingInner: {
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  xLarge: {
    fontSize: 40,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  lead: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
  },
  buttons: {
    flexDirection: 'row',
    marginTop: 20,
  },
  primaryButton: {
    backgroundColor: '#17a2b8',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginRight: 10,
    borderRadius: 5,
  },
  lightButton: {
    backgroundColor: '#f4f4f4',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#333',
    fontSize: 16,
  },
});

export default LandingPage;
