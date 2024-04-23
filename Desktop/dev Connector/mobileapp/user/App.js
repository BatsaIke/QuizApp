import React, { useEffect } from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import NavigationContainerWrapper from './android/app/src/component/navigation/Navigation.js';
import { Provider } from 'react-redux';
import store from './android/app/src/component/redux/store.js';
import { setAuthToken } from './android/app/src/utils/setAuthToken.js';
import { loadUser } from './android/app/src/component/api/apiActions.js';
import AsyncStorage from '@react-native-async-storage/async-storage';

function App() {


  
  useEffect(() => {
    // Check for token on page load
    const checkTokenAndLoadUser = async () => {
      try {
        const token = await AsyncStorage.getItem('token');
        if (token) {
          // Set the token for API requests
          setAuthToken(token);
          // Load user data
          store.dispatch(loadUser());
          
        }
      } catch (error) {
        console.error('Error checking token:', error);
      }
    };

    checkTokenAndLoadUser();
  }, []);


  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <StatusBar />
        <NavigationContainerWrapper />
        {/* <TestComponent/> */}
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
