import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BirthdayGreeting from './components/BirthdayGreeting.tsx';
import Surprise from './components/Surprise.tsx';
import Message from './components/Message.tsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BirthdayGreeting />} />
        <Route path="/surprise" element={<Surprise />} />
        <Route path="/message" element={<Message />} />
      </Routes>
    </Router>
  );
}

export default App;
