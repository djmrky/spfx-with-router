import * as React from "react";
import styles from "./App.module.scss";
import { ISpfxWithRouterProps } from "./IAppProps";
import { escape } from "@microsoft/sp-lodash-subset";

import { HashRouter, Route, Link } from "react-router-dom";

import Home from "../components/home/Home";
import About from "../components/about/About";
import Products from "../components/products/Products";
import ProductDetails from "../components/products/ProductDetails";
import Services from "../components/services/Services";

export default class SpfxWithRouter extends React.Component<ISpfxWithRouterProps, {}> {
  public render(): React.ReactElement<ISpfxWithRouterProps> {
    return (
      <HashRouter>
        <div className={styles.spfxWithRouter}>
          ROUTER DEMO
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
          </ul>
          <hr />
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/products" component={Products} />
          <Route exact path="/product/:id" component={ProductDetails} />
          <Route exact path="/product/:id/:name" component={ProductDetails} />
          <Route path="/services" component={Services} />
        </div>
      </HashRouter>
    );
  }
}
