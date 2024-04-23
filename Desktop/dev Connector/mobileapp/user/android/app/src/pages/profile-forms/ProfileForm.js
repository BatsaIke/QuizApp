import React, {Fragment, useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

import {
  createProfile,
  getCurrentProfile,
} from '../../component/api/profileActions';
import {useDispatch, useSelector} from 'react-redux';

const initialState = {
  company: '',
  website: '',
  location: '',
  status: '',
  skills: '',
  githubusername: '',
  bio: '',
  twitter: '',
  facebook: '',
  linkedin: '',
  youtube: '',
  instagram: '',
};

const ProfileForm = ({navigation, route}) => {
  const {params} = route;
  const isCreatingProfile = !params || params.mode !== 'edit profile';
  const dispatch = useDispatch();
  const [formData, setFormData] = useState(initialState);
  const [displaySocialInputs, toggleSocialInputs] = useState(false);

  const {profile, loading} = useSelector(state => state.profile);

  useEffect(() => {
    if (!profile) {
      dispatch(getCurrentProfile());
    }

    if (!loading && profile) {
      const profileData = {...initialState};
      for (const key in profile) {
        if (key in profileData) profileData[key] = profile[key];
      }
      for (const key in profile.social) {
        if (key in profileData) profileData[key] = profile.social[key];
      }
      if (Array.isArray(profileData.skills))
        profileData.skills = profileData.skills.join(', ');
      setFormData(profileData);
    }
  }, [loading, getCurrentProfile, profile]);

  const {
    company,
    website,
    location,
    status,
    skills,
    githubusername,
    bio,
    twitter,
    facebook,
    linkedin,
    youtube,
    instagram,
  } = formData;

  const onChange = (name, value) => setFormData({...formData, [name]: value});

  const onSubmit = async () => {
    const editing = !isCreatingProfile;
    await dispatch(createProfile(formData, editing)).then(() => {
      if (!editing) navigation.navigate('Dashboard');
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>
        {isCreatingProfile ? 'Create Your Profile' : 'Edit Your Profile'}
      </Text>
      <Text style={styles.required}>* = required field</Text>
      <View style={styles.formGroup}>
        <Text>Select Professional Status</Text>
        <RNPickerSelect
      value={status}
      style={{height: 40, borderColor: 'gray', borderWidth: 1, padding: 5}}
      onValueChange={(itemValue) => onChange('status', itemValue)}
      
      items={[
        { label: '* Select Professional Status', value: '' },
        { label: 'Developer', value: 'Developer' },
        { label: 'Junior Developer', value: 'Junior Developer' },
        { label: 'Senior Developer', value: 'Senior Developer' },
        { label: 'Manager', value: 'Manager' },
        { label: 'Student or Learning', value: 'Student or Learning' },
        { label: 'Instructor', value: 'Instructor or Teacher' },
        { label: 'Intern', value: 'Intern' },
        { label: 'Other', value: 'Other' },
      ]}
    />
        <Text style={styles.formText}>
          Give us an idea of where you are at in your career
        </Text>
      </View>
      <View style={styles.formGroup}>
      <Text>* </Text>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1, padding: 5}}
          placeholder="Company"
          value={company}
          onChangeText={value => onChange('company', value)}
        />
        <Text style={styles.formText}>
          Could be your own company or one you work for
        </Text>
      </View>

      <View style={styles.formGroup}>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1, padding: 5}}
          placeholder="Website"
          value={website}
          onChangeText={value => onChange('website', value)}
        />
        <Text style={{fontSize: 12, color: 'gray'}}>
          Could be your own or a company website
        </Text>
      </View>

      <View style={styles.formGroup}>
              <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1, padding: 5}}
          placeholder="Location"
          value={location}
          onChangeText={value => onChange('location', value)}
        />
        <Text style={{fontSize: 12, color: 'gray'}}>
          City & state suggested (eg. Accra, Kumasi)
        </Text>
      </View>

      <View style={styles.formGroup}>
        <Text>* </Text>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1, padding: 5}}
          placeholder="Skills"
          value={skills}
          onChangeText={value => onChange('skills', value)}
        />
        <Text style={{fontSize: 12, color: 'gray'}}>
          Please use comma-separated values (eg. HTML,CSS,JavaScript,PHP)
        </Text>
      </View>

      <View style={styles.formGroup}>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1, padding: 5}}
          placeholder="Github Username"
          value={githubusername}
          onChangeText={value => onChange('githubusername', value)}
        />
        <Text style={{fontSize: 12, color: 'gray'}}>
          If you want your latest repos and a Github link, include your username
        </Text>
      </View>

      <View style={styles.formGroup}>
        <TextInput
          style={{
            height: 80,
            borderColor: 'gray',
            borderWidth: 1,
            padding: 5,
            textAlignVertical: 'top',
          }}
          placeholder="Tell us a little about yourself"
          multiline
          value={bio}
          onChangeText={value => onChange('bio', value)}
        />
        <Text style={{fontSize: 12, color: 'gray'}}>
          Tell us a little about yourself
        </Text>
      </View>

      {/* ... other form elements ... */}

      <TouchableOpacity
        onPress={() => toggleSocialInputs(!displaySocialInputs)}
        style={styles.button}>
        <Text>Add Social Network Links (Optional)</Text>
      </TouchableOpacity>

      {displaySocialInputs && (
        <Fragment>
          <View style={styles.formGroup}>
            <Text>Twitter URL</Text>
            <TextInput
              style={styles.input}
              placeholder="Twitter URL"
              value={twitter}
              onChangeText={value => onChange('twitter', value)}
            />
          </View>

          <View style={styles.formGroup}>
            <Text>Facebook URL</Text>
            <TextInput
              style={styles.input}
              placeholder="Facebook URL"
              value={facebook}
              onChangeText={value => onChange('facebook', value)}
            />
          </View>

          <View style={styles.formGroup}>
            <Text>YouTube URL</Text>
            <TextInput
              style={styles.input}
              placeholder="YouTube URL"
              value={youtube}
              onChangeText={value => onChange('youtube', value)}
            />
          </View>

          <View style={styles.formGroup}>
            <Text>Linkedin URL</Text>
            <TextInput
              style={styles.input}
              placeholder="Linkedin URL"
              value={linkedin}
              onChangeText={value => onChange('linkedin', value)}
            />
          </View>

          <View style={styles.formGroup}>
            <Text>Instagram URL</Text>
            <TextInput
              style={styles.input}
              placeholder="Instagram URL"
              value={instagram}
              onChangeText={value => onChange('instagram', value)}
            />
          </View>
        </Fragment>
      )}
        <View style={styles.buttons}> 
      <TouchableOpacity onPress={onSubmit} style={styles.submitButton}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('Dashboard')}
        style={styles.goBackButton}>
        <Text style={styles.submitButtonText}>Go Back</Text>
      </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#17a2b8',
    marginBottom:10,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 10,
  },
  required: {
    fontSize: 12,
    marginBottom: 10,
  },
  formGroup: {
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 5,
  },
  formText: {
    fontSize: 12,
  },
  button: {
    backgroundColor: '#dedede',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    marginBottom:10,
  },
  submitButton: {
    backgroundColor: '#17a2b8',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginRight: 10,
    borderRadius: 5,
  },
  submitButtonText: {
    color: '#fff',
  },
  goBackButton: {
    backgroundColor: '#343a40',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttons:{
    flexDirection: 'row',
    marginTop: 20,

  }
});

export default ProfileForm;
