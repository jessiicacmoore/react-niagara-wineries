import React from 'react'
import Fade from 'react-reveal/Fade'


import WineryCard from './WineryCard'

const WineryList = ({wineries}) => {
  return (
    <ul className="wineries">
      {
        wineries.map(winery => <Fade bottom><WineryCard key={winery.id} winery={winery} /></Fade>)
      }
    </ul>
  )
}

export default WineryList
