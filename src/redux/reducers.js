/*
 reducers函数： 根据之前的状态和action来产生新的状态
 */

import {HOME_DATA,CLASSIFY_DATA,THING_DATA} from './action-type'

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

const classify = [];
function getClassifyData(preState=classify,action) {
  switch (action.type){
    case CLASSIFY_DATA:
      return action.data;
    default:
      return preState
  }
}

const thing={}
function getThingData(preState=thing,action) {
  switch (action.type){
    case THING_DATA:
      return action.data
    default:
      return preState
  }
}

export default combineReducers({
  getHomeData,
  getClassifyData,
  getThingData
})