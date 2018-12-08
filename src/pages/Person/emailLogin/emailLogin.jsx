/**
 * Created by Administrator on 2018/12/6.
 */

import React,{Component} from 'react'
import yanxuan from '../images/yanxuan.png'
import './emailLogin.styl'


class EmailLogin extends Component{
  backPerson=()=>{
    this.props.history.goBack('/person')
  }
  
  render(){
    return(
      <div id="phoneLog">
        {/*图片logo*/}
        <div className="logo">
          <img src={yanxuan} alt=""></img>
        </div>
        {/*登录信息*/}
        <div className="loginInfo">
          <div className="username">
            <input type="text" placeholder="邮箱账号"></input>
          </div>
          <div className="message">
            <input type="text" placeholder="密码"></input>
          </div>
          <div className="pro_pwd">
            <div>注册账号</div>
            <div>忘记密码</div>
          </div>
        </div>
        {/*登录*/}
        <div className="login_reg">
          <div className="phone">
            <span>登录</span>
          </div >
          <div className="email" onClick={this.backPerson}>
          <span>其他登录方式</span>
        </div>
      </div>
  </div>
    )
  }
}

export default EmailLogin