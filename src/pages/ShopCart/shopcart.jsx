/**
 * Created by Administrator on 2018/12/6.
 */

import React,{Component} from 'react'
import Footer from '../../components/Footer/footer'
import cart from './images/cart.png'
import './shopcart.styl'


class ShopCart extends Component{
  render(){
    return(
      <div id="shopCart">
        {/*头部*/}
        <header id="header">
          <div className="cart">购物车</div>
          <div className="info">
            <ul className="infoList">
              <li>30天无忧退货</li>
              <li>48小时快速退款</li>
              <li>满88元免邮费</li>
            </ul>
          </div>
        </header>
        <div className="cart_login">
          <img src={cart} alt=""></img>
            <span>去添加点什么吧</span>
            <div className="login">登录</div>
        </div>  
        <Footer/>
      </div>
    )
  }
}

export default ShopCart