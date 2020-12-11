import React from "react";
import classNames from "classnames";

import { BandApi } from "lib/api";
import { Result } from "lib/api/types";

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

function Arrow(props) {
    return (
        <svg viewBox="0 0 24 24" className={classNames({ [styles.arrow]: true, [styles.rotated]: props.r, [styles.hidden]: !props.h })}>
            <path fill="currentColor" d="M7,10L12,15L17,10H7Z" />
        </svg>
    )
}

function ComponentStatus(props) {
    return (<span className={styles.statusCode}>{props.t}</span>);
}

function FakeMemberRow(props) {
    return (
        <tr>
            <td className={styles.bold}></td>
            <td></td>
            <td></td>
            <td></td>
            <td className={styles.bold}></td>
            <td></td>
        </tr>
    );
}


function UserRow(props) {
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
        this.state = { code: 0, list: [], sort: "displayName", reverseSort: false, user: null, status: "Updating..." };
        this.updateUser = this.updateUser.bind(this);
        this.updateList = this.updateList.bind(this);
    }
    async updateUser(user) {
        let api = this.context;
        this.setState((state) => ({
            ...state,
            user: user,
            code: 2,
        }));
    }
    updateList(sort) {
        if (this.state.code < 5) return;
        var reverse = this.state.reverseSort;
        if (sort == this.state.sort) {
            reverse = !reverse;
        }
        this.setState(s => ({ ...s, sort: sort, reverseSort: reverse, status: "Updating list..", code: 4 }));
    }
    async getList() {
        let api = this.context;
        let response = await api.getListOfMembers(this.state.sort, this.state.reverseSort);
        if (response.type == Result.Ok) {
            this.setState(s => (
                { ...s, list: response.payload, code: 5, status: "" }
            ));
        } else {
            this.setState(s => (
                { ...s, code: -1, status: `Error: ${response.error}` }
            ));
        }
    }
    clickableRow(name, title) {
        return (
            <th className={styles.clickable} onClick={() => this.updateList(name)}>
                <div className={styles.row}>
                    <span>{title}</span>
                    <Arrow h={(this.state.sort == name)} r={this.state.reverseSort} />
                </div>
            </th>
        );
    }
    componentDidMount() {
        let api = this.context;
        // Component just loaded
        if (this.state.code === 0) {
            this.setState((state) => ({
                ...state,
                status: "Fetching user data",
                code: 1
            }));
        }
    }
    componentDidUpdate() {
        let api = this.context;
        // Load User
        if (this.state.code === 1) {
            api.user.then((u) => this.updateUser(u));
        }
        // User loaded
        if (this.state.code === 2) {
            // If not an admin
            if (!this.state.user.auth.is_admin) {
                this.setState((state) => ({
                    ...state,
                    status: "Not an Admin!",
                    code: 3
                }));
            } else {
                this.setState(s => ({ ...s, status: "Updating list..", code: 4 }));
            }
        }
        // Load list
        if (this.state.code === 4) {
            this.getList();
        }
    }
    render() {
        // Get API
        let api = this.context;
        // Redirect
        if (this.state.code === 3) {
            window.location = "/";
        }
        // Loaded state
        let loaded = this.state.code > 4;
        // Fake list of members
        let fakeList = [<FakeMemberRow />];
        // List of members (or fake one)
        let list = loaded ? this.state.list.members.map((p, j) => (
            <UserRow user={p} key={j} />
        )) : fakeList;
        // Render component
        return (
            <div className={adaptive.adaptive}>
                <div className={styles.header}>
                    <h2>Member list</h2>
                    <ComponentStatus t={this.state.status} />
                </div>
                <table className={styles.table}>
                    <thead className={styles.thead}>
                        <tr>
                            {this.clickableRow("displayName", "Origin")}
                            <th />
                            {this.clickableRow("firstPlatoon", "Platoon")}
                            {this.clickableRow("isGameAdmin", "Game admin")}
                            {this.clickableRow("inDiscord", "Discord")}
                            <th>Role</th>
                        </tr>
                    </thead>
                    <tbody>{list}</tbody>
                </table>
            </div>
        );
    }


}

export default function Members(props) {
    return <MembersList />;
}
