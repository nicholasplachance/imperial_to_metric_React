import React from 'react';
import './input-card.style.css';
import { Input } from '../inputs/inputs.component';

export const InputCard = props => {
	return (
		<div className="form-card">
			{props.state[props.state.category].map(unit => {
				return (
					<Input key={unit.id} unit={unit} handleChange={props.handleChange} />
				);
			})}
		</div>
	);
};
