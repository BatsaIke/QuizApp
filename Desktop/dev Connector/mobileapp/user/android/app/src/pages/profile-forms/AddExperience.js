import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import DateTimePicker from '@react-native-community/datetimepicker';
import Toast from 'react-native-toast-message';

import {addExperience} from '../../component/api/profileActions';
import {useDispatch} from 'react-redux';

const AddExperience = ({navigation}) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    company: '',
    title: '',
    location: '',
    from: new Date(),
    to:new Date(),
    current: false,
    description: '',
  });

  const { company, title, location, from, to, current, description } = formData;
  const [showDatePicker, setShowDatePicker] = useState(false);

  const onChange = (name, value) => {
    if (name === 'to') {
      value = new Date(value);
    }
    setFormData({ ...formData, [name]: value });
  };

  const handleDateChange = (event, newDate) => {
    setShowDatePicker(false);
    if (event.type === 'set') {
      onChange('from', newDate || new Date());
    }
  };

  const handleSubmit = async() => {
    
    await dispatch(addExperience(formData));
    Toast.show({
      type: 'success',
      text1: 'Success',
      text2: 'esperience Added successfully',
    })
    navigation.navigate('Dashboard');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.largeText}>Add An Experience</Text>
      <Text style={styles.leadText}>
        Add any developer/programming positions that you have had in the past
      </Text>
      <Text style={styles.smallText}>* = required field</Text>
      <View style={styles.form}>
        <View style={styles.formGroup}>
          <TextInput
            style={styles.input}
            placeholder="* Job Title"
            value={title}
            onChangeText={text => onChange('title', text)}
          />
        </View>
        <View style={styles.formGroup}>
          <TextInput
            style={styles.input}
            placeholder="* Company"
            value={company}
            onChangeText={text => onChange('company', text)}
          />
        </View>
        <View style={styles.formGroup}>
          <TextInput
            style={styles.input}
            placeholder="Location"
            value={location}
            onChangeText={text => onChange('location', text)}
          />
        </View>
        <View style={styles.formGroup}>
          <Text style={styles.label}>From Date</Text>
          <TouchableOpacity onPress={() => setShowDatePicker(true)}>
            <TextInput
              style={styles.input}
              placeholder="YYYY-MM-DD"
              value={from.toISOString().split('T')[0]}
              editable={false}
            />
          </TouchableOpacity>
          {showDatePicker && (
            <DateTimePicker
              value={from}
              mode="date"
              display="default"
              onChange={handleDateChange}
            />
          )}
        </View>
        <View style={styles.check}>
          <CheckBox
            disabled={false}
            value={current}
            onValueChange={newValue => onChange('current', newValue)}
          />
          <Text style={styles.label}>Current Job</Text>
        </View>
        
        <View style={styles.formGroup}>
        <Text style={styles.label}>To Date</Text>
        {current ? (
          <Text style={styles.input}>Current Job</Text>
        ) : (
          <TouchableOpacity onPress={() => setShowDatePicker(true)}>
            <TextInput
              style={styles.input}
              placeholder="YYYY-MM-DD"
              value={to.toISOString().split('T')[0]}
              editable={false}
            />
          </TouchableOpacity>
        )}
        {showDatePicker && (
          <DateTimePicker
            value={to}
            mode="date"
            display="default"
            onChange={handleDateChange}
          />
        )}
      </View>
        <View style={styles.formGroup}>
          <TextInput
            style={styles.textarea}
            placeholder="Job Description"
            multiline
            numberOfLines={5}
            value={description}
            onChangeText={text => onChange('description', text)}
          />
        </View>
        <TouchableOpacity style={styles.btnPrimary} onPress={handleSubmit}>
          <Text style={styles.btnText}>Submit</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btnLight}
          onPress={() => {
            navigation.navigate('Dashboard');
          }}>
          <Text style={styles.btnText}>Go Back</Text>
        </TouchableOpacity>
      </View>
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
    color: '#17a2b8',
    marginBottom: 10,
  },
  leadText: {
    fontSize: 18,
    color: '#333',
    marginBottom: 10,
  },
  smallText: {
    fontSize: 12,
    color: '#888',
  },

  formGroup: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 10,
    
  },
  textarea: {
    height: 80,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  btnPrimary: {
    backgroundColor: '#17a2b8',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  btnLight: {
    backgroundColor: '#f4f4f4',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  btnText: {
    color: '#333',
    fontSize: 16,
    fontWeight: 'bold',
  },
  check: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
});

export default AddExperience;
