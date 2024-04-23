import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet } from 'react-native';
import formatDate from '../../utils/formatDate';

const ProfileExperience = ({experience}) => {
 
  const { company, title, location, current, to, from, description}=experience

  return(
  <View style={styles.container}>
    <Text style={styles.companyText}>{company}</Text>
    <Text>
      {formatDate(from)} - {to ? formatDate(to) : 'Now'}
    </Text>
    <Text>
      <Text style={styles.strongText}>Position: </Text> {title}
    </Text>
    <Text>
      <Text style={styles.strongText}>Location: </Text> {location}
    </Text>
    <Text>
      <Text style={styles.strongText}>Description: </Text> {description}
    </Text>
  </View>
)
  };



const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  companyText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  strongText: {
    fontWeight: 'bold',
  },
});

export default ProfileExperience;
