import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router';

import Home from '@Pages/home/index.jsx';
import MessageDetails from '@Pages/message-details/index.jsx';
import IndexLayout from '@Components/IndexLayout.jsx';

import 'bootstrap/dist/css/bootstrap.min.css';
import '@Styles/root.scss';

const App = function AppComponent() {
  return (
    <Router>
      <Routes>
        <Route element={<IndexLayout />}>
          <Route index element={<Home />} />

          <Route path="message/:id" element={<MessageDetails />} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
};

export default App;
