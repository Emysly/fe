import React from 'react'
import styled from 'styled-components'

// const HistoryBox = styled.div`
//   height: 258px;
//   width: 258px;
//   border: 2px solid black;
//   position: absolute;
//   top: 523px;
// `

const Speaker = styled.div`
  position: absolute;
  width: 31px;
  height: 31px;
  left: 32px;
  top: 518px;
  background: #00a2d6;
  border-radius: 6.32653px;
`

const SpeakerText = styled.div`
  width: 150px;
  position: absolute;
  left: 79px;
  top: 523px;
  right: 1275px;
  bottom: 296px;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 150%;
`
const Dot1 = styled.div`
  position: absolute;
  width: 9px;
  height: 9px;
  left: 32px;
  top: 575px;
  background: #707070;
  border-radius: 50%;
`
const Dot1Text = styled.div`
  position: absolute;
  width: 236px;
  height: 34px;
  left: 50px;
  top: 569px;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 140%;
  color: #747474;
`
const Dot1Date = styled.div`
  position: absolute;
  width: 150px;
  height: 17px;
  left: 50px;
  top: 613px;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 140%;
  color: #a1aace;
`
const Dot2 = styled.div`
  position: absolute;
  width: 9px;
  height: 9px;
  left: 32px;
  top: 656px;
  background: #707070;
  border-radius: 50%;
`
const Dot2Text = styled.div`
  position: absolute;
  width: 236px;
  height: 34px;
  left: 50px;
  top: 650px;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 140%;
  color: #747474;
`
const Dot2Date = styled.div`
  position: absolute;
  width: 150px;
  height: 17px;
  left: 50px;
  top: 694px;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 140%;
  color: #a1aace;
`
const Dot3 = styled.div`
  position: absolute;
  width: 9px;
  height: 9px;
  left: 32px;
  top: 736px;
  background: #707070;
  border-radius: 50%;
`
const Dot3Text = styled.div`
  position: absolute;
  width: 236px;
  height: 34px;
  left: 50px;
  top: 730px;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 140%;
  color: #747474;
`
const Dot3Date = styled.div`
  position: absolute;
  width: 150px;
  height: 17px;
  left: 50px;
  top: 774px;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 140%;
  color: #a1aace;
`
const DashLine = styled.div`
  position: absolute;
  left: 36px;
  top: 584px;
`
const TinyDot = styled.div`
  position: absolute;
  left: 115px;
  top: -3px;
`
const Web = styled.div`
  position: absolute;
  left: 130px;
  top: 0px;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 140%;
  color: #a1aace;
`
const History = () => {
  return (
    <>
      <Speaker>
        <img
          src='/images/speaker.png'
          alt='speaker.png'
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        />
      </Speaker>
      <SpeakerText>Module History</SpeakerText>
      <Dot1></Dot1>
      <Dot1Text>Searched “Journal Entries” on Division module</Dot1Text>
      <Dot1Date>
        22:10 15/09/2020{' '}
        <TinyDot>
          <img src='/images/tiny-dot.png' alt='tiny-dot' />
        </TinyDot>{' '}
        <Web>Web</Web>
      </Dot1Date>
      <Dot2></Dot2>
      <Dot2Text>Searched “Fingerprint record” on Division module</Dot2Text>
      <Dot2Date>
        22:10 15/09/2020{' '}
        <TinyDot>
          <img src='/images/tiny-dot.png' alt='tiny-dot' />
        </TinyDot>{' '}
        <Web>Web</Web>
      </Dot2Date>
      <Dot3></Dot3>
      <Dot3Text>Searched “Journal Entries” on Division module</Dot3Text>
      <Dot3Date>
        22:10 15/09/2020{' '}
        <TinyDot>
          <img src='/images/tiny-dot.png' alt='tiny-dot' />
        </TinyDot>{' '}
        <Web>Web</Web>
      </Dot3Date>
      <DashLine>
        <img src='/images/line.png' alt='line' />
      </DashLine>
    </>
  )
}

export default History
