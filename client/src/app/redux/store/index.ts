import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import appointmentReducer from '../reducers/appointmentReducer';
<<<<<<< HEAD
import modalReducer from '../reducers/modalReducer'; 

const rootReducer = combineReducers({
  appointments: appointmentReducer,
  modal: modalReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));
export type RootState = ReturnType<typeof rootReducer>;
=======

const rootReducer = combineReducers({
  appointments: appointmentReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));
>>>>>>> 7cd433964e8f32df8d371b29035755e2373f49dd

export default store;
