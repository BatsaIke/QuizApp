import React, {useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import {Spinner} from '../../layout/Spinner';
import ProfileTop from './ProfileTop';
import ProfileAbout from './ProfileAbout';
import ProfileExperience from './ProfileExperience';
import ProfileEducation from './ProfileEducation';
import ProfileGithub from './ProfileGithub';
import {getProfileById} from '../../component/api/profileActions';
import {useDispatch, useSelector} from 'react-redux';

const Profile = () => {
  const navigation= useNavigation()
  const dispatch = useDispatch();
  const {profile} = useSelector(state => state.profile);
  const {user, isAuthenticated, loading} = useSelector(state => state.auth);

  const route = useRoute();
  const {id} = route.params;
  const handleEditProfile = () => {
    navigation.navigate('ProfileForm', { mode: 'edit profile' });
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(getProfileById(id));
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [dispatch, id]);

  return (
    <ScrollView style={styles.container}>
      {profile === null ? (
        <Spinner />
      ) : (
        <>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Profiles')}>
            <Text style={styles.buttonText}>Back To Profiles</Text>
          </TouchableOpacity>
          {isAuthenticated &&
            loading === false &&
            user._id === profile.user._id && (
              <TouchableOpacity
                style={[styles.button, styles.darkButton]}
                onPress={handleEditProfile}>
                <Text style={styles.buttonText}>Edit Profile</Text>
              </TouchableOpacity>
            )}
          <View style={styles.profileGrid}>
            <ProfileTop profile={profile} />
            <ProfileAbout profile={profile} />
            <View style={[styles.profileSection, styles.bgWhite, styles.p2]}>
              <Text style={styles.textPrimary}>Experience</Text>
              {profile.experience.length > 0 ? (
                profile.experience.map(experience => (
                  <ProfileExperience
                    key={experience._id}
                    experience={experience}
                  />
                ))
              ) : (
                <Text>No experience credentials</Text>
              )}
            </View>

            <View style={[styles.profileSection, styles.bgWhite, styles.p2]}>
              <Text style={styles.textPrimary}>Education</Text>
              {profile.education.length > 0 ? (
                <>
                  {profile.education.map(education => (
                    <ProfileEducation
                      key={education._id}
                      education={education}
                    />
                  ))}
                </>
              ) : (
                <Text>No education credentials</Text>
              )}
            </View>

            {profile.githubusername && (
              <>
              <ProfileGithub username={profile.githubusername} />
              </>
            )}
          </View>
        </>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#f4f4f4',
    padding: 10,
    borderRadius: 5,
    marginVertical: 5,
    alignItems: 'center',
  },
  darkButton: {
    backgroundColor: '#343a40', // Dark color
  },
  buttonText: {
    color: '#333',
  },
  profileGrid: {
    marginTop: 10,
  },
  profileSection: {
    borderRadius: 5,
    marginBottom: 10,
  },
  bgWhite: {
    backgroundColor: '#fff',
  },
  p2: {
    padding: 10,
  },
  textPrimary: {
    color: '#17a2b8', // Primary color
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default Profile;
