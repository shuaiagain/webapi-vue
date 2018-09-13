const Mock = require('mockjs')
const login = Mock.mock('/api/login', 'post', function () {
  let userInfo = {
    ID: 1
  }

  return {
    Code: 200,
    Msg: '登录成功',
    Data: userInfo
  }
})

const bookList = Mock.mock('/api/getList', 'post', function () {
  let arr =
  [
    {ID: 1, Title: 'one'},
    {ID: 2, Title: 'two'}
  ]

  return {
    Code: 200,
    Msg: '登录成功',
    Data: arr
  }
})

export default{
  login,
  bookList
}
