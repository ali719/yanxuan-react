/**
 * Created by Administrator on 2018/12/6.
 */

import React,{Component} from 'react'
import Swiper from 'swiper'
import './topicList.styl'

class TopicList extends Component{
  componentDidMount(){
    new Swiper ('#special', {
      slidesPerView:1.15,
      spaceBetween :10
    })
  }
  render(){
    const {topiclist} = this.props
    return(
      <div className="special">
        <div className="specialTitle">
          <span>专题精选  <i className="iconfont icon-chakangengduochanpin"></i></span>
        </div>
        {/*专题图片列表*/}
        <div className="swiper-container" id="special">
          <div className="swiper-wrapper">
            {
              topiclist.map((topItem,index) =>{
                return(
                  <div className="swiper-slide" key={index}>
                    <img src={topItem.scenePicUrl} alt=""></img>
                    <div className="textBig">
                      <span className="info">{topItem.subtitle}</span>
                      <span className="price">{topItem.priceInfo}元起</span>
                    </div>
                    <div className="textSmall">{topItem.title}</div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    )
  }
}

export default TopicList