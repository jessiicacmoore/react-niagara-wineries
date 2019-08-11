import React, { useEffect, useState } from "react";
import axios from "axios";
import { Waypoint } from 'react-waypoint';

import Header from "../components/Header"
import regions from "../components/regions"
import Spinner from "../components/Spinner";
import Loader from "../components/Loader";
import WineryList from "../components/WineryList"


require("dotenv").config();

const WineriesListView = () => {
  const [loading, setLoading] = useState(true);
  const [region, setRegion] = useState(regions.baseRegion);
  const [offset, setOffset] = useState(0);
  const [wineries, setWineries] = useState([]);
  const [wineriesCount, setWineriesCount] = useState(0);
  const [activePage, setActivePage] = useState(1);
  const limit = 18;

  
  const getWineries = async () => {
    const token = process.env.REACT_APP_YELP_API_KEY;
    const baseUrl = `https://api.yelp.com/v3/businesses/search?limit=${limit}&offset=${offset}&location=${region.query}&term=wineries/`;
    console.log("getting wineries")
    axios
      .get(`https://cors-anywhere.herokuapp.com/${baseUrl}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(resp => {
        setWineriesCount(resp.data.total);
        setLoading(false);
        const newData = resp.data.businesses;
        const prevData = wineries;
        setWineries([...prevData, ...newData])
      })
      .catch(err => console.log(err));
  };

  const handleLoadMoreWineries = () => {
    setOffset(activePage*limit);
    setActivePage(activePage+1)
  }

  const handleRegionChange = async (e, inputValue) => {
    e.preventDefault();
    const newRegion = regions[inputValue];
    setLoading(true);
    setWineries([]);
    setRegion(newRegion);
    setActivePage(1);
    setOffset(0);
    getWineries();
  }

  useEffect(() => {
    getWineries();
  }, [offset]);

  return (
    <div>
      <Header handleRegionChange={handleRegionChange}/>
      <main>
        {
          loading ?
          <Spinner />
          :
          <div className="wineries-list-container wrapper">
            <WineryList wineries={wineries} wineriesCount={wineriesCount}/>
            {wineriesCount <= wineries.length ?
              ""
              : 
              <div className="loader-container">
                <Waypoint onEnter={handleLoadMoreWineries}/>
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
