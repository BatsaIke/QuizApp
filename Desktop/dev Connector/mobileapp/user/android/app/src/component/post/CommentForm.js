import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { addComment } from '../../actions/post';

const CommentForm = ({ postId, addComment }) => {
  const [text, setText] = useState('');

  const handleSubmit = () => {
    addComment(postId, { text });
    setText('');
  };

  return (
    <View style={styles.commentForm}>
      <View style={styles.bgPrimary}>
        <Text style={styles.heading}>Leave a Comment</Text>
      </View>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.textInput}
          placeholder='Comment the post'
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

CommentForm.propTypes = {
  addComment: PropTypes.func.isRequired,
  postId: PropTypes.string.isRequired,
};

const styles = {
  commentForm: {
    // Add styles for the comment-form container if needed
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

export default CommentForm;
