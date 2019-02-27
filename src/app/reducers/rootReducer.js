import { combineReducers } from 'redux';
import testReducer from '../../features/testarea/testReducer';
import eventReducer from '../../features/event/eventReducer';
import { reducer as FormReducer } from 'redux-form'
import modalsReducer from '../../features/modals/modalsReducer';
import authReducer from '../../features/auth/authReducer';
import asyncReducer from '../../features/async/asyncReducer';
import { reducer as toastrReducer } from 'react-redux-toastr'
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';


const rootReducer = combineReducers({
    test: testReducer,
    form: FormReducer,
    events: eventReducer,
    modals: modalsReducer,
    auth: authReducer,
    async: asyncReducer,
    toastr: toastrReducer,
    firebase: firebaseReducer,
    firestore: firestoreReducer
})

export default rootReducer;
