import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { getGithubRepos } from '../../component/api/profileActions'; 
import { useDispatch, useSelector } from 'react-redux';
import { Linking } from 'react-native';

const ProfileGithub = ({ username }) => {
  const dispatch = useDispatch();
  const { repos } = useSelector((state) => state.profile);

  useEffect(() => {
    dispatch(getGithubRepos(username));
  }, [getGithubRepos, username]);

  return (
    <View style={styles.profileGithub}>
      <Text style={styles.textPrimary}>Github Repos</Text>
      {repos.map((repo) => (
        <View key={repo.id} style={styles.repo}>
          <TouchableOpacity
            style={styles.repoDetailsContainer}
            onPress={() => Linking.openURL(repo.html_url)}
          >
            <Text style={styles.repoName}>{repo.name}</Text>
            <Text style={styles.repoDescription} numberOfLines={3}>
              {repo.description}
            </Text>
          </TouchableOpacity>
          <View style={styles.repoDetails}>
            <Text style={styles.badgePrimary}>Stars: {repo.stargazers_count}</Text>
            <Text style={styles.badgeDark}>Watchers: {repo.watchers_count}</Text>
            <Text style={styles.badgeLight}>Forks: {repo.forks_count}</Text>
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  profileGithub: {
    padding: 10,
    backgroundColor: '#f4f4f4',
    borderRadius: 5,
    marginBottom: 10,
  },
  textPrimary: {
    color: '#17a2b8',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  repo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  repoDetailsContainer: {
    flex: 1,
  },
  repoName: {
    color: '#333',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  repoDescription: {
    color: '#555',
    fontSize: 14,
    marginBottom: 5,
  },
  repoDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  badgePrimary: {
    backgroundColor: '#17a2b8',
    color: '#fff',
    padding: 5,
    borderRadius: 5,
    marginRight: 5,
  },
  badgeDark: {
    backgroundColor: '#343a40',
    color: '#fff',
    padding: 5,
    borderRadius: 5,
    marginRight: 5,
  },
  badgeLight: {
    backgroundColor: '#f4f4f4',
    color: '#333',
    padding: 5,
    borderRadius: 5,
  },
});

export default ProfileGithub;