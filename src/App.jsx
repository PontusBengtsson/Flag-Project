import React, { useEffect } from 'react';
import HomePage from './pages/HomePage'; 

export default function App() {
  // UseEffect to scroll to top when app is loaded or reloaded
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); // This effect runs only once when the component is first loaded or reloaded

  return <HomePage />;
}
