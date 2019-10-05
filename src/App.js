import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Home from './components/Home';
import Calculator from './components/Calculator'
import Register from './components/Register'

function App() {
  return (
		<Router>
			<div className="App">
			<Route path="/" exact component={Home} />
			<Route path="/calculator" exact component={Calculator} />
			<Route path="/register" exact component={Register} />
    </div>
		</Router>
    
  );
}

export default App;
