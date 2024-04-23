import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { addPostAction } from '../api/postActions';
import { useDispatch } from 'react-redux';

const PostForm = () => {
  const dispatch = useDispatch()
  const [text, setText] = useState('');

  const handleSubmit = async() => {
    await dispatch(addPostAction({ text }));
    setText('');
  };

  return (
    <View style={styles.postForm}>
      <View style={styles.bgPrimary}>
        <Text style={styles.heading}>Create a project...</Text>
      </View>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.textInput}
          placeholder='Enter project details'
          value={text}
          onChangeText={(value) => setText(value)}
          multiline={true}
        />
        <TouchableOpacity onPress={handleSubmit} style={styles.submitButton}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = {
  postForm: {
    // Add styles for the post-form container if needed
  },
  bgPrimary: {
    backgroundColor: '#17a2b8',
    padding: 10,
    marginBottom: 10,
  },
  heading: {
    color: '#fff',
    fontSize: 18,
  },
  formContainer: {
    // Add styles for the form container if needed
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
  },
  submitButton: {
    backgroundColor: '#343a40',
    padding: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
};

export default PostForm
