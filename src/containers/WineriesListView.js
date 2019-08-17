import React, {useEffect, useState} from "react";
import { Waypoint } from 'react-waypoint';
import Fade from 'react-reveal/Fade'
import axios from "axios";

import SearchForm from "../components/SearchForm"
import WineryCard from '../components/WineryCard'
import Spinner from "../components/Spinner";
import Loader from "../components/Loader";
import regions from "../data/regions"


require("dotenv").config();

const WineriesListView = () => {
  const [wineries, setWineries] = useState([]);
  const [resultCount, setResultCount] = useState(0);
  const [region, setRegion] = useState(regions.baseRegion);

  const getWineries = async () => {
    const token = process.env.REACT_APP_YELP_API_KEY;
    const baseUrl = `https://api.yelp.com/v3/businesses/search?limit=24&offset=${wineries.length}&location=${region.query}&term=wineries/`;
    axios
      .get(`https://cors-anywhere.herokuapp.com/${baseUrl}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(resp => {
        const newData = resp.data.businesses;
        const prevData = wineries;
        setResultCount(resp.data.total)
        setWineries([...prevData, ...newData])
      })
      .catch(err => console.log(err));
  };

  const handleRegionChange = async (e, inputValue) => {
    e.preventDefault();
    if (inputValue) {
      const newRegion = regions[inputValue];
      setWineries([]);
      setRegion(newRegion);
    }
  }

  useEffect(() => {
    getWineries();
  }, [region]);

  return (
    <div className="list-view">
      <header>
        <div className="text-box">
          <h1>Explore<br/><span>Niagara</span><br/>Wines.</h1>
        </div>
      </header>
      <main>
        <SearchForm handleRegionChange={handleRegionChange}/>
        {
          wineries < 1 ?
          <div className="loader-container"><Spinner /></div>
          :
          <div className="wineries-list-container wrapper">
            <ul className="wineries">
              {
                wineries.map((winery, i)=> <Fade><WineryCard key={winery.id} winery={winery} /></Fade>)
              }
            </ul>
            {
              wineries.length >= resultCount ?
              ""
              :
              <div className="loader-container">
                <Waypoint onEnter={getWineries}/>
                <Loader />
              </div>
            }
          </div>
        }
      </main>
    </div>
  );
};

export default WineriesListView;
