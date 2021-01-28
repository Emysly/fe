import React from 'react'
import styled from 'styled-components'

const SummaryBox = styled.div`
  height: 235px;
  position: absolute;
  left: 20px;
  right: 1162px;
  top: 259px;
  bottom: 346px;
  background: #ffffff;
  box-shadow: 0px 4px 30px rgba(192, 192, 192, 0.25);
  border-radius: 6px;
`

const Castle = styled.div`
  position: absolute;
  width: 31px;
  height: 31px;
  left: 12px;
  top: 12px;
  background: #00a2d6;
  border-radius: 6.32653px;
`

const Division = styled.div`
  position: absolute;
  width: 130px;
  height: 21px;
  left: 59px;
  top: 17px;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 150%;
  display: flex;
  align-items: center;
`

const PhoneIcon = styled.div`
  position: absolute;
  left: 14px;
  right: 228px;
  top: 64px;
  bottom: 155px;
`
const PhoneText = styled.div`
  width: 150px;
  position: absolute;
  left: 46px;
  right: 118px;
  top: 62px;
  bottom: 153px;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 140%;
  color: #0f1a4f;
`
const EmailIcon = styled.div`
  position: absolute;
  left: 14px;
  right: 228px;
  top: 94px;
  bottom: 124px;
`
const EmailText = styled.div`
  width: 150px;
  position: absolute;
  left: 46px;
  right: 84px;
  top: 92px;
  bottom: 123px;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 140%;
  color: #0f1a4f;
`
const MapIcon = styled.div`
  position: absolute;
  left: 14px;
  right: 228px;
  top: 124px;
  bottom: 95px;
`
const MapText = styled.div`
  width: 150px;
  position: absolute;
  left: 46px;
  right: 228px;
  top: 122px;
  bottom: 93px;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 140%;
  color: #0f1a4f;
`
const JournalIcon = styled.div`
  position: absolute;
  left: 14px;
  right: 228px;
  top: 154px;
  bottom: 65px;
`
const JournalText = styled.div`
  width: 150px;
  position: absolute;
  left: 46px;
  right: 228px;
  top: 152px;
  bottom: 63px;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 140%;
  color: #0f1a4f;
`
const FingerPrintIcon = styled.div`
  position: absolute;
  left: 14px;
  right: 228px;
  top: 186px;
  bottom: 34px;
`
const FingerPrintText = styled.div`
  width: 180px;
  position: absolute;
  left: 46px;
  right: 228px;
  top: 182px;
  bottom: 33px;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 140%;
  color: #0f1a4f;
`

const Summary = () => {
  return (
    <SummaryBox>
      <Castle>
        <img
          src='/images/castle.png'
          alt='castle'
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        />
      </Castle>
      <Division>Division Summary</Division>
      <PhoneIcon>
        <img src='/images/phone.png' alt='phone' />
      </PhoneIcon>
      <PhoneText>0801 234 5678</PhoneText>
      <EmailIcon>
        <img src='/images/envelope.png' alt='envelope' />
      </EmailIcon>
      <EmailText>asbfefr@gmail.com</EmailText>
      <MapIcon>
        <img src='/images/map.png' alt='map' />
      </MapIcon>
      <MapText>Mojidi, Lagos</MapText>
      <JournalIcon>
        <img src='/images/journal.png' alt='journal' />
      </JournalIcon>
      <JournalText>2 Journal entries</JournalText>
      <FingerPrintIcon>
        <img src='/images/fingerprint.png' alt='fingerprint' />
      </FingerPrintIcon>
      <FingerPrintText>24 fingerprints enrolled</FingerPrintText>
    </SummaryBox>
  )
}

export default Summary
