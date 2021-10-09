import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./pages/navbar/Navbar";
import Product from "./pages/product/Product";
import Market from "./pages/market/Market";
import Home from "./pages/home/Home";
import Connect from "./pages/connect/Connect";

function Main() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Product" exact component={Product} />
        <Route path="/Market" exact component={Market} />
        <Route path="/Connect" exact component={Connect} />
      </Switch>
    </Router>
  );
}
export default Main;