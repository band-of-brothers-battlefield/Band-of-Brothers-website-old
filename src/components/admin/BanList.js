import React from "react";
import { BandApi } from "../../api";

import styles from "./BanList.module.css";
import adaptive from "../Adaptive.module.css";
// Components

function BanRow(props) {
  return (
    <tr>
      <td>
        <img src={props.user.avatar} alt="" className={styles.avatar} />
      </td>
      <td>{props.user.displayName}</td>
      <td>{props.user.servers.map((s) => s.number).join(", ")}</td>
    </tr>
  );
}

export default class BanList extends React.Component {
  static contextType = BandApi;
  constructor(props) {
    super(props);
    this.state = { ready: false, list: [] };
  }
  async updateUser(u) {
    let api = this.context;
    if (!this.state.ready) {
      let list = u.auth.is_admin ? await api.getBanList() : [];
      this.setState({ user: u, ready: true, list: list });
    }
  }
  render() {
    let api = this.context;
    api.user.then((u) => this.updateUser(u));
    if (this.state.ready) {
      if (this.state.user.auth.is_admin) {
        return (
          <div className={adaptive.adaptive}>
            <a href="https://bandofbrothers.site/api/infoexcel?type=bannedList">
              <div className={styles.button}>Download Banlist</div>
            </a>
            <br />
            <table className={styles.table}>
              <thead>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Servers</th>
                </tr>
              </thead>
              <tbody>
                {this.state.list.players.map((p, j) => (
                  <BanRow user={p} key={j} />
                ))}
              </tbody>
            </table>
          </div>
        );
      } else {
        window.location = "/";
      }
    }
    return <div className={adaptive.adaptive}>Updating...</div>;
  }
}
