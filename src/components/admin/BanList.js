import React from "react";

import { BandApi } from "lib/api";
import { Result } from "lib/api/types";

import styles from "./BanList.module.css";
import adaptive from "../Adaptive.module.css";
// Components

function BanRow(props) {
    return (
        <tr style={{ display: !props.user.display ? "" : "none" }}>
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
        this.onSearch = this.onSearch.bind(this);
    }
    onSearch(e) {
        let val = e.target.value;
        this.setState(s => ({ ...s, list: { ...s.list, players: s.list.players.map(p => ({ ...p, display: !p.displayName.toLowerCase().includes(val.toLowerCase()) })) } }));
    }
    async updateUser(u) {
        let api = this.context;
        if (!this.state.ready) {
            let list = {};
            if (u.auth.is_admin) {
                let response = await api.getBanList();
                if (response.type == Result.Ok) {
                    list = response.payload;
                } else {
                    console.log("Error while getting Ban List:", response.error);
                }
            }
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
                        <h2>Ban list</h2>
                        <p>List of banned players on every server.<br /> {this.state.list.players.length} players are banned so far.</p>
                        <div className={styles.header}>
                            <a href="https://bandofbrothers.site/api/infoexcel?type=bannedList">
                                <div className={styles.button}>
                                    <svg className={styles.icon} viewBox="0 0 24 24">
                                        <path fill="currentColor" d="M5,20H19V18H5M19,9H15V3H9V9H5L12,16L19,9Z" />
                                    </svg>
                  Download Banlist
                </div>
                            </a>
                            <SearchBan callback={this.onSearch} />
                        </div>
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

class SearchBan extends React.Component {
    render() {
        return (
            <div className={styles.search}>
                <input type="text" placeholder="Type to search" onChange={this.props.callback} />
            </div>
        );
    }
}