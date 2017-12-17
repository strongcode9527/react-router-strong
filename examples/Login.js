import React from 'react'
import Link from '../src/components/Link'
const Login = () => (
  <div>
    <h3>登陆页面</h3>
    <div><Link to="/register">点击跳转注册界面</Link></div>
    <div><Link to="/forget">跳转忘记密码页面</Link></div>
  </div>
)

export default Login