import React from 'react'
import styled from 'styled-components'
import { FiMoreVertical } from 'react-icons/fi'

const DataBox = styled.div`
  height: 60px;
  width: 1103px;
  position: absolute;
  left: 305px;
  right: 32px;
  background: #ffffff;
  box-shadow: inset 0px -1px 0px rgba(183, 183, 183, 0.25);
`

const Checkbox = styled.input`
  position: absolute;
  left: 21.21px;
  right: 1066.27px;
  top: 20.5px;
  bottom: 24.5px;
  background: #9f9f9f;
`
const FontIcon = styled.div`
  position: absolute;
  left: 60px;
  right: 1023px;
  top: 23px;
  bottom: 22px;
`

const Name = styled.div`
  position: absolute;
  left: 105px;
  right: 798px;
  top: 21px;
  bottom: 21px;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  text-transform: uppercase;
  color: #25213b;
`
const State = styled.div`
  position: absolute;
  left: 309px;
  right: 644px;
  top: 15px;
  bottom: 30px;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  color: #25213b;
`

const Location = styled.div`
  position: absolute;
  left: 309px;
  right: 644px;
  top: 35px;
  bottom: 10px;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  text-transform: uppercase;
  color: #899198;
`

const Status = styled.div`
  width: 89px;
  height: 22px;
  position: absolute;
  left: 491px;
  right: 523px;
  top: 20px;
  bottom: 18px;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  text-transform: capitalize;
  color: #8c70ff;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f6f3ff;
  border-radius: 11px;
`

const Entries = styled.div`
  width: 150px;
  position: absolute;
  left: 674px;
  right: 423px;
  top: 17.5px;
  bottom: 36.5px;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  text-transform: capitalize;
  color: #25213b;
`

const EntriesForm = styled.div`
  position: absolute;
  left: 669px;
  right: 284px;
  top: 35px;
  bottom: 10px;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  text-transform: capitalize;
  color: #878592;
`

const RiskProfile = styled.div`
  width: 75px;
  position: absolute;
  left: 878.83px;
  right: 215.83px;
  top: 25.83px;
  bottom: 25.83px;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  text-transform: capitalise;
  color: #899198;
  display: flex;
  align-items: center;
  color: #3c3ab6;
`

const RiskProfileText = styled.div`
  position: absolute;
  left: 18.83px;
`

const FontIconVerticalDot = styled.div`
  position: absolute;
  left: 1029px;
  right: 22.67px;
  top: 22.67px;
  bottom: 22.67px;
  color: #c3c3c3;
`

const Data = ({
  top,
  bottom,
  name,
  location,
  status,
  entries,
  entriesForm,
  riskProfile,
}) => {
  return (
    <DataBox style={{ top: top, bottom: bottom }}>
      <Checkbox type='checkbox'></Checkbox>
      <FontIcon>
        <img src='/images/chevron-down.png' alt='chevron-down' />
      </FontIcon>
      <Name>{name}</Name>
      <State>Lagos state</State>
      <Location>{location}</Location>
      {status !== '0' ? (
        <Status className='warning'>{status} issues found</Status>
      ) : (
        <Status>no issues</Status>
      )}

      <Entries>{entries} unique entries</Entries>
      {entriesForm !== '0' ? (
        <EntriesForm>homogenous</EntriesForm>
      ) : (
        <EntriesForm>heterogenous</EntriesForm>
      )}

      {riskProfile === 'Low Risk' ? (
        <RiskProfile className='success'>
          <img src='/images/slant arrow.png' alt='slant arrow' />
          <RiskProfileText>{riskProfile}</RiskProfileText>
        </RiskProfile>
      ) : riskProfile === 'High Risk' ? (
        <RiskProfile className='danger'>
          <img src='/images/arrow-up.png' alt='arrow up' />
          <RiskProfileText>{riskProfile}</RiskProfileText>
        </RiskProfile>
      ) : (
        <RiskProfile>
          <img src='/images/arrow-right.png' alt='arrow right' />
          <RiskProfileText>{riskProfile}</RiskProfileText>
        </RiskProfile>
      )}
      <FontIconVerticalDot>
        <FiMoreVertical />
      </FontIconVerticalDot>
    </DataBox>
  )
}

export default Data
