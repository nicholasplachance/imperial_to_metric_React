import React from 'react';
import "./select-category.style.css"

export const SelectCategory = props => {
	return (
		<div className="category-select">
			<label>Categories</label>
			<select name="category" onChange={props.categorySelect}>
				<option value=""></option>
				<option value="length">Length</option>
				<option value="mass">Mass</option>
			</select>
		</div>
	);
};
