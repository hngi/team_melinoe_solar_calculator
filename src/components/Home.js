import React from "react";
import { Link } from "react-router-dom";
import './Home.css'

class Home extends React.Component {
	render() {
		return (
			<div className="Home">
				<div className="main-wrap">
					<h1>Melineo Solar Calculator</h1>

					<h4 className="calc-text">
						Calculate how much solar power your home requires by just providing the amps
						and hours per day for each appliances
					</h4>

					<Link to="/calculator" class="get-started">
						Get Started
					</Link>
					<Link to="/register" class="get-started">
						Register as a technician
					</Link>
				</div>
			</div>
		);
	}
}

export default Home;