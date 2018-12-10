import React, {Component} from 'react'

import './zhen.styl'

class Zhen extends Component {
  render() {
    const {zhen} = this.props
    const item1 = zhen.Item[0]
    const item2 = zhen.Item[1]
    const item3 = zhen.Item[2]
    return (
      <div className="zhen">
        <div className="top">{zhen.name}</div>
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

export default Zhen
