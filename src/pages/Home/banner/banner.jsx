/**
 * Created by Administrator on 2018/12/6.
 */

import React,{Component} from 'react'
import Swiper from 'swiper'
import PropTypes from 'prop-types'
import 'swiper/dist/css/swiper.min.css'
import './banner.styl'

class Banner extends Component{
  static propTypes = {
    banner:PropTypes.array.isRequired
  }
  componentDidMount(){
     new Swiper ('#banner', {
       loop: true, // 循环模式选项
       autoplay:true,//自动切换
       // 如果需要分页器
       pagination: {
         el: '.swiper-pagination',
       }
     })
  }
  
  
  render(){
    const {banner} = this.props
    return(
      <div className="swiper-container" id="banner">
        <div className="swiper-wrapper">
          {
            banner.map((ban,index) => {
              return (
                <div className="swiper-slide" key={index}>
                  <img src={ban.picUrl} alt=""/>
                </div>
              )
            })
          }
        </div>
        <div className="swiper-pagination"></div>
      </div>
    )
  }
}

export default Banner