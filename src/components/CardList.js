import React from 'react'
import styled from 'styled-components'
import Card from './Card'

const CardBox = styled.div`
  display: flex;
  justify-content: space-evenly;
`

const CardList = () => {
  return (
    <CardBox>
      <Card number='31454' text='Ongoing metric' left='18px' right='1164px' />
      <Card number='2344' text='Past metric' left='302px' right='880px' />
      <Card number='14224' text='Missed metric' left='586px' right='596px' />
      <Card number='635' text='Failed metric' left='870px' right='312px' />
      <Card number='11334' text='Pending metric' left='1154px' right='28px' />
    </CardBox>
  )
}

export default CardList
