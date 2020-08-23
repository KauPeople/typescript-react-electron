import React, { useState } from 'react'
import { Layout as AntdLayout } from 'antd'
import { RouteComponentProps } from 'react-router-dom'
import styled from 'styled-components'
import Layout from '../components/layout/Layout'
import TaobaoUserInfoModal from '../components/modals/TaobaoUserInfoModal'

const { Content } = AntdLayout

const Line = styled.div`
  border-bottom: 2px solid black;
  margin-top: 20px;
  margin-bottom: 20px;
`
const Input = styled.input`
  width: 800px;
  height: 40px;
  margin-top: 5px;
`
const SubmitButton = styled.button`
  width: 50px;
  height: 40px;
  cursor: pointer;
`

const WhiteContent = styled.div`
  background: #fff;
  padding: 24px;
  min-height: 280px;
`

const RegisterPage = (props: RouteComponentProps) => {
  const { history } = props
  const [registerURL, setRegisterURL] = useState('')
  const crawling = () => {
    console.log(registerURL)
  }
  return (
    <>
      <Layout history={history}>
        <Content>
          <WhiteContent>
            <Input
              onChange={(e) => {
                setRegisterURL(e.target.value)
              }}
              placeholder="URL을 입력해주세요."
            />
            <SubmitButton onClick={() => crawling()}>수집</SubmitButton>
            <TaobaoUserInfoModal />
            <Line />
            <div>상품명 *</div>
            <Input />
            <div>URL *</div>
            <a href="https://naver.com" target="_blank" rel="noopener noreferrer">
              hi
            </a>
            <div>브랜드 *</div>
            <Input />
            <div>키워드 *</div>
            <Input />
            <div>가격(KR) *</div>
            <Input />
            <div>가격(CHN) *</div>
            <Input />
          </WhiteContent>
        </Content>
      </Layout>
    </>
  )
}

export default RegisterPage
