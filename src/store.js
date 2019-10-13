import firebase from 'firebase';
import {createStore, combineReducers, compose} from 'redux';
import {reactReduxFirebase, firebaseReducer} from 'react-redux-firebase';
import {reduxFirestore, firestoreReducer} from 'redux-firestore';

const firebaseConfig={
    apiKey: "AIzaSyAKaIc-e5831jIAz0L2YOwo5gD3-4UQmPk",
    authDomain: "spis-projektow.firebaseapp.com",
    databaseURL: "https://spis-projektow.firebaseio.com",
    projectId: "spis-projektow",
    storageBucket: "spis-projektow.appspot.com",
    messagingSenderId: "574410061181",
    appId: "1:574410061181:web:fd5fc5ae86813932"
};
//ustawienia react-redux-firebase
const rrfConfig={
    userProfile:'users',
    userFireStoreProfile: true
};
firebase.initializeApp(firebaseConfig);
const firestore=firebase.firestore();
const settings={timestampsInSnapshots: true};
firestore.settings(settings);

const createStoreWithFirebase=compose(
    reactReduxFirebase(firebase, rrfConfig),
    reduxFirestore(firebase)
)(createStore);
const rootReducer=combineReducers({
    firebase:firebaseReducer,
    firestore:firestoreReducer
});
const initialState={};

const store=createStoreWithFirebase(rootReducer, initialState, compose(reactReduxFirebase(firebase),
    ));

export default store;