import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { ProductPage, ProductEditPage, LoginPage, RegisterPage } from './pages'
import 'antd/dist/antd.css'

function App() {
  return (
    <Switch>
      <Route exact path="/products" component={ProductPage} />
      <Route path="/products/:id" component={ProductEditPage} />
      <Route path="/registers" component={RegisterPage} />
      <Route path="/login" component={LoginPage} />
      <Redirect path="*" to="/products" />
      {/* <Route path="/mypage" component={MyPage}>
          {isLoggin ? null : <Redirect to="/user/login" />}
        </Route> */}
    </Switch>
  )
}

export default App
