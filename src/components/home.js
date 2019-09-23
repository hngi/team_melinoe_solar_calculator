import React, { Component } from "react";


class Home extends Component {
	state = {
		values: [{ amps: "", hours: "" }],
		solarPanels:""
	};
	addNew = () => {
		this.setState(prevState => ({
			values: [...prevState.values, { amps: "", hours: "" }]
		}));
	};
	handleSubmit = e =>{
		e.preventDefault()
	}
	handleChange = e => {
		if(["amps" , "hours"].includes(e.target.className)){
			var values = [...this.state.values]
			values[e.target.dataset.id][e.target.className] = e.target.value;
			this.setState({values}, () =>{ let ampHr = this.state.values.reduce((total, current)=>total + (current.amps * current.hours), 0)
				let Wh = ampHr * 12;
				let watts = (Wh/6) * 0.2;
				let solarPanels = watts * 6;
				this.setState({solarPanels})
			})
			// this.setState({values}, () =>console.log(this.state.values))

		}
	
	};
	render() {
		return (
			<div>
				<h1>Check how much solar power you need</h1>
				{this.state.values.map((val, index) => {
					let ampsID = `amps-${index}` , hoursID = `hours-${index}`
					return (
						<form onSubmit={this.handleSubmit} onChange={this.handleChange} key={index}>
							<label htmlFor={ampsID}>Number of Amps</label>
							<input type="number" name={ampsID} id={ampsID} className="amps" data-id={index}/>
							<label htmlFor={hoursID}>Number of hours per day</label>
							<input type="number" name={hoursID} id={hoursID}className="hours" data-id={index} />
						</form>
					);
				})}
				<button onClick={this.addNew}>Add +</button>
				<p>{this.state.solarPanels ? `Number of solar power needed is = ${this.state.solarPanels}` : ""}</p>
			</div>
		);
	}
}
export default Home;
