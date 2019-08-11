import React, { useEffect, useState } from "react";
import axios from "axios";

import Header from "../components/Header"
import regions from "../components/regions"
import Spinner from "../components/Spinner";
import WineryList from "../components/WineryList"
import PagesBtns from "../components/PagesBtns"


require("dotenv").config();

const WineriesListView = () => {
  const [loading, setLoading] = useState(true);
  const [region, setRegion] = useState(regions.baseRegion);
  const [offset, setOffset] = useState(0);
  const [wineries, setWineries] = useState([]);
  const [wineriesCount, setWineriesCount] = useState(0);
  const [activePage, setActivePage] = useState(1);
  const limit = 18;
  const pages = Math.ceil(wineriesCount/limit)
  
  const getWineries = async () => {
    const token = process.env.REACT_APP_YELP_API_KEY;
    const encodedRegion = encodeURIComponent(region);
    const baseUrl = `https://api.yelp.com/v3/businesses/search?limit=${limit}&offset=${offset}&location=${encodedRegion}&term=winery/`;

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
    setActivePage(pageNum);
    console.log(activePage)
  }

  useEffect(() => {
    getWineries();
  }, [offset]);

  return (
    <div>
      <Header />
      <main>
        {
          loading ?
          <Spinner />
          :
          <div className="wineries-list-container wrapper">
            <WineryList wineries={wineries} wineriesCount={wineriesCount}/>
            {
              pages > 1 ?
              <PagesBtns pages={pages} handlePageChange={handlePageChange} activePage={activePage} />
              :
              ""
            }
          </div>
        }
      </main>
    </div>
  );
};

export default WineriesListView;
