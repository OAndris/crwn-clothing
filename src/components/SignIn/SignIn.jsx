import React from 'react';

import './SignIn.scss';
import FormInput from '../FormInput/FormInput';
import CustomButton from '../CustomButton/CustomButton';
import { signInWithGoogle } from '../../firebase/firebase.utils.js';

const initialState = {
    email: '',
    password: '',
};

class SignIn extends React.Component {
    state = initialState;

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState(initialState);
    };

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    render() {
        return (
            <div className="SignIn">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        type="email"
                        name="email"
                        value={this.state.email}
                        handleChange={this.handleChange}
                        label="Email"
                        required
                    />
                    <FormInput
                        type="password"
                        name="password"
                        value={this.state.password}
                        handleChange={this.handleChange}
                        label="Password"
                        required
                    />
                    <CustomButton type="submit">Sign in</CustomButton>
                    <CustomButton onClick={signInWithGoogle}>
                        Sign in with Google
                    </CustomButton>
                </form>
            </div>
        );
    }
}

export default SignIn;
