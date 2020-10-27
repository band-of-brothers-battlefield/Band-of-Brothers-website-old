import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";

import App from "./App";

// Pages
import Home from "./components/Home.js";
import Profile from "./components/Profile.js";
import Members from "./components/admin/Members.js";
import BanList from "./components/admin/BanList.js";
import Servers from "./components/battlefield/Servers.js";
import BotPage from "./components/battlefield/BattlefieldBot.js";
import Donations from "./components/Donations.js";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App>
        <Route path="/account/">
          <Profile />
        </Route>
        <Route path="/members/">
          <Members />
        </Route>
        <Route path="/ban-list/">
          <BanList />
        </Route>
        <Route path="/servers/">
          <Servers />
        </Route>
        <Route path="/bot/">
          <BotPage />
        </Route>
        <Route path="/donations/">
          <Donations />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </App>
    </BrowserRouter>
  </React.StrictMode>,
  rootElement
);
