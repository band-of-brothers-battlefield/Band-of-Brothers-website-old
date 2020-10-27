import React from "react";

import adaptive from "../Adaptive.module.css";
import servers from "./Servers.module.css";

// Components

export default function Servers(props) {
  return (
    <div className={adaptive.adaptive}>
      <div className={servers.body}>
        <h2>Battlefield 1</h2>
        <p></p>
      </div>
    </div>
  );
}
