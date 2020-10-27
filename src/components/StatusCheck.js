import React from "react";
import { BandApi } from "../api";

import styles from "./StatusCheck.module.css";

export default class StatusCheck extends React.Component {
  static contextType = BandApi;
  state = { ready: false };
  updateUser(u) {
    if (!this.state.ready) this.setState({ ready: true });
  }
  render() {
    let api = this.context;
    api.user.then((u) => this.updateUser(u));
    if (this.state.ready) {
      if (!api.isWorking) {
        return (
          <StatusMessage
            text="
            Our internal server is currently down."
          />
        );
      }
    }
    return <div style={{ display: "none" }}></div>;
  }
}

function StatusMessage(props) {
  return <div className={styles.popup}>{props.text}</div>;
}
