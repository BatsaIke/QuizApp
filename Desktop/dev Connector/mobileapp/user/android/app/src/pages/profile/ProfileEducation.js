import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import formatDate from '../../utils/formatDate';
import { useSelector } from 'react-redux';

const ProfileEducation = ({education}) => {

  const {school, degree, fieldofstudy, current, to, from, description}= education

  return(
  <View style={styles.container}>
    <Text style={styles.schoolText}>{school}</Text>
    <Text>
      {formatDate(from)} - {to ? formatDate(to) : 'Now'}
    </Text>
    <Text>
      <Text style={styles.strongText}>Degree:</Text> {degree}
    </Text>
    <Text>
      <Text style={styles.strongText}>Field Of Study:</Text> {fieldofstudy}
    </Text>
    <Text>
      <Text style={styles.strongText}>Description:</Text> {description}
    </Text>
  </View>
)
  };

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
  },
  schoolText: {
    color: '#343a40', // Dark color
    fontSize: 18,
    fontWeight: 'bold',
  },
  strongText: {
    fontWeight: 'bold',
  },
});

export default ProfileEducation;
