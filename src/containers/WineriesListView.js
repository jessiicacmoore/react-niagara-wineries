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

const WineriesListView = ({wineries, resultCount, getWineries, handleRegionChange}) => {
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
