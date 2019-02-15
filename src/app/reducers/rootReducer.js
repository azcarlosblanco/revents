import { combineReducers } from 'redux';
import testReducer from '../../features/testarea/testReducer';
import eventReducer from '../../features/event/eventReducer';
import { reducer as FormReducer } from 'redux-form'
import modalsReducer from '../../features/modals/modalsReducer';
import authReducer from '../../features/auth/authReducer';

const rootReducer = combineReducers({
    test: testReducer,
    form: FormReducer,
    events: eventReducer,
    modals: modalsReducer,
    auth: authReducer
})

export default rootReducer;
