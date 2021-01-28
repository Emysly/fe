import React from 'react'
import styled from 'styled-components'
import DataList from './DataList'
import History from './History'
import Summary from './Summary'

const LayoutBox = styled.div`
  display: flex;
  justify-content: spcae-between;
  flex-wrap: wrap;
`

const Layout = () => {
  return (
    <LayoutBox>
      <Summary />
      <DataList />
      <History />
    </LayoutBox>
  )
}

export default Layout
