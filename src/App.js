import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Feature from "./components/Feature/index";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" strict component={Feature} />
      </Router>
    </div>
  );
}

export default App;
