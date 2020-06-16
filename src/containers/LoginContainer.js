import React, { Component } from "react";
class LoginContainer extends Component {
	constructor(props) {
		super(props);

		this.state = {
			email: "",
			password: "",
			errors: [],
		};
    }
    
    handleOnChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

	render() {
		return (
			<div id="login-container">
				<form onSubmit={this.handleOnSubmit}>
                    <label>Email</label></br>
                    <input type="email" id="email" onChange={this.handleOnChange} value={this.state.email}/></br>

                    <label>Password</label></br>
                    <input type="password" id="password" onChange={this.handleOnChange} value={this.state.password} /></br>
                </form>
			</div>
		);
	}
}

export default LoginContainer;
