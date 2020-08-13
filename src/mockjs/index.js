import Mock from 'mockjs'
import todoList from './parkingLot'

Mock.mock(/\/parkingLots/, 'get', todoList)

export default Mock