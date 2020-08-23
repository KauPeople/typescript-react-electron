import React from 'react'
import { useForm } from 'react-hook-form'
import { RouteComponentProps } from 'react-router-dom'
import styled from 'styled-components'

const Input = styled.input`
  width: 300px;
  height: 40px;
  margin-top: 30px;
`

const Aspan = styled.span`
  cursor: pointer;
  color: blue;
  margin-right: 260px;
`
const SubmitButton = styled.button`
  width: 300px;
  height: 40px;
  margin-top: 30px;
  cursor: pointer;
`

const Join = (props: RouteComponentProps) => {
  const { history } = props
  const { register, handleSubmit, errors } = useForm()
  const onSubmit = (data: any) => console.log(data)
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
          <Input type="password" name="passwordCheck" ref={register} placeholder="비밀번호 확인" />
          <Input name="phone" ref={register} placeholder="전화번호" />
          <SubmitButton type="submit">회원가입</SubmitButton>
          <span>
            <Aspan onClick={() => history.push('/login')}>로그인</Aspan>
          </span>
        </div>
      </form>
    </>
  )
}
export default Join
