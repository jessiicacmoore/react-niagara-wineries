import React from 'react'

import WineryCard from './WineryCard'

const WineryList = ({wineries}) => {
  return (
    <ul className="wineries">
      {
        wineries.map(winery => <WineryCard key={winery.id} winery={winery} />)
      }
    </ul>
  )
}

export default WineryList
