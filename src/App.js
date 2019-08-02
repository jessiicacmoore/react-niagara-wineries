import React, { Fragment, useEffect, useState } from 'react';
import axios from "axios";
import regions from "./regions"
import WineryRow from "./WineryRow";

require("dotenv").config();

function App() {
  const [region, setRegion] = useState(regions.baseRegion);
  const [offset, setOffset] = useState(0);
  const [wineries, setWineries] = useState(null);
  const [count, setCount] = useState(0)

  const getWineries = async () => {
    const token = process.env.REACT_APP_YELP_API_KEY
    const encodedRegion = encodeURIComponent(region)
    const baseUrl = `https://api.yelp.com/v3/businesses/search?limit=10&offset=${offset}&location=${encodedRegion}&term=wineries/`

    axios.get(`https://cors-anywhere.herokuapp.com/${baseUrl}`, {
      headers: {
        "Authorization": `Bearer ${token}`
      }
    }).then((resp) => {
      setWineries(resp.data.businesses);
      setCount = resp.data.total;
    })
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    getWineries();
  }, [])

  return (
    <Fragment>
      <ul className="winery-list">
        <h1>Count: {count}</h1>
        { !wineries
          ? <div className="sk-circle">
              <div className="sk-circle1 sk-child"></div>
              <div className="sk-circle2 sk-child"></div>
              <div className="sk-circle3 sk-child"></div>
              <div className="sk-circle4 sk-child"></div>
              <div className="sk-circle5 sk-child"></div>
              <div className="sk-circle6 sk-child"></div>
              <div className="sk-circle7 sk-child"></div>
              <div className="sk-circle8 sk-child"></div>
              <div className="sk-circle9 sk-child"></div>
              <div className="sk-circle10 sk-child"></div>
              <div className="sk-circle11 sk-child"></div>
              <div className="sk-circle12 sk-child"></div>
            </div>
          : wineries.map(winery => <WineryRow key={winery.id} winery={winery} />)
        }
      </ul>
    </Fragment>
  );
}

export default App;
