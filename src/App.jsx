import React from 'react';
import { Navigate } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreatePost from './pages/createpost';
import Feed from './pages/feed';

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
           <Route path="/" element={<Navigate to="/feed" />} />
          <Route path='/create_post' element={<CreatePost />} />
          <Route path='/feed' element={<Feed/>} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
