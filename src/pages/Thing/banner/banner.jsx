/**
 * Created by Administrator on 2018/12/6.
 */

import React,{Component} from 'react'
import Swiper from 'swiper'
import './banner.styl'

class Banner extends Component{
  
  componentDidMount(){
    new Swiper ('#thingBan', {
      loop: true, // 循环模式选项
      autoplay:true,
      slidesPerView:1.2,
      spaceBetween :15,
      centeredSlides:true
    })
  }
  
  render(){
    const {banner} = this.props
    return(
      <div className="swiper-container" id="thingBan">
        <div className="swiper-wrapper">
          {
            banner.map((ban,index) =>{
              return(
                <div className="swiper-slide" key={index}>
                  <img src={ban.picUrl} alt=""></img>
                  <div className="content">
                    <div className="headline">
                      <span className="line"></span>
                      <span className="text">{ban.subTitle}</span>
                      <span className="line"></span>
                    </div>
                    <span className="title">{ban.title}</span>
                    <span className="info">{ban.desc}</span>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
}

export default Banner