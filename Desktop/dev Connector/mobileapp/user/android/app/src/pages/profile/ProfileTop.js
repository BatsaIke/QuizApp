import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Linking } from 'react-native';

const ProfileTop = ({profile}) => {
  const {status,company,location,website,social,user} =profile
  const {name, avatar} = user
  const avatarUrl = `https:${avatar}`;

  return (
    <View style={styles.profileTop}>
      <Image source={{ uri: avatarUrl }} style={styles.roundImg} />
      <Text style={styles.large}>{name}</Text>
      <Text style={styles.lead}>
        {status} {company ? <Text> at {company}</Text> : null}
      </Text>
      {location ? <Text>{location}</Text> : null}
      <View style={styles.icons}>
        {website ? (
          <TouchableOpacity onPress={() => Linking.openURL(website)}>
            <Text style={styles.icon}></Text>
          </TouchableOpacity>
        ) : null}
        {social
          ? Object.entries(social)
              .filter(([_, value]) => value)
              .map(([key, value]) => (
                <TouchableOpacity
                  key={key}
                  onPress={() => Linking.openURL(value)}
                >
                  <Text style={styles.icon}>{key}</Text>
                </TouchableOpacity>
              ))
          : null}
      </View>
    </View>
  );
};



const styles = StyleSheet.create({
  profileTop: {
    backgroundColor: '#17a2b8', // Primary color
    padding: 10,
    alignItems: 'center',
    borderRadius: 5,
  },
  roundImg: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  large: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  lead: {
    color: '#fff',
    marginBottom: 10,
  },
  icons: {
    flexDirection: 'row',
    marginTop: 10,
  },
  icon: {
    fontSize: 24,
    color: '#fff',
    marginRight: 10,
  },
});

export default ProfileTop;
