import React, { useRef } from 'react'
import regions from '../data/regions'

const Header = ({handleRegionChange}) => {
  const regionEl = useRef("baseRgion")

  return (
    <header>
      <div className="wrapper">
        <div className="text-box">
          <h1>Discover the Great Wines<br/>of the Niagara Region.</h1>
          <p><span>Select a region to browse local wineries in the area,  or browse the wineries of the entire region.</span></p>
        </div>
        <form onSubmit={(e) => handleRegionChange(e, regionEl.current.value)}>
          <label htmlFor="region-select" aria-label="Select a location"><i className="fas fa-map-marker-alt"></i></label>
          <div className="custom-select">
            <select id="region-select" ref={regionEl}>
              {
                Object.keys(regions).map((key, i) =><option value={key}>{regions[key].name}</option>)
              }
            </select>
            <i className="fas fa-chevron-down"></i>
          </div>

          <button type="submit">
            Go
          </button>
        </form>
      </div>
    </header>
  )
}

export default Header
