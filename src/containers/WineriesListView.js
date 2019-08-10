import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";

import regions from "../components/regions"

require("dotenv").config();

const WineriesListView = () => {
  const limit = 9;
  const [region, setRegion] = useState(regions.baseRegion);
  const [offset, setOffset] = useState(0);
  const [wineries, setWineries] = useState([]);

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
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    getWineries();
  }, []);

  return (
    <div>
      <h1>Wineries: {wineries.length}</h1>
    </div>
  );
};

export default WineriesListView;
