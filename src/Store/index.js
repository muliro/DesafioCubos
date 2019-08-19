import { createStore, applyMiddleware } from 'redux';
// import createSagaMiddleware from 'redux-saga'
// import rootReducer from './rootReducer';
const logger = store => next => action => {
  let result;
  console.groupCollapsed("dispatching", action.type);
  console.log('prev state: ', store.getState());
  console.log('action', action);
  result = next(action);
  console.log('next state', store.getState());
  console.groupEnd();
  return result;
};