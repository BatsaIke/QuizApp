import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const ProfileItem = ({ profile }) => {
  const navigation = useNavigation(); 

  const {
    user: { _id, name, avatar },
    status,
    company,
    location,
    skills,
  } = profile;

  const avatarUrl = `https:${avatar}`;

  return (
    <View style={styles.profile}>
      <View style={styles.profileContent}>
        <Image source={{ uri: avatarUrl }} style={styles.roundImage} />
        <View style={styles.profileInfo}>
          <Text style={styles.name}>{name}</Text>
          <Text>
            {status} {company && <Text> at {company}</Text>}
          </Text>
          {location && <Text style={styles.my1}>{location}</Text>}
          <TouchableOpacity
            style={styles.viewProfileButton}
            onPress={() => {
              navigation.navigate('Profile', { id: _id });
            }}
          >
            <Text style={styles.buttonText}>View Profile</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.skillsList}>
        {skills.slice(0, 4).map((skill, index) => (
          <Text key={index} style={styles.skillItem}>
            <Text style={styles.checkIcon}></Text> {skill}
          </Text>
        ))}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  profile: {
    backgroundColor: '#f8f9fa', // Light background color
    padding: 10,
    marginVertical: 10,
  },
  profileContent: {
    flexDirection: 'row',
  },
  roundImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  profileInfo: {
    marginLeft: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  my1: {
    fontSize: 14,
    marginVertical: 5,
  },
  viewProfileButton: {
    backgroundColor: '#007bff', // Primary color
    padding: 5,
    borderRadius: 5,
    marginTop: 5,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },
  skillsList: {
    flexDirection: 'row',
    marginTop: 10,
  },
  skillItem: {
    marginRight: 10,
    color: '#007bff', // Primary color
  },
  checkIcon: {
    fontFamily: 'FontAwesome',
    fontSize: 12,
    marginRight: 5,
    color: '#007bff', // Primary color
  },
});

export default ProfileItem;
