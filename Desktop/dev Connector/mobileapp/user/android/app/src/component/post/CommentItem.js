import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import formatDate from '../../utils/formatDate';
import { deleteComment } from '../../actions/post';

const CommentItem = ({
  postId,
  comment: { _id, text, name, avatar, user, date },
  auth,
  deleteComment,
}) => (
  <View style={styles.commentContainer}>
    <View style={styles.userInfo}>
      <TouchableOpacity onPress={() => console.log('Navigate to profile')}>
        <Image style={styles.avatar} source={{ uri: avatar }} />
        <Text style={styles.userName}>{name}</Text>
      </TouchableOpacity>
    </View>
    <View style={styles.commentContent}>
      <Text style={styles.commentText}>{text}</Text>
      <Text style={styles.postDate}>Posted on {formatDate(date)}</Text>
      {!auth.loading && user === auth.user._id && (
        <TouchableOpacity
          onPress={() => deleteComment(postId, _id)}
          style={styles.deleteButton}
        >
          <Text style={styles.deleteButtonText}>
            <i className="fas fa-times" />
          </Text>
        </TouchableOpacity>
      )}
    </View>
  </View>
);

CommentItem.propTypes = {
  postId: PropTypes.string.isRequired,
  comment: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  deleteComment: PropTypes.func.isRequired,
};

const styles = {
  commentContainer: {
    backgroundColor: '#fff',
    padding: 10,
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  userInfo: {},
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  userName: {
    marginTop: 5,
  },
  commentContent: {
    flex: 1,
    marginLeft: 10,
  },
  commentText: {
    marginBottom: 5,
  },
  postDate: {
    color: '#aaa',
    fontSize: 12,
    marginBottom: 5,
  },
  deleteButton: {
    backgroundColor: '#dc3545',
    padding: 10,
  },
  deleteButtonText: {
    color: '#fff',
    fontSize: 16,
  },
};



export default CommentItem;
