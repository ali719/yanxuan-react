import React, {Component} from 'react'
import Swiper from 'swiper'
import './eleven.styl'

class Eleven extends Component {
  componentDidMount(){
    new Swiper('#eleven', {
      slidesPerView: 1.17,
      spaceBetween: 15,
    })
  }
  
  render() {
    const {tenfifteen} = this.props
    return (
      <div className="eleven">
        {/*标题*/}
        <div className="eleTitle">十点一刻</div>
        {/*话题列表*/}
        <div className="topicList">
          <div className="swiper-container" id="eleven">
            <div className="swiper-wrapper">
              {
                tenfifteen.map((eleven,index) =>{
                  return(
                    <div className="swiper-slide" key={index}>
                      <div className="topicMain">
                        <div className="topicTop">
                          <span className="line"></span>
                          <span className="text">今日话题</span>
                          <span className="line"></span>
                        </div>
                        <div className="topicName">{eleven.desc}</div>
                        <div className="topicInfo">{eleven.title}</div>
                        <div className="topicPeople">{eleven.participantNum}人参与话题</div>
                      </div>
                    </div>
                  )
                })
              }
          </div>
        </div>
      </div>
  </div>
    )
  }
}

export default Eleven