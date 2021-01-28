import React from 'react'
import styled from 'styled-components'

const DataHeadBox = styled.div`
  height: 60px;
  width: 1103px;
  position: absolute;
  left: 305px;
  right: 32px;
  background: #f3f6f9;
  box-shadow: inset 0px -1px 0px rgba(183, 183, 183, 0.25);
`

const Checkbox = styled.input`
  position: absolute;
  left: 20.5px;
  right: 1073.5px;
  top: 14.5px;
  bottom: 15.5px;
  background: #9f9f9f;
`

const Name = styled.div`
  position: absolute;
  left: 105px;
  right: 804px;
  top: 15px;
  bottom: 15px;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  text-transform: uppercase;
  color: #899198;
`

const Location = styled.div`
  position: absolute;
  left: 309px;
  right: 650px;
  top: 15px;
  bottom: 15px;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  text-transform: uppercase;
  color: #899198;
`

const Status = styled.div`
  position: absolute;
  left: 491px;
  right: 468px;
  top: 15px;
  bottom: 15px;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  text-transform: uppercase;
  color: #899198;
`

const Entries = styled.div`
  position: absolute;
  left: 669px;
  right: 290px;
  top: 15px;
  bottom: 15px;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  text-transform: uppercase;
  color: #899198;
`

const RiskProfile = styled.div`
  position: absolute;
  left: 873px;
  right: 140px;
  top: 15px;
  bottom: 15px;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  text-transform: uppercase;
  color: #899198;
`

const DataHead = ({ top, bottom }) => {
  return (
    <DataHeadBox style={{ top: top, bottom: bottom }}>
      <Checkbox type='checkbox'></Checkbox>
      <Name>name</Name>
      <Location>location</Location>
      <Status>status</Status>
      <Entries>entries</Entries>
      <RiskProfile>risk profile</RiskProfile>
    </DataHeadBox>
  )
}

export default DataHead
