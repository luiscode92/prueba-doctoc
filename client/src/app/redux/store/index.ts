import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import appointmentReducer from '../reducers/appointmentReducer';

const rootReducer = combineReducers({
  appointments: appointmentReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
