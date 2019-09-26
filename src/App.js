import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Home from './components/Home';
import Calculator from './components/Calculator'

function App() {
  return (
		<Router>
			<div className="App">
			<Route path="/" exact component={Home} />
			<Route path="/calculator" exact component={Calculator} />
    </div>
		</Router>
    
  );
}

export default App;
