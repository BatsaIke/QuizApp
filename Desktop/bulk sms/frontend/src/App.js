import React, { useEffect } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Dashboard from './component/dash-board/Dashboard';
import MessageDetails from './pages/view-data/MessageDetails';
import Contacts from './pages/contacts/Contacts';
import Sidebar from './component/dash-board/side-bar/Sidebar';
import MainDashboard from './component/main-dashboard/MainDashboard';
import AuthPage from './pages/auth-page/AuthPage';
import './App.css';
import Alert from './UI/alert/Alert';
import setAuthToken from './utils/setAuthToken';
import { getLoginUser } from './actions/authAction';
import { useDispatch } from 'react-redux';
import UserProfile from './component/dash-board/user-profile/Userprofile';
import Scheduler from './pages/schedular/Schedular';
import ContactsGroups from './pages/contacts/ContactGroup';

function App() {
  
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setAuthToken(token); // Set auth token header auth
      dispatch(getLoginUser()); // Attempt to fetch user
    }
  }, [dispatch]);

  const shouldDisplaySidebar = () => {
    return location.pathname !== "/";
  };

  return (
    <div className="container">
      <Alert/>
      {shouldDisplaySidebar() && <Sidebar />}
      <Routes>
        <Route path="/" element={<AuthPage />} />
        <Route path="/message/:id" element={<MessageDetails />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/report" element={<Dashboard />} />
        <Route path="/dashboard" element={<MainDashboard />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/schedular" element={<Scheduler/>} />
        <Route path="/contact-group" element={<ContactsGroups/>} />


      </Routes>
    </div>
  );
}


export default App;
