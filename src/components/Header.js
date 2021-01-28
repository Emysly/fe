import React from 'react'
import styled from 'styled-components'

const HeaderBox = styled.div`
  position: absolute;
  height: 52px;
  width: 1400px;
  left: 0px;
  box-shadow: inset 0px -1px 0px rgba(220, 225, 231, 0.572143);
`

const Logo = styled.div`
  position: absolute;
  top: 10.23px;
  left: 26px;
`

const LogoText = styled.div`
  position: absolute;
  left: 58px;
  top: 14px;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 22px;
`
const HomeIcon = styled.div`
  position: absolute;
  left: 237px;
  top: 17px;
`

const HomeText = styled.div`
  position: absolute;
  left: 261px;
  top: 14px;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 22px;
  color: #778699;
`
const EntriesIcon = styled.div`
  position: absolute;
  left: 330px;
  top: 17px;
`
const EntriesText = styled.div`
  position: absolute;
  left: 354px;
  top: 14px;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 22px;
  color: #778699;
`
const DivisionsIcon = styled.div`
  position: absolute;
  left: 441px;
  top: 17px;
`
const DivisionsText = styled.div`
  position: absolute;
  left: 465px;
  top: 14px;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 22px;
  color: #006fd6;
`

const DivisionsBox = styled.div`
  height: 52px;
  width: 110px;
  background: #deefff;
  border-bottom: 4px solid #006fd6;
  position: absolute;
  left: 429px;
  top: 1px;
`

const InputBox = styled.input`
  border: 1px solid #dce1e7;
  box-sizing: border-box;
  border-radius: 4px;
  width: 176px;
  height: 36px;
  position: absolute;
  left: 1095px;
  top: 8px;
  padding-left: 16px;
`
const SearchIcon = styled.div`
  position: absolute;
  left: 1111px;
  top: 18px;
  color: #979797;
  padding-left: 16px;
`
const Alert = styled.div`
  position: absolute;
  left: 1303.03px;
  top: 17px;
`

const UserBox = styled.div`
  background: #d8d8d8;
  height: 36px;
  width: 36px;
  border-radius: 50%;
  position: absolute;
  left: 1351px;
  top: 9px;
`
const DropDown = styled.div`
  position: absolute;
  left: 1392px;
  top: 19px;
  color: #72809d;
`

const Division = styled.div`
  color: #778699;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 22px;
  position: absolute;
  width: 98px;
  left: 33px;
  top: 8.1%;
  bottom: 89.29%;
  &.active {
    background: #deefff;
  }
`

const PathRight = styled.div`
  position: absolute;
  top: 67px;
  left: 98px;
`

const Module = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 22px;
  position: absolute;
  left: 112px;
  top: 68%;
  color: #778699;
  top: 8.1%;
  bottom: 89.29%;
`

const Header = () => {
  return (
    <>
      <HeaderBox>
        <Logo>
          <img src='/images/logo.png' alt='logo' />
        </Logo>
        <LogoText>FE Engineer Test 1</LogoText>
        <HomeIcon>
          <img src='/images/home.png' alt='home' />
        </HomeIcon>
        <HomeText>Home</HomeText>
        <EntriesIcon>
          <img src='/images/entries.png' alt='entries' />
        </EntriesIcon>
        <EntriesText>Entries</EntriesText>
        <DivisionsBox className='active' />
        <DivisionsIcon>
          <img src='/images/divisions.png' alt='divisions' />
        </DivisionsIcon>
        <DivisionsText>Divisions</DivisionsText>
        <InputBox />
        <SearchIcon>
          <img src='/images/search.png' alt='search' />
        </SearchIcon>
        <Alert>
          <img src='/images/bell.png' alt='bell' />
        </Alert>
        <UserBox>
          <img
            src='/images/user.png'
            alt='user'
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          />
        </UserBox>
        <DropDown>
          <img src='/images/right-arrow.png' alt='right-arrow' />
        </DropDown>
      </HeaderBox>
      <Division>Divisions</Division>
      <PathRight>
        <img src='/images/right-path.png' alt='right-path' />
      </PathRight>
      <Module>Module</Module>
    </>
  )
}

export default Header
