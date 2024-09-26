import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Page0 from './pages/Page0';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
import Page4 from './pages/Page4';


import { AnimatePresence } from 'framer-motion';  // Import AnimatePresence

function AnimatedRoutes() {
  const location = useLocation();  // Get the current location for route transitions

  return (
    <AnimatePresence initial={false} mode='wait'>
      {/* AnimatePresence should wrap the Routes to animate between different pages */}
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<App />} />
        <Route path="/page0" element={<Page0 />} />
        <Route path="/page1" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
        <Route path="/page3" element={<Page3 />} />
        <Route path="/page4" element={<Page4 />} />
      </Routes>
    </AnimatePresence>
  );
}




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <AnimatedRoutes />  {/* Use AnimatedRoutes for routing */}
  </Router>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
