import React from 'react'
import styled from 'styled-components'

const HeaderBox = styled.div`
  height: 52px;
  width: 1400px;
  box-shadow: inset 0px -1px 0px rgba(220, 225, 231, 0.572143);
  display: flex;
`
const LogoBox = styled.div`
  flex: 1 1 15%;
`

const Logo = styled.div`
  position: absolute;
  width: 32px;
  height: 27.05px;
  top: 10.23px;
  left: 26px;
`

const LogoText = styled.div`
  position: absolute;
  width: 120px;
  height: 22px;
  left: 58px;
  top: 14px;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 22px;
`
const Menu = styled.div`
  height: 52px;
  width: 314px;
  flex: 1 1 25%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`

const Home = styled.div`
  width: 87px;
  padding: 17px 10px;
  &:hover {
    background: #deefff;
    color: #006fd6;
  }
  &.active {
    border-bottom: 4px solid #006fd6;
    color: #006fd6;
    background: #deefff;
  }
`

const EmptyCol = styled.div`
  flex: 2 2 35%;
`

const Row = styled.div`
  display: flex;
  flow-direction: column;
`

const SearchBox = styled.div`
  flex: 1 1 25%;
  display: flex;
  height: 52px;
  align-items: center;
  justify-content: space-evenly;
`

const InputBox = styled.input`
  border: 1px solid #dce1e7;
  box-sizing: border-box;
  border-radius: 4px;
  width: 176px;
  height: 36px;
  display: flex;
  align-items: center;
  padding-left: 16px;
`
const SearchIcon = styled.div`
  position: absolute;
  left: 1111px;
  right: 313px;
  top: 18px;
  bottom: 18px;
  color: #979797;
  padding-left: 16px;
`

const UserBox = styled.div`
  background: #d8d8d8;
  height: 36px;
  width: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`
const DropDown = styled.div`
  position: absolute;
  right: 25.28px;
  top: 15px;
  color: #72809d;
`

const Division = styled.div`
  display: flex;
  width: 150px;
  height: 50px;
  align-items: center;
  justify-content: space-between;
`

const Header = () => {
  return (
    <>
      <HeaderBox>
        <LogoBox>
          <Logo>
            <img src='/images/logo.png' alt='logo' />
          </Logo>
          <LogoText>FE Engineer Test 1</LogoText>
        </LogoBox>
        <Menu>
          <Home>
            <img
              src='/images/home.png'
              alt='home'
              style={{ marginRight: '6px' }}
            />
            Home
          </Home>
          <Home>
            <img
              src='/images/entries.png'
              alt='entries'
              style={{ marginRight: '6px' }}
            />
            Entries
          </Home>
          <Home className='active'>
            <img
              src='/images/divisions.png'
              alt='divisions'
              style={{ marginRight: '6px' }}
            />
            Divisions
          </Home>
        </Menu>
        <EmptyCol />
        <SearchBox>
          <InputBox />
          <SearchIcon>
            <img src='/images/search.png' alt='search' />
          </SearchIcon>

          <img src='/images/bell.png' alt='bell' />
          <UserBox>
            <img src='/images/user.png' alt='user' />
          </UserBox>
          <DropDown>
            <img src='/images/right-arrow.png' alt='right-arrow' />
          </DropDown>
        </SearchBox>
      </HeaderBox>
      <Row>
        <Division>
          Divisions <img src='/images/right-path.png' alt='right-path' /> Module
        </Division>
      </Row>
    </>
  )
}

export default Header
