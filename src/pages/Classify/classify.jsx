/**
 * Created by Administrator on 2018/12/6.
 */

import React,{Component} from 'react'
import BScroll from 'better-scroll'

import Footer from '../../components/Footer/footer'

import './classify.styl'

class Classify extends Component{
  
  state={
    currentIndex:0
  }
  
  navIndex=(index)=>{
    this.setState({
      currentIndex:index
    })
  }
  
  componentDidMount(){
    this.props.getClassifyData()
  }
  
  componentDidUpdate(){
    new BScroll('.detail', {
      click: true,
    })
  }
  
  componentWillReceiveProps (props){
      new BScroll('.navigator', {
        click: true,
      })
  }
  

  
  render(){
    const classify = this.props.classify
    const {currentIndex} = this.state
    const contentList = classify[currentIndex]
      return(
        <div id="classify">
          {/*头部搜索部分*/}
          <header id="header">
            {/*搜索框*/}
            <div className="search">
              <i className="iconfont icon-sousuo1"></i>
              <span> 搜索商品, 共19601款好物</span>
            </div>
          </header>
          {/*主体部分*/}
          <section id="content">
            {/*左侧导航*/}
            <div className="navigator">
              <ul className="navList">
                {
                  classify.map((nav,index) =>{
                    return(
                      <li key={index} onClick={()=>this.navIndex(index)} className={currentIndex === index ? 'active': ''}>{nav.name}</li>
                    )
                  })
                }
          
              </ul>
            </div>
            {/*右侧内容区域*/}
            <div className="detail">
              {
                contentList ?
                  (<div>
                    <img className="detailImg" src={contentList.wapBannerUrl}  alt=""/>
                    <div className="detailTitle">{contentList.name}分类</div>
                    <ul className="detailList">
                      {
                        contentList.subCateList.map((cate,index) =>{
                          return(
                            <li key={index}>
                              <img className="listImg" src={cate.wapBannerUrl} alt=""/>
                              <span>{cate.name}</span>
                            </li>
                          )
                        })
                      }
                    </ul>
                  </div>):''
              }
            </div>
          </section>
          <Footer/>
        </div>
      )
  }
}

export default Classify