/**
 * Created by Administrator on 2018/12/6.
 */

import React,{Component} from 'react'
import Footer from '../../components/Footer/footer'
import TopHeader from '../../components/TopHeader/topHeader'


class Thing extends Component{
  render(){
    return(
      <div>
        <TopHeader/>
        Thing
        <Footer/>
      </div>
    )
  }
}

export default Thing