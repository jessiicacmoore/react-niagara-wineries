import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";

import regions from "../components/regions"
import Spinner from "../components/Spinner";
import WineryList from "../components/WineryList"

require("dotenv").config();

const WineriesListView = () => {
  const [loading, setLoading] = useState(true);
  const [region, setRegion] = useState(regions.baseRegion);
  const [offset, setOffset] = useState(0);
  const [wineries, setWineries] = useState([]);
  const [wineriesCount, setWineriesCount] = useState(0);
  const limit = 10;
  const pages = Math.ceil(wineriesCount/limit)
  
  const getWineries = async () => {
    const token = process.env.REACT_APP_YELP_API_KEY;
    const encodedRegion = encodeURIComponent(region);
    const baseUrl = `https://api.yelp.com/v3/businesses/search?limit=${limit}&offset=${offset}&location=${encodedRegion}&term=wineries/`;

    axios
      .get(`https://cors-anywhere.herokuapp.com/${baseUrl}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(resp => {
        setWineries(resp.data.businesses);
        setWineriesCount(resp.data.total);
        setLoading(false);
      })
      .catch(err => console.log(err));
  };

  const handlePageChange = (pageNum) => {
    const newOffset = (pageNum - 1) * limit
    setOffset((pageNum-1)*limit);
    setLoading(true);
  }

  useEffect(() => {
    getWineries();
  }, [offset]);

  return (
    <div>
      <main>
        <h1>Pages: {pages}</h1>
        {
          loading ?
          <Spinner />
          :
          <Fragment>
            <h2>Wineries: {wineriesCount}</h2>
            <WineryList wineries={wineries} wineriesCount={wineriesCount} pages={pages} handlePageChange={handlePageChange}/>
          </Fragment>
        }
      </main>
    </div>
  );
};

export default WineriesListView;
