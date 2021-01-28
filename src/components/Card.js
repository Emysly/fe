import React from 'react'
import styled from 'styled-components'
import { FiInfo } from 'react-icons/fi'

const CardBox = styled.div`
  position: absolute;
  top: 106px;
  bottom: 605px;
  background: #ffffff;
  box-shadow: 0px 4px 30px rgba(192, 192, 192, 0.25);
  border-radius: 6px;
  height: 129px;
  width: 258px;
`

const CardText = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 44px;
  display: flex;
  align-items: center;
  letter-spacing: -0.44px;
  color: #19191d;
  position: absolute;
  height: 44px;
  left: 16px;
  right: 153px;
  top: 32px;
`

const CardParagraph = styled.div`
  position: absolute;
  left: 16px;
  top: 76px;
  bottom: 17px;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 36px;
  color: #9696a0;
`
const WarnIcon = styled.div`
  position: absolute;
  left: 82.57%;
  right: 16.57%;
  top: 32.57%;
  bottom: 63.57%;
  color: #b4b4bb;
  font-size: 30px;
`

const Card = ({ number, text, left, right }) => {
  return (
    <CardBox style={{ left: left, right: right }}>
      <CardText>{number}</CardText>
      <CardParagraph>{text}</CardParagraph>
      <WarnIcon>
        <FiInfo />
      </WarnIcon>
    </CardBox>
  )
}

export default Card
