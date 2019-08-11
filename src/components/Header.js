import React, { useRef } from 'react'

const Header = ({handleRegionChange}) => {
  const regionEl = useRef("baseRgion")

  return (
    <header>
      <div className="wrapper">
        <h1>Discover the Great Wines<br/>of the Niagara Region.</h1>
        <form onSubmit={(e) => handleRegionChange(e, regionEl.current.value)}>
          <label htmlFor="region-select" ariaLabel="Select a location"><i class="fas fa-map-marker-alt"></i></label>
          <div className="custom-select">
            <select id="region-select" ref={regionEl}>
              <option value="baseRegion">Niagara Region</option>
              <option value="beamsville">Beamsville</option>
              <option value="jordanStn">Jordan Station</option>
              <option value="lincoln">Lincoln</option>
              <option value="niagaraFalls">Niagara Falls</option>
              <option value="notl">Niagara-On-The-Lake</option>
              <option value="stCath">St. Catharines</option>
              <option value="vineland">Vineland</option>
            </select>
            <i class="fas fa-chevron-down"></i>
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
