import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter,Route,Switch} from 'react-router-dom';
import './assets/css/reset.css'
import './assets/stylus/mixins.styl'
import './assets/iconfont/iconfont.css'
import './rem'
import Home from './containers/home'
import Classify from './containers/classify'
import Thing from './containers/thing'
import ShopCart from './pages/ShopCart/shopcart'
import Person from './pages/Person/person'
import {Provider} from 'react-redux'
import store from './redux/store'

import './mock/mockServer'

ReactDOM.render(
  (
    <Provider store={store}>
      <HashRouter>
        <Switch>
          <Route path="/home" component={Home}/>
          <Route path="/thing" component={Thing}/>
          <Route path="/classify" component={Classify}/>
          <Route path="/shopcart" component={ShopCart}/>
          <Route path="/person" component={Person}/>
          <Route  component={Home}/>
        </Switch>
      </HashRouter>
    </Provider>
  )
  ,document.getElementById('root'));

