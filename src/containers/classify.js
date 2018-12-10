/*
 包含Counter组件的容器组件
 */

import React from 'react'
//引入连接函数
import {connect} from 'react-redux'

import Classify from '../pages/Classify/classify'
import {getClassifyData} from '../redux/actions'

// 向外暴露连接App组件的包装组件
export default connect(
  state =>({classify:state.getClassifyData}),
  {getClassifyData}
)(Classify)