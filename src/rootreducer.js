import authreducer from './authreducer';
import transactionreducer from './transactionreducer';
import {combineReducers} from 'redux';
import {firestoreReducer} from 'redux-firestore';
import {firebaseReducer} from 'react-redux-firebase';
import pricereducer from './pricereducer';


const rootreducer = combineReducers({
    auth:authreducer,
    transaction:transactionreducer,
    firestore:firestoreReducer,
    firebase:firebaseReducer,
    price:pricereducer
});
export default rootreducer