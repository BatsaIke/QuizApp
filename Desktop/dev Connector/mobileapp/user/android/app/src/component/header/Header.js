import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { logoutAsync } from '../redux/authSlice';


const Header = ({isAuthenticated}) => {
  const dispatch = useDispatch()


const navigation = useNavigation()

  const handleLoginPress =() => {
     navigation.navigate('Login');
  };

  const handleLandingPage = () => {
    navigation.navigate('Profiles');
  };

  const handleRegisterPress = () => {
    navigation.navigate('Signup'); 
  };
  const handleLogoutPress = async() => {
   await dispatch(logoutAsync());
    navigation.navigate('Login'); 
  };
  
  const handleDahboardPress = () => {
    navigation.navigate('Dashboard'); 
  };

  const authLinks = (
    
    <View style={styles.linksContainer}>
      <TouchableOpacity onPress={handleLandingPage}>
        <Text style={styles.link}> Developers</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>{navigation.navigate("Posts")}}>
        <Text style={styles.link}>Posts</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleDahboardPress}>
        <Text style={styles.link}>Dashboard</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleLogoutPress}>
        <Text style={styles.link}>Logout</Text>
      </TouchableOpacity>
    </View>
  );

  const guestLinks = (
    <View style={styles.linksContainer}>
      <TouchableOpacity onPress={handleLandingPage}>
        <Text style={styles.link}>Developers</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleRegisterPress}>
        <Text style={styles.link}>Register</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleLoginPress}>
        <Text style={styles.link}>Login</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.headerContainer}>
      <Text style={styles.logo}>DevConnector</Text>
      {/* Use guestLinks or authLinks based on your authentication status */}
      {isAuthenticated?authLinks: guestLinks}
    </View>
  );
};
const styles = StyleSheet.create({
    headerContainer: {
      alignItems: 'center',
      backgroundColor: '#333',
      padding: 10,
      borderColor: '#17a2b8',  // Add this line for border color
      borderBottomWidth: 1,  // Add this line for border width
    },
    logo: {
      color: '#fff',
      fontSize: 20,
      fontWeight: 'bold',
    },
    linksContainer: {
      flexDirection: 'row',
      marginTop: 10,
    },
    link: {
      color: '#fff',
      fontSize: 16,
      marginLeft: 15,
    },
  });

export default Header;
