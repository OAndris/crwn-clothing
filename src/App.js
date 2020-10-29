import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import ShopPage from './pages/Shop/Shop';
import SignInAndSignUpPage from './pages/SignInAndSignUp/SignInAndSignUp';
import { auth } from './firebase/firebase.utils';

class App extends React.Component {
    state = {
        currentUser: null,
    };

    unsubscribeFromAuth = null;

    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
            this.setState({ currentUser: user });
        });
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {
        return (
            <div>
                <Header />
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/shop" component={ShopPage} />
                    <Route path="/signin" component={SignInAndSignUpPage} />
                </Switch>
            </div>
        );
    }
}

export default App;
