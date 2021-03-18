import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import './App.css';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import ShopPage from './pages/ShopPage/ShopPage';
import SignInAndSignUpPage from './pages/SignInAndSignUp/SignInAndSignUp';
import CheckoutPage from './pages/Checkout/Checkout';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';

const App = ({ setCurrentUser, currentUser }) => {
    useEffect(() => {
        const unsubscribeFromAuth = auth.onAuthStateChanged(
            async (userAuth) => {
                if (userAuth) {
                    const userRef = await createUserProfileDocument(userAuth);
                    userRef.onSnapshot((snapShot) => {
                        setCurrentUser({
                            id: snapShot.id,
                            ...snapShot.data(),
                        });
                    });
                } else {
                    setCurrentUser(userAuth);
                }
            }
        );
        return () => {
            unsubscribeFromAuth();
        };
    }, [setCurrentUser]);

    return (
        <div>
            <Header />
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/shop" component={ShopPage} />
                <Route exact path="/checkout" component={CheckoutPage} />
                <Route
                    exact
                    path="/signin"
                    render={() =>
                        currentUser ? (
                            <Redirect to="/" />
                        ) : (
                            <SignInAndSignUpPage />
                        )
                    }
                />
            </Switch>
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
    setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
