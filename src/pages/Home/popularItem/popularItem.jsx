/**
 * Created by Administrator on 2018/12/6.
 */

import React,{Component} from 'react'
import Swiper from 'swiper'
import './popularItem.styl'

class PopularItem extends Component{
  
  componentDidMount(){
    new Swiper ('#popular', {
      slidesPerView:2.5,
      spaceBetween :20
    })
  }
  
  render(){
    const {poplist} = this.props
    return(
      <div className="newProduct">
        {/*标题导航*/}
        <div className="newTitle">
          <div className="text">人气推荐，精选好货</div>
          <div className="more">
            <span>查看全部<i className="iconfont icon-jiantou1"></i></span>
          </div>
        </div>
        {/*商品列表*/}
        <div className="swiper-container" id="popular" >
          <div className="swiper-wrapper">
            {
              poplist.map((popItem,index) =>{
                return(
                  <div className="swiper-slide" key={index}>
                    <div className="liContent">
                      <img src={popItem.scenePicUrl} alt=""></img>
                      <span className="name ellipsis">{popItem.name}</span>
                      <span className="info ellipsis">{popItem.simpleDesc}</span>
                      <span className="price">￥{popItem.retailPrice}</span>
                    </div>
                  </div>
                )
              })
            }
        </div>
        <div className="swiper-pagination"></div>
      </div>
  </div>
    )
  }
}

export default PopularItem