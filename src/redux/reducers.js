/*
 reducers函数： 根据之前的状态和action来产生新的状态
 */

import {HOME_DATA,CLASSIFY_DATA,THIMG_DATA} from './action-type'

import {combineReducers} from 'redux'

const home = {};

function getHomeData(preState=home,action) {
  switch (action.type){
    case HOME_DATA:
      return action.data;
    default:
      return preState
  }
}

export default combineReducers({
  getHomeData,
})