import React from "react";
import classNames from "classnames";

// Styles
import cover from "./ImageCover.module.css";
import adaptive from "./Adaptive.module.css";

export default function Cover(props) {
  return (
    <div className={classNames(adaptive.adaptive, cover.block)}>
      <div className={cover.background}>
        <div className={cover.text}>{props.children}</div>
      </div>
    </div>
  );
}
