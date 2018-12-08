/*
使用mockjs提供mock数据接口
 */
// webapck在打包会自动解析成对应的js对象/数组
import Mock from 'mockjs'
import data from './datahome.json'//首页
import navdata from './datanav.json'//分类
import topicdata from './datatopic.json'//识物
//首页数据
Mock.mock('/home', {code: 0, data: data})
//分类
Mock.mock('/classify', {code: 0, data: navdata.categoryL1List})
// 识物
Mock.mock('/thing', {code: 0, data: topicdata})
