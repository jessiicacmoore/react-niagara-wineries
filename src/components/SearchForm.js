import React, {useRef} from 'react'
import regions from '../data/regions'

const SearchForm = ({handleRegionChange}) => {
  const regionInput = useRef();
  return (
    <div className="search-form">
      <h2>Narrow your results.</h2>
      <form onSubmit={(e) => handleRegionChange(e, regionInput.current.value)}>
        <div className="custom-select">
          <label htmlFor="region-select" aria-label="Select a location"><i className="fas fa-map-marker-alt"></i></label>
          <select id="region-select" ref={regionInput} default="" required>
            <option className="placeholder" value="" style={{display: "none"}}>Region</option>
            {
              Object.keys(regions).map((key, i) =><option key={i} value={key}>{regions[key].name}</option>)
            }
          </select>
          <i class="fas fa-chevron-down"></i>
        </div>
        <button type="submit">
          Go
        </button>
      </form>
    </div>
  )
}

export default SearchForm
