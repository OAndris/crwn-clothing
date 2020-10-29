import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: 'AIzaSyAgVRm5r78Zsi2K87s1ADgjIgcP3wpW_YM',
    authDomain: 'crwn-db-b95f9.firebaseapp.com',
    databaseURL: 'https://crwn-db-b95f9.firebaseio.com',
    projectId: 'crwn-db-b95f9',
    storageBucket: 'crwn-db-b95f9.appspot.com',
    messagingSenderId: '539276911648',
    appId: '1:539276911648:web:f5ba659de14c6cfb3d8845',
    measurementId: 'G-ELSRHQ7675',
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData,
            });
        } catch (error) {
            console.log('Error creating user', error.message);
        }
    }

    return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
