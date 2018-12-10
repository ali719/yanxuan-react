/**
 * Created by Administrator on 2018/12/6.
 */

import React,{Component} from 'react'
import './cateList.styl'

class CateList extends Component{
  render(){
    const {catelist} = this.props
    return(
      <div >
        {
          catelist.map((cateItem,index) =>{
            return(
              <div className="cateList" key={index}>
                <div className="title">{cateItem.name}好物</div>
                <ul className="shopList">
                  {
                    cateItem.itemList.map((cate,index)=>{
                      if (index < 7){
                        return(
                          <li key={index}>
                            <img src={cate.listPicUrl} alt=""></img>
                            <div className="simpleDesc ellipsis">{cate.simpleDesc}</div>
                            <div className="shopName ellipsis">{cate.name}</div>
                            <div className="shopPrice">￥{cate.retailPrice}</div>
                          </li>
                        )
                      }
                      
                    })
                  }
                  
                  <li className="more">
                    <div>
                      <p>更多好物</p>
                      <i className="iconfont icon-gengduo2"></i>
                    </div>
                  </li>
                </ul>
              </div>
            )
          })
        }
        
      </div>
    )
  }
}

export default CateList