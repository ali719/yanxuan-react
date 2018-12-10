/**
 * Created by Administrator on 2018/12/6.
 */

import React,{Component} from 'react'
import Swiper from 'swiper'
import './newItem.styl'

class Classify extends Component{
  
  componentDidMount(){
    new Swiper ('#new', {
      slidesPerView:2.5,
      spaceBetween :20
    })
  }
  
  render(){
    const {newItemList} = this.props
    return(
      <div className="newProduct">
        {/*标题导航*/}
        <div className="newTitle">
          <div className="text">新品首发</div>
          <div className="more">
            <span>查看全部<i className="iconfont icon-jiantou1"></i></span>
          </div>
        </div>
        {/*商品列表*/}
        <div className="swiper-container" id="new" >
          <div className="swiper-wrapper">
            {
              newItemList.map((newItem,index) =>{
                return(
                <div className="swiper-slide" key={index}>
                  <div className="liContent">
                    <img src={newItem.scenePicUrl} alt=""></img>
                    <span className="name ellipsis">{newItem.name}</span>
                    <span className="info ellipsis">{newItem.simpleDesc}</span>
                    <span className="price">￥{newItem.retailPrice}</span>
                  </div>
                </div>
                )
              })
            }
            
        </div>
          {/*如果需要分页器*/}
        <div className="swiper-pagination"></div>
      </div>
  </div>
    )
  }
}

export default Classify