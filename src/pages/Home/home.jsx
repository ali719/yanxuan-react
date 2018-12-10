import React, {Component} from 'react';
import BScroll from 'better-scroll'
import PropTypes from 'prop-types'

import Footer from '../../components/Footer/footer'
import Banner from './banner/banner'
import NewItem from './newItem/newItem'
import PopularItem from './popularItem/popularItem'
import TopicList from './topicList/topicList'
import CateList from './cateList/cateList'

import duihao from './images/duihao.png'
import lingqu from './images/lingqu.png'
import fuli from './images/fuli.png'
import pt from './images/pt.png'
import fulishe from './images/fulishe.jpg'
import xiaolongxia from './images/xiaolongxia.png'

import './home.styl'

class Home extends Component {
  static propTypes = {
    getHomeData:PropTypes.func.isRequired
  }
  state={
    navList:['推荐', '居家', '配件', '服装', '电器', '洗护', '饮食', '餐厨', '婴童', '文体', '特色区'],
    currentIndex:0
  }
  
  handleIndex= (index)=>{
    this.setState({
      currentIndex:index
    })
  }
  
  componentWillReceiveProps (props) {
    setTimeout(()=>{
      new BScroll('.navigate', {
        scrollX: true,
        click: true
      })
    },30)
  }
  
  componentDidMount(){
    this.props.getHomeData()
  }
  
  render(){
    const {navList} = this.state
    
    const {focusList,newItemList,popularItemList,topicList,cateList} = this.props.home
    if(!this.props.home.freshmanFlag){
      return null
    }
    return (
      <div id="home">
        {/*头部导航部分*/}
        <header id="header">
          {/*严选logo及搜索框*/}
          <div className="logo_search">
            {/*网易严选logo*/}
            <div className="logo"></div>
            {/*搜索框*/}
            <div className="search">
              <i className="iconfont icon-sousuo1"></i>
              <span> 搜索商品, 共19601款好物</span>
            </div>
            {/*登录*/}
            <div className="login">登录</div>
          </div>
          {/*头部导航区域*/}
          <div className="navigate">
            <ul className="navList">
              {
                navList.map((item,index) =>{
                  return (
                    <li key={index}>
                      <span onClick={()=> this.handleIndex(index)} className={index === this.state.currentIndex ? 'on': ''}>{item}</span>
                    </li>
                  )
                })
              }
            </ul>
          </div>
        </header>
        <div id="main">
          {/*轮播图*/}
          <Banner banner={focusList}/>
          {/*网易自营三个保障*/}
          <div className="serve">
            <ul className="serveList">
              <li>
                <img src={duihao} alt=""></img>
                  <span>网易自营品牌</span>
              </li>
              <li>
                <img src={duihao} alt=""></img>
                  <span>30天无忧退货</span>
              </li>
              <li>
                <img src={duihao} alt=""></img>
                  <span>48小时快速退款</span>
              </li>
            </ul>
          </div>
          {/*新人专享礼*/}
          <div className="newGift">
            {/*新人专享礼标题*/}
            <div className="newGiftTitle">
              <span className="line"></span>
              <span className="text">新人专享礼</span>
              <span className="line"></span>
            </div>
            {/*图片区域*/}
            {/*新人专享礼包*/}
            <div className="giftImg">
              <div className="title">新人专享礼包</div>
              <img src={lingqu} alt=""></img>
            </div>
            {/*福利社*/}
            <div className="welfareWrap">
              <div className="title">
                <div className="welfare">福利社</div>
                <div className="sale">今日特价</div>
              </div>
              <img src={fuli} alt=""></img>
            </div>
            {/*新人拼团*/}
            <div className="welfareWrap">
              <div className="title">
                <div className="welfare">新人拼团</div>
                <div className="sale">1元起包邮</div>
              </div>
              <img src={pt} alt=""></img>
            </div>
          </div>
          {/*品牌制造商直供*/}
          <div className="brand">
            {/*导航标题*/}
            <div className="brandTitle">
              <div className="title">品牌制造商直供</div>
              <div className="more">
                <span>更多</span>
                <i className="iconfont icon-jiantou1"></i>
              </div>
            </div>
            {/*四个制造商*/}
            <div className="makeWarp">
              <div className="make1">
                <div className="makeName">海外制造商</div>
                <div className="makePrice">9.9元起</div>
              </div>
              <div className="make2">
                <div className="makeName">CK制造商</div>
                <div className="makePrice">25元起</div>
              </div>
              <div className="make3">
                <div className="makeName">新秀丽制造商</div>
                <div className="makePrice">34.9元起</div>
              </div>
              <div className="make4">
                <div className="makeName">MUJI制造商</div>
                <div className="makePrice">35元起</div>
              </div>
            </div>
          </div>
          {/*新品首发*/}
          <NewItem newItemList={newItemList}/>
          {/*人气推荐*/}
          <PopularItem poplist={popularItemList}/>
          {/*严选限时购*/}
          <div className="flashSale">
            <div className="time">
              <div className="title">严选限时购</div>
              <div className="countDown">
                <span className="number">01</span>
                <span className="symbol">:</span>
                <span className="number">33</span>
                <span className="symbol">:</span>
                <span className="number">10</span>
              </div>
              <div className="next">下一场22:00开始</div>
            </div>
            <div className="saleImg">
              <img src={xiaolongxia} alt=""></img>
            </div>
          </div>
          {/*福利社*/}
          <img className="fuliImg" src={fulishe} alt=""></img>
          {/*专题精选*/}
          <TopicList topiclist={topicList}/>
          {/*居家购物*/}
          <CateList catelist={cateList}/>
          {/*版权信息*/}
          <div className="copyright">
            <div className="link">
              <a className="download">下载App</a>
              <a className="pc">电脑版</a>
            </div>
            <span>网易公司版权所有 © 1997-2018</span>
            <span>食品经营许可证：JY13301080111719</span>
          </div>
        </div>
        <Footer/>
      </div>
      
    )
  }
}

export default Home
