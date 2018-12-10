/**
 * Created by Administrator on 2018/12/6.
 */

import React,{Component} from 'react'
import Footer from '../../components/Footer/footer'
import TopHeader from '../../components/TopHeader/topHeader'
import Banner from './banner/banner'
import ArticleList from './articleList/articleList'
import Recommend from './recommend/recommendList'
import Eleven from './eleven/eleven'
import Zhen from './zhen/zhen'
import More from './more/more'

import look from './images/look.jpg'

import './thing.styl'

class Thing extends Component{
  
  componentDidMount(){
    this.props.getThingData()
  }
  
  render(){
    const {banner,column,recommend,tenfifteen,zhen,yxLook,yxWeek} = this.props.thing
    if (!this.props.thing.hasMore){
      return null
    }
    return(
      <div id="thing">
        <TopHeader/>
        {/*内容区域*/}
        <section id="content">
          {/*轮播图*/}
          <div className="banWrap">
            <Banner banner={banner}/>
          </div>
          {/*文章列表*/}
          <div className="articleWrap">
            <ArticleList column={column}/>
          </div>
          {/*为你推荐*/}
          <Recommend recommend={recommend}/>
          {/*十点一刻*/}
          <Eleven tenfifteen={tenfifteen}/>
          {/*严选臻品*/}
          <Zhen zhen={zhen}/>
          {/*严选LOOK*/}
          <div className="look">
            <div className="lookTop">严选LOOK</div>
            <img className="lookImg" src={look} alt=""/>
              <div className="lookAuthor">
                <img src={yxLook.avatar}  alt=""/>
                <span>{yxLook.nickname}</span>
              </div>
              <div className="lookText" >{yxLook.content}</div>
          </div>
          {/*更多精彩*/}
          <More yxWeek={yxWeek}/>
        </section>
        <Footer/>
      </div>
    )
  }
}

export default Thing