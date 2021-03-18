import React, { useState } from 'react';
import './SignIn.scss';
import FormInput from '../FormInput/FormInput';
import CustomButton from '../CustomButton/CustomButton';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils.js';

const initialState = {
    email: '',
    password: '',
};

const SignIn = () => {
    const [userCredentials, setCredentials] = useState(initialState);

    const { email, password } = userCredentials;

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await auth.signInWithEmailAndPassword(email, password);
            setCredentials(initialState);
        } catch (error) {
            console.log(error);
        }
        setCredentials(initialState);
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setCredentials({ ...userCredentials, [name]: value });
    };

    return (
        <div className="sign-in">
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    type="email"
                    name="email"
                    value={email}
                    handleChange={handleChange}
                    label="Email"
                    required
                />
                <FormInput
                    type="password"
                    name="password"
                    value={password}
                    handleChange={handleChange}
                    label="Password"
                    required
                />
                <div className="buttons">
                    <CustomButton type="submit">Sign in</CustomButton>
                    <CustomButton
                        type="button"
                        onClick={signInWithGoogle}
                        isGoogleSignIn
                    >
                        Sign in with Google
                    </CustomButton>
                </div>
            </form>
        </div>
    );
};

export default SignIn;
