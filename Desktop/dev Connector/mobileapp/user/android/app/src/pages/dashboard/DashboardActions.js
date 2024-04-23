import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const DashboardActions = () => {
  const navigation = useNavigation()
  return (
    <View style={styles.dashButtons}>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ProfileForm', { mode: 'edit profile' })}>
        <Text style={styles.buttonText}>
          <Text style={styles.icon}></Text> Edit Profile
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('AddExperience')}>
        <Text style={styles.buttonText}>
          <Text style={styles.icon}></Text> Add Experience
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('AddEducation')}>
        <Text style={styles.buttonText}>
          <Text style={styles.icon}></Text> Add Education
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  dashButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  button: {
    backgroundColor: '#f4f4f4',
    padding: 10,
    borderRadius: 5,
    marginVertical: 5,
  },
  buttonText: {
    color: '#333',
    textAlign: 'center',
  },
  icon: {
    fontFamily: 'FontAwesome',
    fontSize: 20,
    color: 'blue',
    marginRight: 5,
  },
});

export default DashboardActions;
