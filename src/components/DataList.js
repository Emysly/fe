import React from 'react'
import Data from './Data'
import DataHead from './DataHead'
import data from '../data/data.js'

const DataList = () => {
  return (
    <div>
      <DataHead top='259px' bottom='536px' />
      {data.map((item) => (
        <Data
          top={item.top}
          bottom={item.bottom}
          name={item.name}
          location={item.location}
          status={item.status}
          entries={item.entries}
          entriesForm={item.entriesForm}
          riskProfile={item.riskProfile}
        />
      ))}
      {/* 
      <Data top='364px' bottom='414px' />
      <Data top='425px' bottom='355px' />
      <Data top='486px' bottom='294px' />
      <Data top='547px' bottom='233px' />
      <Data top='608px' bottom='172px' />
      <Data top='669px' bottom='111px' />
      <Data top='730px' bottom='50px' /> */}
    </div>
  )
}

export default DataList
