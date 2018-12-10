import React,{Component} from 'react'

import './recommend.styl'
class RecommendList extends Component{
  render(){
    const {recommend} = this.props
    const item1 = recommend.Item[0]
    const item2 = recommend.Item[1]
    const item3 = recommend.Item[2];
    return(
      <div className="recommend">
        {/*头部标题*/}
        <div className="top">{recommend.name}</div>
        {/*白衣少年*/}
        <div className="yang" >
          <img className="recImg" src={item1.picUrl} alt=""/>
          <div className="recText">
            <div className="recTitle">
              <span>{item1.title}</span>
              <span>{item1.priceInfo}元起</span>
            </div>
            <div className="recInfo">{item1.subTitle}</div>
          </div>
        </div>
        {/*丁三石的好货推荐*/}
        <div className="dinglei" >
          <div className="text">
            <div className="title">{item2.title}</div>
            <div className="info ellipsis">{item2.subTitle}</div>
          </div>
          <div className="image">
            <img src={item2.picUrl} alt=""/>
            <span className="imgText">{item2.typeName}</span>
          </div>
        </div>
        {/*挑款师推荐*/}
        <div className="dinglei">
          <div className="text">
            <div className="title ellipsis">{item3.title}</div>
            <div className="info ellipsis">{item3.subTitle}</div>
          </div>
          <div className="image">
            <img src={item3.picUrl} alt=""/>
            <span className="imgText">{item3.typeName}</span>
          </div>
        </div>
      </div>
    )
  }
}

export default RecommendList