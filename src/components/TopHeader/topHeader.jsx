

import React,{Component} from 'react'
import {NavLink} from 'react-router-dom'
import wyyx from './images/wangyiyanxuan.png'
import './topHeader.styl'

class TopHeader extends Component{
  render(){
    return(
      <header className="topHeader">
        <NavLink to="/home"><i className="iconfont icon-shouye"></i></NavLink>
        <img className="topImg" src={wyyx} alt=""></img>
        <span>
            <i className="iconfont icon-sousuo2"></i>
            <i className="iconfont icon-gouwuche3"></i>
        </span>
      </header>
    )
  }
}

export default TopHeader