import React from 'react';
import './inputs.style.css';

export const Input = props => {
	return (
		<div className="form" key={props.unit.id}>
			<label>{props.unit.name}</label>
			<input
				id={props.unit.name}
				placeholder={props.unit.name}
				type="number"
				onChange={props.handleChange}
			></input>
		</div>
	);
};
