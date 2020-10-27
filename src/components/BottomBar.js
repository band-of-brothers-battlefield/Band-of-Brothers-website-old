import React from "react";
import { BandApi } from "../api";
import { Link } from "react-router-dom";
import classNames from "classnames";

// Styles
import bar from "./BottomBar.module.css";
import adaptive from "./Adaptive.module.css";

export default function BottomBar() {
  return (
    <div className={bar.container}>
      <div className={adaptive.adaptive}>
        <p>
          This website was developed with much love by BoB members.
          <br />
          Copyright Band of Brothers, 2020
        </p>
      </div>
    </div>
  );
}
