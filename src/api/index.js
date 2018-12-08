
import ajax from './ajax'

// 首页所有数据
export const reqHomeData = () => ajax('/home')
// 分类数据
export const reqClassify = () => ajax('/classify')
// 识物数据
export const reqThing = () => ajax('/thing')