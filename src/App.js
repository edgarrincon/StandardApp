import React from "react";
import "./App.css";
import Home from "./pages/HomePage/Home";
import Services from "./pages/Services/Services";
import Portfolio from "./pages/Portfolio/Portfolio";
import MeetOdoo from "./pages/MeetOddo/MeetOddo";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import ContanctsUs from "./pages/Contacts/Contacts";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/service" component={Services} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/contacts" component={ContanctsUs} />
        <Route path="/odoo" component={MeetOdoo} />
        <Route
          path="/opensource"
          component={() => {
            window.location.href = "https://en.wikipedia.org/wiki/Open_source";
            return null;
          }}
        />
        <Route
          path="/piso4"
          component={() => {
            window.location.href =
              "https://www.instagram.com/piso4agency/?hl=es-la";
            return null;
          }}
        />
        <Route
          path="/edgar"
          component={() => {
            window.location.href = "https://edgarrincon.com/";
            return null;
          }}
        />
        <Route
          path="/victor"
          component={() => {
            window.location.href = "https://victorquintero05.github.io/";
            return null;
          }}
        />
        <Route
          path="/lacumbre"
          component={() => {
            window.location.href = "https://lacumbremarket.com/";
            return null;
          }}
        />
        <Route
          path="/piso"
          component={() => {
            window.location.href = "https://pisodeportivo.com/";
            return null;
          }}
        />
        <Route
          path="/bsi"
          component={() => {
            window.location.href = "https://installbsi.com/";
            return null;
          }}
        />
        <Route
          path="/youtube"
          component={() => {
            window.location.href =
              "https://www.youtube.com/channel/UC2i9al-U5TXgESM5Zg2RQWQ";
            return null;
          }}
        />
        <Route
          path="/instagram"
          component={() => {
            window.location.href = "https://www.instagram.com/standardsapps/";
            return null;
          }}
        />
        <Route
          path="/twitter"
          component={() => {
            window.location.href = "https://twitter.com/standardsapps";
            return null;
          }}
        />
      </Switch>
      <Redirect to="/" />
      <Footer />
    </Router>
  );
}

export default App;
