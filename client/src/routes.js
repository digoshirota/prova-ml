import React from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import { Search } from './search/search';
import {ProductList} from "./list/ProductList";
import {Detail} from "./DetailProduct/detail";


function Routes() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Search} />
        <Route exact path="/items" component={ProductList} />
        <Route path="/items/:id" component={Detail} />
      </div>
    </Router>	
  );
}

export default Routes;