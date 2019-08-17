import React, {useEffect, useState} from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from "axios";
import WineriesListView from "./containers/WineriesListView";
import WineryDetail from "./containers/WineryDetailView";
import regions from "./data/regions";

function App() {
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

  const handleRegionChange = (e, inputValue) => {
    e.preventDefault();
    if (inputValue) {
      setWineries([]);
      setRegion(regions[inputValue]);
    }
  }

  useEffect(() => {
    getWineries();
  }, [region]);

  return (
    <Router>
      <Route path="/" exact component={() => <WineriesListView
        wineries={wineries}
        resultCount={resultCount}
        getWineries={getWineries}
        handleRegionChange={handleRegionChange}
      />} />
      <Route path="/:wineryId" exact component={WineryDetail} />
    </Router>
  );
}

export default App;
