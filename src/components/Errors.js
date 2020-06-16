import React from "react";

const Errors = props => {
	const errors = props.errors.map(error => {
		return <li>{error}</li>;
    });
    
    render() {
        return (
            <div id="errors-container">
                {errors}
            </div>
        );
    }
};

export default Errors;
