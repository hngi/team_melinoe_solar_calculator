import React, { Component } from "react";
import "./Calculator.css";

class Home extends Component {
	state = {
		values: [{ amps: "", hours: "" }],
		solarPanels: ""
	};
	addNew = () => {
		this.setState(prevState => ({
			values: [...prevState.values, { amps: "", hours: "" }]
		}));
	};
	handleSubmit = e => {
		e.preventDefault();
	};
	handleChange = e => {
		if (["amps", "hours"].includes(e.target.className)) {
			var values = [...this.state.values];
			values[e.target.dataset.id][e.target.className] = e.target.value;
			this.setState({ values }, () => {
				let ampHr = this.state.values.reduce(
					(total, current) => total + current.amps * current.hours,
					0
				);
				let Wh = ampHr * 12;
				let watts = (Wh / 6) * 0.2;
				let solarPanels = watts * 6;
				this.setState({ solarPanels });
			});
			// this.setState({values}, () =>console.log(this.state.values))
		}
	};
	render() {
		return (
			<div className="Calculator">
				<header class="header">
					<h1>Melinoe Solar Calculator</h1>
				</header>
				<div class="wrapper">
					<div class="forms">
						<div class="forms_heading">
							<h1 class="forms_heading--primary">Calculate here</h1>
							<p class="forms_heading--secondary">Kindly fill in the below fields</p>
							<p>
							{this.state.solarPanels
								? `Number of solar power needed is = ${this.state.solarPanels} WH`
								: ""}
						</p>
						</div>
						{this.state.values.map((val, index) => {
							let ampsID = `amps-${index}`,
								hoursID = `hours-${index}`;
							return (
								<form
									onSubmit={this.handleSubmit}
									onChange={this.handleChange}
									key={index}
								>
									<input
										type="number"
										placeholder="Number of amps"
										name={ampsID}
										id={ampsID}
										className="amps"
										data-id={index}
									/>
									<input
										type="number"
										placeholder="Number of hours (per day)"
										name={hoursID}
										id={hoursID}
										className="hours"
										data-id={index}
										max="24" 
									/>
								</form>
							);
						})}
						<button onClick={this.addNew}>Add Appliance <span className="pill-btn">+</span></button>
						
					</div>
				</div>
			</div>
		);
	}
}
export default Home;
