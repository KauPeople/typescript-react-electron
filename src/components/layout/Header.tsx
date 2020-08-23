import React from 'react'
import styled from 'styled-components'
import ReorderIcon from '@material-ui/icons/Reorder'

const HeaderContainer = styled.div`
  background-color: #424242;
  color: white;
  width: 100%;
  height: 70px;
`
export interface HeaderProps {
  collapsed: boolean
  setCollapsed: React.Dispatch<React.SetStateAction<boolean>>
}
const Header = (props: HeaderProps) => {
  const { setCollapsed, collapsed } = props
  return (
    <>
      <HeaderContainer>
        <ReorderIcon
          style={{ fill: '#ffffff', marginLeft: '25px', marginTop: '25px', cursor: 'pointer' }}
          onClick={() => setCollapsed(!collapsed)}
        />
        <span style={{ marginLeft: '20px', fontSize: '30px' }}>준플렉스</span>
      </HeaderContainer>
    </>
  )
}

export default Header
