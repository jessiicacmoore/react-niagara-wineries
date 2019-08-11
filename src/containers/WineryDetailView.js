import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Spinner from '../components/Spinner';

require("dotenv").config();


const WineryDetail = (props) => {
    const wineryId = props.match.params.wineryId;
    const [loading, setLoading] = useState(true)
    const [winery, setWinery] = useState({})
    const [wineryReviews, setWineryReviews] = useState({})

  const getWineryDetails = () => {
    const token = process.env.REACT_APP_YELP_API_KEY;
    const baseUrl = `https://api.yelp.com/v3/businesses/${wineryId}`;
  
    axios
      .get(`https://cors-anywhere.herokuapp.com/${baseUrl}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(resp => {
        setWinery(resp.data)
      })
      .catch(err => console.log(err));

    axios
      .get(`https://cors-anywhere.herokuapp.com/${baseUrl}/reviews`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(resp => {
        setWineryReviews(resp.data)
        setLoading(false)
      })
      .catch(err => console.log(err));
  }

  useEffect(() => {
    getWineryDetails();
  }, [])

  return (
    <div>
      { loading ?
        <Spinner />
        :
        <h1>{winery.name}</h1>
      }
    </div>
  )
}

export default WineryDetail
