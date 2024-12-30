import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router';

import Home from '@Pages/home/index.jsx';
import MessageDetails from '@Pages/message-details/index.jsx';
import IndexLayout from '@Components/IndexLayout.jsx';
import iconLibrary from '@Lib/fontawesome/index.js';

import 'bootstrap/dist/css/bootstrap.min.css';
import '@Styles/root.scss';

// FontAwesome icon library.
iconLibrary.start();

const App = function AppComponent() {
  const routerBasePath = import.meta.env.BASE_URL;

  return (
    <Router basename={routerBasePath}>
      <Routes>
        <Route element={<IndexLayout />}>
          <Route path="/home" element={<Home />} />

          <Route path="message/:id" element={<MessageDetails />} />
        </Route>

        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </Router>
  );
};

export default App;
