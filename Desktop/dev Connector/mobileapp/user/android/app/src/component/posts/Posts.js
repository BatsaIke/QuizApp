import React, { useEffect } from 'react';
import { View, Text, ScrollView } from 'react-native';
import PostItem from './PostItem';
import PostForm from './PostForm';
import { getPostsAction } from '../api/postActions';
import { useDispatch, useSelector } from 'react-redux';

const Posts = () => {

  const {posts}= useSelector((state)=>(state.post))
  console.log(posts,"THe paosts")
  const dispatch = useDispatch()
 
  let fetchData=async()=>{
    try {
      await dispatch(getPostsAction());
    } catch (error) {
      
    }
  }
 
  useEffect(() => {
  fetchData()
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Posts</Text>
      <Text style={styles.lead}>
        <Text>Welcome to the community</Text>
      </Text>
      <PostForm />
      <ScrollView style={styles.postsContainer}>
        {posts.map((post) => (
          <PostItem key={post._id} post={post} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = {
  container: {
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#17a2b8',
  },
  lead: {
    fontSize: 16,
    marginTop: 10,
    marginBottom: 20,
  },
  postsContainer: {
    marginTop: 10,
  },
};


export default Posts;
