import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import Toast from 'react-native-toast-message';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useDispatch } from 'react-redux';
import { addEducation } from '../../component/api/profileActions';

const AddEducation = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    school: '',
    degree: '',
    fieldofstudy: '',
    from: new Date(),
    to: new Date(),
    current: false,
    description: ''
  });

  const { school, degree, fieldofstudy, from, to, description, current } = formData;
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

  const onSubmit = async () => {
    await dispatch(addEducation(formData));
    Toast.show({
      type: 'success',
      text1: 'Success',
      text2: 'Education added successfully',
    });
    navigation.navigate('Dashboard');
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Add Your Education</Text>
      <Text style={styles.lead}>
        Add any school or bootcamp that you have attended
      </Text>
      <Text style={styles.small}>* = required field</Text>

      <View style={styles.form}>
        <View style={styles.formGroup}>
          <TextInput
            style={styles.input}
            placeholder="* School or Bootcamp"
            onChangeText={(text) => onChange('school', text)}
            value={school}
          />
        </View>

        <View style={styles.formGroup}>
          <TextInput
            style={styles.input}
            placeholder="* Degree or Certificate"
            onChangeText={(text) => onChange('degree', text)}
            value={degree}
          />
        </View>

        <View style={styles.formGroup}>
          <TextInput
            style={styles.input}
            placeholder="Field of Study"
            onChangeText={(text) => onChange('fieldofstudy', text)}
            value={fieldofstudy}
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

        <View style={styles.formGroup}>
          <TouchableOpacity
            onPress={() => onChange('current', !current)}
            style={styles.checkboxContainer}
          >
            <View style={styles.checkbox}>
              {current && <Text style={styles.checkboxText}>✓</Text>}
            </View>
            <Text style={styles.checkboxLabel}>Current School</Text>
          </TouchableOpacity>
        </View>

        {!current && (
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
        )}

        <View style={styles.formGroup}>
          <TextInput
            style={styles.textarea}
            placeholder="Program Description"
            multiline
            numberOfLines={5}
            onChangeText={(text) => onChange('description', text)}
            value={description}
          />
        </View>

        <TouchableOpacity onPress={onSubmit} style={styles.submitButton}>
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btnLight}
          onPress={() => {
            navigation.navigate('Dashboard');
          }}
        >
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
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#17a2b8',
    marginBottom: 10,
  },
  lead: {
    fontSize: 16,
    marginBottom: 10,
  },
  small: {
    fontSize: 12,
    marginBottom: 10,
  },
  form: {
    marginTop: 10,
  },
  formGroup: {
    marginBottom: 15,
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 5,
    borderColor: '#ccc',
    borderWidth: 1,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkboxText: {
    color: '#007bff',
  },
  checkboxLabel: {
    fontSize: 16,
  },
  textarea: {
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    height: 100,
    textAlignVertical: 'top',
  },
  submitButton: {
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
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  btnText: {
    color: '#333',
    fontSize: 16,
  },
});

export default AddEducation;
