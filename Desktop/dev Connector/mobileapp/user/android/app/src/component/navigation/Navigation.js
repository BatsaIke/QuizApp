import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LandingPage from '../../pages/landingpage/LandingPage';
import Login from '../../pages/login/Login';
import Signup from '../../pages/register/Register';
import Header from '../header/Header';
import Toast from 'react-native-toast-message';
import Dashboard from '../../pages/dashboard/Dashboard';
import ProfileForm from '../../pages/profile-forms/ProfileForm';
import AddExperience from '../../pages/profile-forms/AddExperience';
import DashboardActions from '../../pages/dashboard/DashboardActions';
import AddEducation from '../../pages/profile-forms/AddEducation';
import Profiles from '../../pages/profiles/Profiles';
import Profile from '../../pages/profile/Profile';
import Posts from '../posts/Posts';
import { useDispatch, useSelector } from 'react-redux';
import { resetAuthState } from '../redux/authSlice';

const Stack = createNativeStackNavigator();

const NavigationContainerWrapper = () => {
  const [initialRouteName, setInitialRoute] = useState('LandingPage');
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  console.log(isAuthenticated,"authenticated YOO");

  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        const token = await AsyncStorage.getItem('authToken');
        const tokenExpiration = await AsyncStorage.getItem('tokenExpiration');
        const currentTimestamp = Date.now();

        if (token && tokenExpiration && parseInt(tokenExpiration) > currentTimestamp) {
          dispatch(setAuthToken(token));  // Setting token in Redux store
        } else {
          dispatch(resetAuthState());  // Clearing token from Redux store
          AsyncStorage.removeItem('authToken');
          AsyncStorage.removeItem('tokenExpiration');
        }
      } catch (error) {
        console.error('Error checking authentication:', error);
      }
    };

    checkAuthentication();
  }, [dispatch]);


  return (
    <>
      <NavigationContainer>
        <Header  isAuthenticated={isAuthenticated}/>
        <Stack.Navigator initialRouteName={isAuthenticated ? "Dashboard" : "LandingPage"}>
          <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
          <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }} />
          <Stack.Screen name="Dashboard" component={Dashboard} options={{ headerShown: false }} />
          <Stack.Screen name="ProfileForm" component={ProfileForm} options={{ headerShown: false }} />
          <Stack.Screen name="AddExperience" component={AddExperience}  />
          <Stack.Screen name="DashboadActions" component={DashboardActions} options={{ headerShown: false }} />
          <Stack.Screen name="AddEducation" component={AddEducation}  />
          <Stack.Screen name="Profiles" component={Profiles}options={{ headerShown: false }} />
          <Stack.Screen name="Profile" component={Profile}options={{ headerShown: false }} />
          <Stack.Screen name="Posts" component={Posts}options={{ headerShown: false }} />
          <Stack.Screen name="LandingPage" component={LandingPage}options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
      <Toast position='top'/>
    </>
  );
};

export default NavigationContainerWrapper;
