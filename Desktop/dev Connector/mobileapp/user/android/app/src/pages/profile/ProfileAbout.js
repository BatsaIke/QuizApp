import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProfileAbout = ({profile}) => {
  const{
    bio,
    skills,
    user: { name }
  } =profile


  return (
    <View style={styles.profileAbout}>
      {bio && (
        <>
          <Text style={styles.textPrimary}>{name.trim().split(' ')[0]}'s Bio</Text>
          <Text>{bio}</Text>
          <View style={styles.line} />
        </>
      )}
      <Text style={styles.textPrimary}>Skill Set</Text>
      <View style={styles.skills}>
        {skills.map((skill, index) => (
          <View key={index} style={styles.skillItem}>
            <Text style={styles.icon}></Text>
            <Text>{skill}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};



const styles = StyleSheet.create({
  profileAbout: {
    backgroundColor: '#f4f4f4',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  textPrimary: {
    color: '#17a2b8', // Primary color
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  line: {
    height: 1,
    backgroundColor: '#ccc',
    marginVertical: 10,
  },
  skills: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  skillItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    marginRight: 5,
    marginBottom: 5,
    backgroundColor: '#fff',
    borderRadius: 5,
  },
  icon: {
    fontFamily: 'FontAwesome',
    fontSize: 16,
    marginRight: 5,
    color: '#17a2b8', // Primary color
  },
});

export default ProfileAbout;
