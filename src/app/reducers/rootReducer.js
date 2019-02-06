import { combineReducers } from 'redux';
import testReducer from '../../features/testarea/testReducer';
import eventReducer from '../../features/event/eventReducer';
import { reducer as FormReducer } from 'redux-form'

const rootReducer = combineReducers({
    test: testReducer,
    form: FormReducer,
    events: eventReducer
})

export default rootReducer;
