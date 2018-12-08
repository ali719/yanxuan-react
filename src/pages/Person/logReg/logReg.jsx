/**
 * Created by Administrator on 2018/12/6.
 */

import React,{Component} from 'react'
import yanxuan from '../images/yanxuan.png'
import './logReg.styl'

class Person extends Component{
  
  emailLog=()=>{
    this.props.history.push('/person/email')
  }
  
  phoneLog=()=>{
    this.props.history.push('/person/phone')
  }
  
  render(){
    return(
      <div id="loginReg">
        {/*图片logo*/}
        <div className="logo">
          <img src={yanxuan} alt=""></img>
        </div>
        {/*登录*/}
        <div className="login_reg">
            <div className="phone" onClick={this.phoneLog}>
              <span>手机号码登录</span>
            </div >
            <div className="email" onClick={this.emailLog}>
              <span className="emailLog">邮箱账号登录</span>
            </div>
          <div className="register">
            <span>手机号快速注册<i className="iconfont icon-jiantou1"></i></span>
          </div>
        </div>
        {/*底部连接*/}
        <div className="footerLink">
          <div className="link">
            <span><i className="iconfont icon-weixin"></i>微信</span>
          </div>
          <div className="link">
            <span><i className="iconfont icon-qq"></i>QQ</span>
          </div>
          <div className="link">
            <span><i className="iconfont icon-weibo2"></i>微博</span>
          </div>
        </div>
      </div>
    )
  }
}

export default Person