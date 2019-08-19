import React from 'react'
import {Switch, Route } from 'react-router-dom';
import Movies from './pages/Movies'
import Info from './pages/Info'
import {Provider} from 'react-redux'
import store from './Store/storeConfig'

function Routes(){
  return(
    <Provider store={store}>
      <Switch>
        <Route path="/" exact component={Movies}/>
        <Route path="/info" exact component={Info}/>
      </Switch>
    </Provider>
  );
}
export default Routes;