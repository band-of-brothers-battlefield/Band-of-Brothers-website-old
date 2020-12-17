import React from "react";
import { Route } from "react-router-dom";

// Pages
import Home from "./components/Home";
import Profile from "./components/Profile";
import Members from "./components/admin/Members";
import BanList from "./components/admin/BanList";
import Servers from "./components/battlefield/Servers";
import BotPage from "./components/battlefield/BattlefieldBot";
import Donations from "./components/Donations";


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