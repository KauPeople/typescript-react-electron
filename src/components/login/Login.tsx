import React, { useCallback } from 'react'
import { useForm } from 'react-hook-form'
import styled from 'styled-components'
import { RouteComponentProps } from 'react-router-dom'

const Input = styled.input`
  width: 300px;
  height: 40px;
  margin-top: 30px;
`

const Aspan = styled.span`
  cursor: pointer;
  color: blue;
`
const SubmitButton = styled.button`
  width: 300px;
  height: 40px;
  margin-top: 30px;
  cursor: pointer;
`

const Login = (props: RouteComponentProps) => {
  const { history } = props
  const { register, handleSubmit, errors } = useForm()
  const onSubmit = useCallback((data: any) => console.log(data), [])
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            height: '100vh',
            alignItems: 'center'
          }}
        >
          준플렉스
          <Input name="id" ref={register} placeholder="아이디" />
          <Input type="password" name="password" ref={register} placeholder="비밀번호" />
          <SubmitButton type="submit">로그인</SubmitButton>
          <span>
            <Aspan onClick={() => history.push('/login/find_password')} style={{ marginRight: '170px' }}>
              비밀번호 찾기
            </Aspan>
            <Aspan onClick={() => history.push('/login/join')}>회원가입</Aspan>
          </span>
        </div>
      </form>
    </>
  )
}
export default Login
