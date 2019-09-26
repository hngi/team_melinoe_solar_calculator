import React from "react";
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

					<a href="./Calculator.js" class="get-started">
						Get Started
					</a>
				</div>
			</div>
		);
	}
}

export default Home;
