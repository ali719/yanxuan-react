/**
 * Created by Administrator on 2018/12/6.
 */

import React,{Component} from 'react'
import Swiper from 'swiper'
import './articleList.styl'

class ArticleList extends Component{
  
  componentDidMount(){
    new Swiper ('#art', {
      slidesPerView:3.8,
      spaceBetween :15,
    })
  }
  
  render(){
    const {column} = this.props
    return(
      <div className="swiper-container" id="art">
        <div className="swiper-wrapper">
          {
            column.map((art,index) =>{
              return(
                <div className="swiper-slide" key={index}>
                  <div className="article">
                    <img className="artImg" src={art.picUrl} alt=""/>
                    <span className="artTitle ellipsis">{art.title}</span>
                  </div>
                  <span className="number">{art.articleCount}</span>
                </div>
              )
            })
          }
          
      </div>
  </div>
    )
  }
}

export default ArticleList