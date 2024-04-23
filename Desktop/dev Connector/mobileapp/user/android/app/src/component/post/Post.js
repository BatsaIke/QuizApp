import React, { useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Spinner } from '../../layout/Spinner';
import PostItem from '../posts/PostItem';
import CommentForm from './CommentForm';
import CommentItem from './CommentItem';
import { getPost } from '../../actions/post';

const Post = ({ getPost, post: { post, loading } }) => {
  const { id } = useParams();
  useEffect(() => {
    getPost(id);
  }, [getPost, id]);

  return loading || post === null ? (
    <Spinner />
  ) : (
    <ScrollView style={styles.container}>
      <TouchableOpacity onPress={() => console.log('Navigate to posts')}>
        <Text style={styles.backButton}>Back To Posts</Text>
      </TouchableOpacity>
      <PostItem post={post} showActions={false} />
      <CommentForm postId={post._id} />
      <View style={styles.commentsContainer}>
        {post.comments.map((comment) => (
          <CommentItem key={comment._id} comment={comment} postId={post._id} />
        ))}
      </View>
    </ScrollView>
  );
};

const styles = {
  container: {
    padding: 20,
  },
  backButton: {
    fontSize: 16,
    color: '#007bff',
    marginBottom: 10,
  },
  commentsContainer: {
    marginTop: 10,
  },
};



export default Post
