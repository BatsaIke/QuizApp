import React, { useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { get_Profiles } from '../../component/api/profileActions';
import ProfileItem from './ProfileItem'
import {Spinner} from '../../layout/Spinner';
import { useDispatch, useSelector } from 'react-redux';

const Profiles = () => {
  const dispatch = useDispatch()
  
  useEffect(() => {
     dispatch(get_Profiles());
  }, [dispatch]);

   const {profiles ,loading}= useSelector((state)=>state.profile)

   console.log(profiles,"ALL profiles")

  return (
    <ScrollView style={styles.container}>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <Text style={styles.largeText}>Developers</Text>
          <Text style={styles.lead}>
            <Text style={styles.icon}></Text> Browse and connect with developers
          </Text>
          <View style={styles.profiles}>
            {profiles.length > 0 ? (
              profiles.map((profile) => (
               
                
                <ProfileItem key={profile._id} profile={profile} /> 
                
              ))
            ) : (
              loading && <Text style={styles.noProfilesText}>No profiles found</Text>
            )}
          </View>
        </>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
  largeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#17a2b8', // Primary color
  },
  lead: {
    fontSize: 16,
    color: '#333',
  },
  icon: {
    fontFamily: 'FontAwesome',
    fontSize: 16,
    marginRight: 5,
    color: '#17a2b8', // Primary color
  },
  profiles: {
    marginTop: 10,
  },
  noProfilesText: {
    fontSize: 16,
    color: '#333',
    marginTop: 10,
  },
});



export default Profiles
