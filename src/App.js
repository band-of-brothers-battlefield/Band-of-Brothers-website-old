import React from "react";
import { BandApi, APIv, Version } from "./lib/api";

// Global styles
import "./styles.css";

// Components
import TopBar from "./components/TopBar.js";
import BottomBar from "./components/BottomBar.js";
/* import StatusCheck from "./components/StatusCheck.js"; */
import Pages from "Views";

export default function App(props) {
  return (
    <React.Fragment>
      <BandApi.Provider value={APIv(Version.Prod)}>
        <TopBar />
        <Pages />
        <BottomBar />
      </BandApi.Provider>
    </React.Fragment>
  );
}
