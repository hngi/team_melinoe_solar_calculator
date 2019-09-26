import React from "react";
import { Link } from "react-router-dom";
import './Home.css'

class Home extends React.Component {
	render() {
		return (
			<div className="Home">
				<div class="main-wrap">
					<h1>Melineo Solar Calculator</h1>

					<h4 class="calc-text">
						Calculate how much solar power your home requires by just providing the amps
						and hours per day for each appliances
					</h4>

					<Link to="/Calculator" class="get-started">
						Get Started
					</Link>
				</div>
			</div>
		);
	}
}

export default Home;
