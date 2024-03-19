import React from 'react';
import { BrowserRouter as Router, Route , Routes} from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home';
import Profile from './Components/Profile';
import Influencers from './Components/Influencers';
import About from './Components/About';
import Contact from './Components/Contact';
import Feedback from './Components/Feedback';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/influencers" element={<Influencers />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/feedback" element={<Feedback />} />
      </Routes>
    </Router>
  );
}

export default App;