import React from "react";
import { Route } from "react-router-dom";

// Pages
import Home from "./components/Home.js";
import Profile from "./components/Profile.js";
import Members from "./components/admin/Members.js";
import BanList from "./components/admin/BanList.js";
import Servers from "./components/battlefield/Servers.js";
import BotPage from "./components/battlefield/BattlefieldBot.js";
import Donations from "./components/Donations.js";


export default function Pages() {
    return (
        <div className="page-container">
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
        </div>
    );
}