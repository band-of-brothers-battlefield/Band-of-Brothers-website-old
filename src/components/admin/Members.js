import React from "react";
import { BandApi } from "../../api";

import styles from "./Members.module.css";
import adaptive from "../Adaptive.module.css";

// Components
import Paginator from "../Paginator.js";

function Status(props) {
  return (
    <svg viewBox="0 0 24 24" className={styles.status}>
      {props.lvl === "1" ? (
        <path
          fill="#66C264"
          d="M0.41,13.41L6,19L7.41,17.58L1.83,12M22.24,5.58L11.66,16.17L7.5,12L6.07,13.41L11.66,19L23.66,7M18,7L16.59,5.58L10.24,11.93L11.66,13.34L18,7Z"
        />
      ) : props.lvl === "2" ? (
        <path
          fill="#FFB800"
          d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"
        />
      ) : (
        <path
          fill="#C26464"
          d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"
        />
      )}
    </svg>
  );
}

function UserRow(props) {
  // let inPlatoon = props.user.origin.is_in_platoon;
  // let platoon = inPlatoon ? props.user.origin.platoon : "-";
  // let { id, name } =
  //  props.user.origin.name === "" ? { id: "-", name: "-" } : props.user.origin;

  let platoons = props.user.platoons.map((platoon, i) => {
    let j = platoon.number;
    return j;
  });

  let status = props.user.discord.inDatabaseAndDiscord ? (
    <Status lvl="1" />
  ) : props.user.inDatabase || props.user.isInPlatoon ? (
    <Status lvl="2" />
  ) : (
    <Status lvl="3" />
  );

  return (
    <tr>
      <td className={styles.bold}>{props.user.displayName}</td>
      <td>{status}</td>
      <td>{props.user.isInPlatoon ? "" + platoons.join(", ") : ""}</td>
      <td>
        {props.user.gameAdmin.isGameAdmin
          ? props.user.gameAdmin.isInAll
            ? "Admin on all"
            : "Admin on " +
              props.user.gameAdmin.servers.map((s) => s.number).join(", ")
          : ""}
      </td>
      <td className={styles.bold}>{props.user.discord.discordNick}</td>
      <td style={{ color: props.user.discord.color }}>
        {props.user.discord.roleName}
      </td>
    </tr>
  );
}

class MembersList extends React.Component {
  static contextType = BandApi;
  constructor(props) {
    super(props);
    this.state = { ready: false, list: [], page: 1, user: null };
    this.pageBack = this.pageBack.bind(this);
    this.pageForv = this.pageForv.bind(this);
    this.setPagestate = this.setPagestate.bind(this);
    this.updateUser = this.updateUser.bind(this);
  }
  async updateUser(user) {
    let api = this.context;
    let list = user.auth.is_admin
      ? await api.getListOfMembers(this.state.page)
      : [];
    this.setState((state) => ({
      user: user,
      ready: true,
      list: list,
      page: state.page
    }));
  }
  async updateList(page) {
    let api = this.context;
    if (this.state.ready) {
      if (this.state.user.auth.is_admin) {
        api
          .getListOfMembers(page)
          .then((list) => this.setPagestate(page, list));
      }
    }
  }
  pageBack() {
    if (this.state.ready) {
      if (this.state.page > 1) {
        let new_page = this.state.page - 1;
        this.updateList(new_page);
      }
    }
  }
  setPagestate(page, list) {
    if (list !== null) {
      this.setState((state) => ({
        user: state.user,
        ready: true,
        list: list,
        page: page
      }));
    }
  }
  pageForv() {
    if (this.state.ready) {
      if (this.state.page < this.state.list.num_of_pages) {
        let new_page = this.state.page + 1;
        this.updateList(new_page);
      }
    }
  }
  render() {
    let api = this.context;
    if (!this.state.ready && this.state.user == null) {
      api.user.then((u) => this.updateUser(u));
    }
    if (this.state.ready) {
      if (this.state.user.auth.is_admin) {
        return (
          <div className={adaptive.adaptive}>
            <div className={styles.header}>
              <Paginator
                goBack={this.pageBack}
                goForv={this.pageForv}
                page={this.state.page}
                max={this.state.list.num_of_pages}
              />
              <h2>Page {this.state.page}</h2>
            </div>
            <table className={styles.table}>
              <thead className={styles.thead}>
                <tr>
                  <th>Origin</th>
                  <th />
                  <th>Platoon</th>
                  <th>Game admin</th>
                  <th>Discord</th>
                  <th>Role</th>
                </tr>
              </thead>
              <tbody>
                {this.state.list.members.map((p, j) => (
                  <UserRow user={p} key={j} />
                ))}
              </tbody>
            </table>
          </div>
        );
      } else {
        window.location = "/";
      }
    } else {
      return <div className={adaptive.adaptive}>Updating...</div>;
    }
  }
}

export default function Members(props) {
  return <MembersList />;
}
