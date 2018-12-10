import React, {Component} from 'react'
import './more.styl'

class More extends Component {
  render() {
    const {yxWeek} = this.props
    return (
      <div className="more">
        <div className="moreTop">
          <span className="line"></span>
          <span className="text">更多精彩</span>
          <span className="line"></span>
        </div>
        <div>
          {
            yxWeek.map((more,index) =>{
              return(
                <div className="moreContent" key={index}>
                  <img src={more.itemPicUrl} alt=""/>
                  <div className="moreTitle">{more.title}</div>
                </div>
              )
            })
          }
        </div>
  </div>
    )
  }
}

export default More