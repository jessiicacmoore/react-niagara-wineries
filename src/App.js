import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import IndexView from "./containers/IndexView"
import WineriesListView from "./containers/WineriesListView"


function App() {
  return (
    <div>
      <Router>
        <Route path="/" exact component={IndexView} />
        <Route path="/wineries" component={WineriesListView} />
      </Router>
    </div>
  );
}

export default App;
