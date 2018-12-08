/*
 action creators模块：用来创建action对象的工厂函数模块
 - 同步action creator： 返回值是action对象
 - 异步action creator： 返回值是一个回调函数
 */

import {HOME_DATA,CLASSIFY_DATA,THIMG_DATA} from './action-type'
import {reqHomeData,reqClassify,reqThing} from '../api'

export function getHomeData() {
  return async dispatch =>{
    const homeData = await reqHomeData()
    const home = homeData.data
    if (homeData.code === 0){
      dispatch({type:HOME_DATA,data:home})
    }
  }
}

