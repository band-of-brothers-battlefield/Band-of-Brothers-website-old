import React from "react";
import bfBot from "./Donations.module.css";
import adaptive from "./Adaptive.module.css";

// Components

export default function BotPage(props) {
  return (
    <div clas={bfBot.body}>
      <div className={adaptive.adaptive}>
        <div className={bfBot.paragraph}>
          <h1>Battlefield stats bot</h1>
          <p>
            We made a Battlefield Bot that can be used by the entire battlefield
            community
          </p>
        </div>
        <div className={bfBot.paragraph}>
          <p>...</p>
        </div>
      </div>
    </div>
  );
}
