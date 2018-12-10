/*
 包含Counter组件的容器组件
 */

import React from 'react'
//引入连接函数
import {connect} from 'react-redux'

import Thing from '../pages/Thing/thing'
import {getThingData} from '../redux/actions'

// 向外暴露连接App组件的包装组件
export default connect(
  state =>({thing:state.getThingData}),
  {getThingData}
)(Thing)