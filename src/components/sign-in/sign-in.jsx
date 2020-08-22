import React from 'react';

import './sign-in.scss';
import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';

const initialState = {
    email: '',
    password: ''
};

class SignIn extends React.Component {
    state = initialState;

    handleSubmit = event => {
        event.preventDefault();
        this.setState(initialState);
    }

    handleChange = event => {
        const {name, value} = event.target;
        this.setState({ [name]: value });
    }

    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput type="email" name="email" value={this.state.email} handleChange={this.handleChange} label="Email" required />
                    <FormInput type="password" name="password" value={this.state.password} handleChange={this.handleChange} label="Password" required />
                    <CustomButton type="submit">Sign In</CustomButton>
                </form>
            </div>
        )
    }
};

export default SignIn;
