import React from "react";
import { BandApi, APIv, Version } from "./api";

// Global styles
import "./styles.css";

// Components
import TopBar from "./components/TopBar.js";
import BottomBar from "./components/BottomBar.js";
import StatusCheck from "./components/StatusCheck.js";

export default function App(props) {
  return (
    <React.Fragment>
      <BandApi.Provider value={APIv(Version.Dev)}>
        <TopBar />
        <div className="page-container">{props.children}</div>
        <StatusCheck />
        <BottomBar />
      </BandApi.Provider>
    </React.Fragment>
  );
}
