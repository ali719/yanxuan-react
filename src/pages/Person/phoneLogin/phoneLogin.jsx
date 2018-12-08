/**
 * Created by Administrator on 2018/12/6.
 */

import React,{Component} from 'react'
import yanxuan from '../images/yanxuan.png'
import './phoneLogin.styl'


class PhoneLogin extends Component{
  
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
            <input  type="text" placeholder="请输入手机号" ></input>
          </div>
          <div className="message">
            <input type="text" placeholder="请输入短信验证码"></input>
            <button  className="msg" > 获取验证码</button>
          </div>
          <div className="pro_pwd">
            <div>遇到问题？</div>
            <div>使用密码登录</div>
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
    <div className="register">
      <span>注册账号<i className="iconfont icon-jiantou1"></i></span>
    </div>
  </div>
  </div>
    )
  }
}

export default PhoneLogin