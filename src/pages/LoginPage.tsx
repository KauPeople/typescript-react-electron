import React from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { Login, Join, FindPassword } from '../components/login'

const UserPage = (props: RouteComponentProps) => {
  const { location } = props
  const isLogined = true
  return (
    <>
      {location.pathname !== '/login/find_password' && location.pathname !== '/login/join' && <Login {...props} />}
      {location.pathname === '/login/join' && <Join {...props} />}
      {location.pathname === '/login/find_password' && <FindPassword {...props} />}
    </>
  )
}

export default UserPage
