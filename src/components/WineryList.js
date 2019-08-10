import React from 'react'

import WineryCard from './WineryCard'

const WineryList = ({wineries, wineriesCount, handlePageChange}) => {
  console.log(wineries)
  return (
    <div>
      <ul className="winery-list">
        {
          wineries.map(winery => <WineryCard winery={winery} />)
        }
      </ul>
      <ul className="pages">
        <li onClick={() => handlePageChange(1)} >1</li>
        <li onClick={() => handlePageChange(2)} >2</li>
        <li onClick={() => handlePageChange(3)} >3</li>
        <li onClick={() => handlePageChange(3)} >3</li>
        <li onClick={() => handlePageChange(4)} >4</li>
        <li onClick={() => handlePageChange(5)} >5</li>
        <li onClick={() => handlePageChange(6)} >6</li>
      </ul>
    </div>
  )
}

export default WineryList
