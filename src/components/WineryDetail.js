import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Spinner from './Spinner';

require("dotenv").config();


const WineryDetail = ({wineryId}) => {

  const getWineryDetail = () => {
    const token = process.env.REACT_APP_YELP_API_KEY;
    const baseUrl = `https://api.yelp.com/v3/businesses/${wineryId}`;

    axios
      .get(`https://cors-anywhere.herokuapp.com/${baseUrl}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(resp => {
        console.log(resp.data)
      })
      .catch(err => console.log(err));
  }

  useEffect(() => {
    getWineryDetail();
  }, [])

  return (
    <div>
      <h1></h1>
    </div>
  )
}

export default WineryDetail
