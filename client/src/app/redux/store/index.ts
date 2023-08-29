import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import appointmentReducer from '../reducers/appointmentReducer';
import modalReducer from '../reducers/modalReducer'; 

const rootReducer = combineReducers({
  appointments: appointmentReducer,
  modal: modalReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));
export type RootState = ReturnType<typeof rootReducer>;

export default store;
