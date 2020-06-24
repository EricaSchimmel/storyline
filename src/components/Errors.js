import React from "react";

const Errors = props => {
	const errors = props.errors.map((error, index) => {
		return <li key={index}>{error}</li>;
	});

	return <div id="errors-container">{errors}</div>;
};

export default Errors;
