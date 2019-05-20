
import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import './firebase/firebase';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import {createStore, applyMiddleware,compose} from 'redux';
import rootreducer from './rootreducer';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {getFirestore,reduxFirestore} from 'redux-firestore';
import {getFirebase,reactReduxFirebase} from 'react-redux-firebase';
import fbconfig from './firebase/firebase';

const store=createStore(rootreducer,
    compose(
    applyMiddleware(thunk.withExtraArgument({getFirebase,getFirestore})),
    reduxFirestore(fbconfig),
    reactReduxFirebase(fbconfig,{useFirestoreForProfile:true ,userProfile: 'users',attachAuthIsReady:true})
    ));

store.firebaseAuthIsReady.then(()=>{
    ReactDOM.render(<Provider store={store}><AppRouter/></Provider>, document.getElementById('app'));
})

