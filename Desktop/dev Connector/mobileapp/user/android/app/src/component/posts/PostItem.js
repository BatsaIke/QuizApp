import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { addLike, removeLike, deletePostAction } from '../api/postActions'; 
import formatDate from '../../utils/formatDate';
import { useDispatch, useSelector } from 'react-redux';

const PostItem = ({ post }) => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth);
  const { _id, text, name, avatar, user, likes, comments, date } = post;
  const avatarUrl = `https:${avatar}`;

  const handleAddLike = async () => {
    await dispatch(removeLike(_id));
  };

  const handleRemoveLike = async () => {
    await dispatch(addLike(_id));
  };

  const handleDeletePost = async () => {
    await dispatch(deletePostAction(_id));
  };

  return (
    <View style={styles.postContainer}>
      <View style={styles.userInfo}>
        <TouchableOpacity onPress={() => console.log('Navigate to profile')}>
          <Image style={styles.avatar} source={{ uri: avatarUrl }} />
          <Text style={styles.userName}>{name}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.postContent}>
        <Text style={styles.postText}>{text}</Text>
        <Text style={styles.postDate}>Posted on {formatDate(date)}</Text>

        <TouchableOpacity onPress={handleAddLike} style={styles.likeButton}>
          <Text>
            {/* Use an appropriate icon or text for the like button */}
            Like {likes.length > 0 && likes.length}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleRemoveLike} style={styles.likeButton}>
          <Text>
            {/* Use an appropriate icon or text for the unlike button */}
            Unlike
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => console.log('Navigate to discussion')}
          style={styles.discussionButton}
        >
          <Text>
            Discussion{' '}
            {comments.length > 0 && (
              <Text style={styles.commentCount}>{comments.length}</Text>
            )}
          </Text>
        </TouchableOpacity>
        {!isAuthenticated.loading && user === isAuthenticated.user._id && (
          <TouchableOpacity onPress={handleDeletePost} style={styles.deleteButton}>
            <Text>
              {/* Use an appropriate icon or text for the delete button */}
              Delete
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = {
  postContainer: {
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
  postContent: {
    flex: 1,
    marginLeft: 10,
  },
  postText: {
    marginBottom: 5,
  },
  postDate: {
    color: '#aaa',
    fontSize: 12,
    marginBottom: 5,
  },
  likeButton: {
    backgroundColor: '#f4f4f4',
    padding: 5,
    marginRight: 5,
  },
  discussionButton: {
    backgroundColor: '#17a2b8',
    padding: 5,
    marginRight: 5,
  },
  commentCount: {
    backgroundColor: '#f4f4f4',
    color: '#333',
    padding: 2,
    borderRadius: 5,
    marginLeft: 5,
  },
  deleteButton: {
    backgroundColor: '#dc3545',
    padding: 5,
  },
};

export default PostItem
