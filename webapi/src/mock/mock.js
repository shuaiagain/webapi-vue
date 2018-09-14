// 引入mockjs
const Mock = require('mockjs')
const login = Mock.mock('/api/login', 'post', function (data) {

  let para = JSON.parse(data.body)
  // let para = data

  if (!para.userName) {
    return {
      Code: -400,
      Msg: '用户名或密码错误',
      Data: ''
    }
  }

  if (para.userName !== 'grass' || para.password !== '1') {
    return {
      Code: -401,
      Msg: '用户名或密码错误',
      Data: ''
    }
  }

  let userInfo = {
    UserID: 1,
    UserName: 'grass'
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
