import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import WineriesListView from "./containers/WineriesListView"
import WineryDetail from "./containers/WineryDetailView"


function App() {
  return (
      <Router>
        <Route path="/" exact component={WineriesListView}/>
        <Route path="/:wineryId" exact component={WineryDetail} />
      </Router>
  );
}

export default App;
