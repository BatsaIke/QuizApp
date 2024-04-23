// // src/actions/auth.js
// import apiErrorHandler from '../../utils/apiErrorHandler';
// import {setAuthToken} from '../../utils/setAuthToken';
// import {setLoading, setToken, setUser} from '../redux/authSlice';
// import api from './api';

// export const loadUser = () => async dispatch => {
//   dispatch(setLoading(true));
//   try {
//     // Make the API request to fetch user data
//     const response = await api.get('/auth');
//     const userData = response.data;
//     console.log(userData, 'USER');
//     dispatch(setUser(userData));
//     dispatch(setLoading(false));
//   } catch (error) {
//     // Call the apiErrorHandler function to handle and display the error
//     apiErrorHandler(dispatch, error);

//     // You might dispatch an action to update your state with an error message
//     // dispatch(registerFailure(error.message));
//   }
// };

// export const register = formData => async dispatch => {
//   try {
//     // Make a POST request to the '/users' endpoint with the provided formData
//     const res = await api.post('/users', formData);
//     console.log('Response:', res.data);
//     const userData = res.data;
//   } catch (error) {
//     // Call the apiErrorHandler function to handle and display the error
//     apiErrorHandler(dispatch, error);
//   }
// };

// // apiActions.js
// export const signin = formData => async dispatch => {
//   try {
//     const res = await api.post('/auth', formData);
//     const token = res.data.token; // Access the token property in the response data
//     await dispatch(setToken(token));
//     await setAuthToken(token);
//    await dispatch(loadUser());
//   } catch (error) {
//     apiErrorHandler(dispatch, error);
//   }
// };



// src/actions/auth.js
import { setLoading, setUser, setToken } from '../redux/authSlice';
import apiErrorHandler from '../../utils/apiErrorHandler';
import setAuthToken from '../../utils/setAuthToken';
import api from './api';

// Action to load current user's data
export const loadUser = () => async dispatch => {
  dispatch(setLoading(true));
  try {
    const response = await api.get('/auth');
    dispatch(setUser(response.data));
    return { success: true };
  } catch (error) {
    apiErrorHandler(dispatch, error);
    return { success: false };
  } finally {
    dispatch(setLoading(false));
  }
};

// Action for user login
export const login = formData => async dispatch => {
  dispatch(setLoading(true));
  try {
    const response = await api.post('/auth', formData);
    const token = response.data.token;
    dispatch(setToken(token));
    setAuthToken(token);
    await dispatch(loadUser());
    return { success: true };
  } catch (error) {
    apiErrorHandler(dispatch, error);
    return { success: false };
  } finally {
    dispatch(setLoading(false));
  }
};

// Action for user registration
export const register = formData => async dispatch => {
  dispatch(setLoading(true));
  try {
    const response = await api.post('/users', formData);
    dispatch(setToken(response.data.token));
    setAuthToken(response.data.token);
    await dispatch(loadUser());
    return { success: true };
  } catch (error) {
    apiErrorHandler(dispatch, error);
    return { success: false };
  } finally {
    dispatch(setLoading(false));
  }
};

// Action for signing in the user
export const signin = formData => async dispatch => {
  dispatch(setLoading(true));
  try {
    const response = await api.post('/auth/', formData);
    const token = response.data.token;
    dispatch(setToken(token));
    setAuthToken(token);
    await dispatch(loadUser());
    return { success: true };
  } catch (error) {
    apiErrorHandler(dispatch, error);
    return { success: false };
  } finally {
    dispatch(setLoading(false));
  }
};
