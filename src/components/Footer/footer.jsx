/**
 * Created by Administrator on 2018/12/6.
 */

import React,{Component} from 'react'
import './footer.styl'
import {NavLink} from 'react-router-dom'


class Footer extends Component{
  
  
  render(){
    return(
      <footer id="footer">
        <NavLink className="item" to="/home">
          <i className="iconfont icon-shouye3"></i>
          <span>首页</span>
        </NavLink>
        <NavLink className="item" to="/thing">
          <i className="iconfont icon-wupin"></i>
          <span>识物</span>
        </NavLink>
        <NavLink className="item" to="/classify">
          <i className="iconfont icon-iconyihuifu-"></i>
          <span>分类</span>
        </NavLink>
        <NavLink className="item" to="/shopcart">
          <i className="iconfont icon-gouwuche"></i>
          <span>购物车</span>
        </NavLink>
        <NavLink className="item" to="/person">
          <i className="iconfont icon-gerenzhongxin"></i>
          <span>个人</span>
        </NavLink>
        </footer>
    )
  }
}

export default Footer