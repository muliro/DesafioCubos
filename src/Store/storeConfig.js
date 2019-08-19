import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunkMiddlware from 'redux-thunk';
import moviesReducer from './reducers/reducers';
// import selecionadoReducer from './reducers/selecionado'
import currentPageReducer from './reducers/currentPage'
const reducers = combineReducers({
  moviesReducer: moviesReducer,
  // selecionadoReducer:selecionadoReducer,
  currentPage: currentPageReducer
});


const store = createStore(
  reducers,
  undefined,
  compose(
    applyMiddleware(
      thunkMiddlware,
    )
  )
);

export default store;