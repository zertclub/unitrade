import authreducer from './authreducer';
import transactionreducer from './transactionreducer';
import {combineReducers} from 'redux';
import {firestoreReducer} from 'redux-firestore';
import {firebaseReducer} from 'react-redux-firebase';



const rootreducer = combineReducers({
    auth:authreducer,
    transaction:transactionreducer,
    firestore:firestoreReducer,
    firebase:firebaseReducer
});
export default rootreducer