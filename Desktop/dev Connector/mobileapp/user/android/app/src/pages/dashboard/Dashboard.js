import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import DashboardActions from './DashboardActions';
import { getCurrentProfile, deleteAccount } from '../../component/api/profileActions';
import { useDispatch, useSelector } from 'react-redux';
import Experience from './Experience';
import Education from './Education';
import { useFocusEffect } from '@react-navigation/native';
import { Spinner } from '../../layout/Spinner';

const Dashboard = ({ navigation }) => {
  const dispatch = useDispatch();
  const { user, loading } = useSelector((state) => state.auth);
  const { profile } = useSelector((state) => state.profile);

  const fetchData = async () => {
    try {
      await dispatch(getCurrentProfile());
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    
    fetchData()
    
  }, [dispatch]);


  useFocusEffect(
    React.useCallback(() => {
      fetchData();
    }, [dispatch])
  );

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      {loading ? (
        <Spinner />
      ) : (
      <View style={styles.container}>
        <Text style={styles.largeText}>Dashboard</Text>
        <Text style={styles.leadText}>
          <Text style={styles.icon}></Text> Welcome {user && user.name}
        </Text>
        {profile !== null ? (
          <>
            <DashboardActions />
            <Experience experience={profile.experience} />
            <Education education={profile.education} />

            <View style={styles.buttonContainer}>
            <TouchableOpacity
                style={[styles.button, styles.dangerButton]}
                onPress={() => dispatch(deleteAccount())} 
              >
                <Text style={styles.buttonText}>
                  <Text style={styles.icon}></Text> Delete My Account
                </Text>
              </TouchableOpacity>
            </View>
          </>
        ) : (
          <>
            <Text>You have not yet set up a profile, please add some info</Text>
            <TouchableOpacity
                style={[styles.button, styles.primaryButton]}
                onPress={() => navigation.navigate('ProfileForm', { mode: 'add profile' })}
              >
              <Text style={styles.buttonText}>Create Profile</Text>
            </TouchableOpacity>
          </>
        )}
      </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  largeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#17a2b8', // Primary color
  },
  leadText: {
    fontSize: 16,
    color: '#333',
  },
  icon: {
    fontFamily: 'FontAwesome',
    fontSize: 16,
    marginRight: 5,
    color: '#17a2b8', // Primary color
  },
  buttonContainer: {
    marginTop: 10,
  },
  button: {
    padding: 10,
    borderRadius: 5,
    marginVertical: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
  },
  primaryButton: {
    backgroundColor: '#17a2b8', // Primary color
  },
  dangerButton: {
    backgroundColor: '#dc3545', // Danger color
  },
});

export default Dashboard;
