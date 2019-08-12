import React, {  Fragment, useEffect, useState } from 'react'
import axios from 'axios'
import Spinner from '../components/Spinner';
import placeholderImg from "../img/placeholder.png"
import { Carousel } from "react-responsive-carousel";

import "react-responsive-carousel/lib/styles/carousel.min.css";


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
        console.log(resp.data)
        setWinery(resp.data)
        setLoading(false)
      })
      .catch(err => console.log(err));

    // axios
    //   .get(`https://cors-anywhere.herokuapp.com/${baseUrl}/reviews`, {
    //     headers: {
    //       Authorization: `Bearer ${token}`
    //     }
    //   })
    //   .then(resp => {
    //     setWineryReviews(resp.data)
    //     setLoading(false)
    //     console.log(resp.data)
    //   })
    //   .catch(err => console.log(err));
  }

  const myfunc = () => {
    console.log(winery.photos[0])
  }

  useEffect(() => {
    getWineryDetails();
  }, [])

  return (
    <Fragment>
      <nav>
      </nav>
      <main>
        { loading ?
          <div className="loader-container detail-loader">
            <Spinner />
          </div>
          :
          <Fragment>
              <h1 onClick={myfunc}>Click</h1>
            <div className="img-container">
              {
                winery.photos || winery.photos.length > 0 ?
                <Carousel showThumbs={false}>
                  {winery.photos.map((photo, i) => {
                    return (
                      <div>
                        <img src={photo} key={i} />
                      </div>
                    )
                  })}
                </Carousel>
                :
                <img src={placeholderImg} alt=""/>
              }
            </div>
          </Fragment>
        }
      </main>
    </Fragment>
  )
}

export default WineryDetail
