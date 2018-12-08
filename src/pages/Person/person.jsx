import React,{Component} from 'react'
import {Switch,Route,Redirect} from 'react-router-dom'
import TopHeader from '../../components/TopHeader/topHeader'
import LogReg from './logReg/logReg'
import PhoneLogin from './phoneLogin/phoneLogin'
import EmailLogin from './emailLogin/emailLogin'
import './person.styl'

class Person extends Component{
  render(){
    return(
      <div id="person">
        <TopHeader/>
          <Switch>
            <Route path="/person/logreg" component={LogReg}/>
            <Route path="/person/phone" component={PhoneLogin}/>
            <Route path="/person/email" component={EmailLogin}/>
            <Redirect to="/person/logreg" />
          </Switch>
      </div>
    )
  }
}

export default Person