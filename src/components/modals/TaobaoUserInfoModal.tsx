import React, { useState } from 'react'
import { Modal } from 'antd'
import { KeyOutlined } from '@ant-design/icons'
import styled from 'styled-components'

const Input = styled.input`
  width: 400px;
  height: 40px;
  margin-top: 5px;
`

const TaobaoUserInfoModal = () => {
  const [showModal, setShowModal] = useState(false)
  const [id, setId] = useState('')
  const [password, setPassword] = useState('')
  // const handleOk = () => {
  //   window.ipcRenderer.send('taobao-user-info', { id, password })
  //   setShowModal(false)
  // }
  const inputEnterEvent = (e: any) => {
    // if (e.key === 'Enter') handleOk()
  }
  return (
    <>
      <div style={{ float: 'right', cursor: 'pointer', color: 'blue' }} onClick={() => setShowModal(true)}>
        <KeyOutlined style={{ fontSize: '30px' }} />
        타오바오 로그인 등록
      </div>
      {/* <Modal title="Basic Modal" visible={showModal} onOk={handleOk} onCancel={() => setShowModal(false)}>
        <Input onChange={(e) => setId(e.target.value)} placeholder="타오바오 ID" />
        <Input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="타오바오 Password"
          onKeyPress={inputEnterEvent}
        />
      </Modal> */}
    </>
  )
}
export default TaobaoUserInfoModal
