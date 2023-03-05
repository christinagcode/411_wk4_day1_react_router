import React from 'react';
import Navigation from './components/Navigation';
import Router from './Router';
import './App.css'
// Write imports for Router & BrowserRouter here //

function App(props) {
  console.log(props);
    return (
  <Router>
    <Navigation />
    </Router>
    );
}

export default App;
