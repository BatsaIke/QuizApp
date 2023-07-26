// components/ProtectedRoute.js

import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const ProtectedRoute = ({ path, isLoggedIn, element }) => {
  return isLoggedIn ? (
    <Route path={path} element={element} />
  ) : (
    <Navigate to="/" replace />
  );
};

export default ProtectedRoute;
