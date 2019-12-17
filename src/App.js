import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { InputCard } from './components/input-card/input-card.component';
import { SelectCategory } from './components/category-select/select-category.component';

class App extends Component {
	constructor() {
		super();

		this.state = {
			length: [
				{ id: 1, name: 'feet' },
				{ id: 2, name: 'miles' },
				{ id: 3, name: 'meters' },
				{ id: 4, name: 'kilometers' }
			],
			mass: [
				{ id: 1, name: 'pound' },
				{ id: 2, name: 'US-ton' },
				{ id: 3, name: 'gram' },
				{ id: 4, name: 'kilogram' }
			],
			category: ''
		}
	}

	feetConversion = (array, num) => {
		array[0].value = num / 5280
		array[1].value = num / 3.281
		array[2].value = num / 3281
	}

	mileConversion = (array, num) => {
		array[0].value = num * 5280
		array[1].value = num * 1609.34
		array[2].value = num * 1.609
	}

	meterConversion = (array, num) => {
		array[0].value = num * 3.281
		array[1].value = num / 1609.34
		array[2].value = num / 1000
	}

	kilometerConversion = (array, num) => {
		array[0].value = num * 3281
		array[1].value = num / 1.609
		array[2].value = num * 1000
	}

	poundConversion = (array, num) => {
		array[0].value = num / 2000
		array[1].value = num * 454
		array[2].value = num / 2.205
	}

	usTonConversion = (array, num) => {
		array[0].value = num * 2000
		array[1].value = num * 907185
		array[2].value = num / 907
	}

	gramConversion = (array, num) => {
		array[0].value = num / 454
		array[1].value = num / 907185
		array[2].value = num / 1000
	}

	kilogramConversion = (array, num) => {
		array[0].value = num * 2.205
		array[1].value = num / 907
		array[2].value = num * 1000
	}

	handleChange = e => {
		const feet = document.querySelector("#feet")
		const miles = document.querySelector("#miles")
		const meters = document.querySelector("#meters")
		const kilometers = document.querySelector("#kilometers")
		const pound = document.querySelector("#pound")
		const ton = document.querySelector("#US-ton")
		const gram = document.querySelector("#gram")
		const kilogram = document.querySelector("#kilogram")

		if (e.target.id === 'feet') {
			this.feetConversion([miles, meters, kilometers], e.target.value)
		}
		if (e.target.id === 'miles') {
			this.mileConversion([feet, meters, kilometers], e.target.value)
		}
		if (e.target.id === 'meters') {
			this.meterConversion([feet, miles, kilometers], e.target.value)
		}
		if (e.target.id === 'kilometers') {
			this.kilometerConversion([feet, miles, meters], e.target.value)
		}
		if (e.target.id === 'pound') {
			this.poundConversion([ton, gram, kilogram], e.target.value)
		}
		if (e.target.id === 'US-ton') {
			this.usTonConversion([pound, gram, kilogram], e.target.value)
		}
		if (e.target.id === 'gram') {
			this.poundConversion([pound, ton, kilogram], e.target.value)
		}
		if (e.target.id === 'kilogram') {
			this.poundConversion([pound, ton, gram], e.target.value)
		}
	};

	categorySelect = e => {
		const categories = document.querySelectorAll('option');
		console.log(e.target.value);
		this.setState({ category: e.target.value });
	};

	resetCategory = () => {
		this.setState({ category: '' });
	};

	render() {
		if (this.state.category === '') {
			return (
				<div className="App">
					<div className="App-header">
						<div>
							<img src={logo} className="App-logo" alt="logo" />
							<p>Imperial to Metric React App</p>
						</div>
						<div>
							<SelectCategory categorySelect={this.categorySelect} />
						</div>
					</div>
				</div>
			);
		}

		return (
			<div className="App">
				<div className="App-header">
					<div>
						<img src={logo} className="App-logo" alt="logo" />
						<p>Imperial to Metric React App</p>
						<InputCard state={this.state} handleChange={this.handleChange} />
						{console.log(document.querySelectorAll('input'))}
					</div>
					<button className="reset-button" onClick={this.resetCategory}>Category Select</button>
				</div>
			</div>
		);
	}
}

export default App;
