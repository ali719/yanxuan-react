import React, {Component} from 'react';
import Footer from '../../components/Footer/footer'
import Banner from './banner/banner'
import BScroll from 'better-scroll'
import PropTypes from 'prop-types'
import duihao from './images/duihao.png'
import lingqu from './images/lingqu.png'
import fuli from './images/fuli.png'
import pt from './images/pt.png'
import fulishe from './images/fulishe.jpg'
import './home.styl'

class Home extends Component {
  static propTypes = {
    getHomeData:PropTypes.func.isRequired
  }
  state={
    navList:['推荐', '居家', '配件', '服装', '电器', '洗护', '饮食', '餐厨', '婴童', '文体', '特色区'],
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
    
    const {focusList} = this.props.home
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
                    <li key={index}>{item}</li>
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
                <img src={duihao}></img>
                  <span>网易自营品牌</span>
              </li>
              <li>
                <img src={duihao}></img>
                  <span>30天无忧退货</span>
              </li>
              <li>
                <img src={duihao}></img>
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
              <img src={pt}></img>
            </div>
          </div>
          {/*福利社*/}
          <img className="fuliImg" src={fulishe} alt=""></img>
        </div>
        <Footer/>
      </div>
      
    )
  }
}

export default Home
