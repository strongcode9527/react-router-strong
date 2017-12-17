import React from 'react'
import Link from '../src/components/Link'
const Home = () => (
  <div>
    <h3>主页</h3>
    <div></div><Link to="/register">点击跳转注册界面</Link>
    <div></div><Link to="/forget">跳转忘记密码页面</Link>
  </div>
)

export default Home