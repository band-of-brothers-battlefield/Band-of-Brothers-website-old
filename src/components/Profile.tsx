import * as React from "react";
import { Redirect } from "react-router-dom";
import classNames from "classnames";

import { BandApi } from "lib/api";
import { Response, Result, User, Method } from "lib/api/types";
// Components

// Styles
import adaptive from "./Adaptive.module.css";
import profile from "./Profile.module.css";
import loading from "./Loading.module.css";


enum UpdateEAIDStatus {
    Idle = "",
    Pending = "Updating Origin Name.. ",
    Failure = "Origin name can't be set."
}

interface UpdateOriginInterface {
    status: UpdateEAIDStatus;
    updating: boolean;
    error?: string;
}

interface ProfileState {
    ready: boolean;
    origin_upd: UpdateOriginInterface;
    user?: User;
}

interface HandleNameChangeInterface {
    target: HTMLInputElement;
    key: string;
}

const defaultUpdateOriginInterface: UpdateOriginInterface = {
    status: UpdateEAIDStatus.Idle,
    updating: false
}

const defaultProfileState: ProfileState = {
    ready: false,
    origin_upd: defaultUpdateOriginInterface
}

export default class Profile extends React.Component<{}, ProfileState> {
    // Load API Provider
    static contextType = BandApi;
    // Init default state
    state = defaultProfileState;
    // Update current User
    // This will basicaly put component in ready state
    updateUser(u: User) {
        // Update only if we recieved new User component
        if (this.state.user !== u)
            this.setState(
                { ...defaultProfileState, user: u, ready: true }
            );
    }
    // Check Origin name Input
    checkOriginName = (e: HandleNameChangeInterface) => {
        // Get Input Element
        let target: HTMLInputElement = e.target;
        // Check if Enter pressed and input correct
        if (e.key === "Enter" && target.reportValidity())
            // Update User EA ID
            this.updateNickname(target.value);
    }
    // Try to update user's EA ID
    async updateNickname(nickname: string) {
        let api = this.context;
        // Set pending state
        this.setState(
            s => ({
                ...s,
                ready: false,
                origin_upd: {
                    status: UpdateEAIDStatus.Pending,
                    updating: false,
                }
            })
        );
        // Update nickname
        let response: Response = await api.updateNickname(nickname);
        if (response.type === Result.Ok) {
            // On success update user object
            api.updateUserObject();
            this.setState({ ...defaultProfileState, ready: true });
        } else {
            // Else show error msg
            this.setState(
                s => ({
                    ...s,
                    ready: true,
                    origin_upd: {
                        status: UpdateEAIDStatus.Failure,
                        updating: false,
                    }
                })
            );
        }
    }
    changeOriginName = () =>  {
        this.setState(
            (state) => ({
                ...state,
                origin_upd: {
                    status: UpdateEAIDStatus.Idle,
                    updating: true,
                }
            })
        );
    }
    render() {
        let api = this.context;
        // Try Update User on each render
        api.user.then(
            (u: User) => this.updateUser(u)
        );
        // Redirect if User not signed in
        if (this.state.ready && this.state.user) {
            if (!this.state.user.auth.is_signed_in)
                return <Redirect to="/" />;
        }
        return (
            <div className={classNames(adaptive.adaptive, profile.container)}>
                <div className={profile.discord}>
                    <DiscordImage ready={this.state.ready} user={this.state.user} />
                    <div className={profile.credits}>
                        <DiscordName ready={this.state.ready} user={this.state.user} />
                    </div>
                </div>
                <div className={profile.bob}>
                    <h2>Band of Brothers</h2>
                    <p className={profile.description}>
                    Join <a href="https://discord.bandofbrothers.site/" title="Discord">Discord</a> to get all the
                    info about our clan.
                    </p>
                    <DiscordStatus ready={this.state.ready} user={this.state.user} />
                </div>
                <div className={profile.origin}>
                    <h2>Origin</h2>
                    <p className={profile.description}>
                    Link your Origin Profile here If you want to become a BoB member or
                    already one. You can also do it to get access for some features.
                    </p>
                    <OriginChangeStatus status={this.state.origin_upd.status} />
                    <OriginName
                        ready={this.state.ready}
                        user={this.state.user}
                        changing_nick={this.state.origin_upd.updating}
                        changeOriginName={this.changeOriginName}
                        checkOriginName={this.checkOriginName}
                    />
                </div>
            </div>
        );
        }
    }

interface DiscordStatusProps {
    ready: boolean;
    user?: User;
}

// Display BoB Server Discord Status or just loading prop
function DiscordStatus(props: DiscordStatusProps) {
    if (props.ready && props.user && props.user.bob) {
        // Nickanme on server and role with color
        return <span className={profile.discordname}>
            {
                DiscordNickname(
                    props.user.bob.in_server,
                    props.user.bob.nickname
                )
            }
            {
                DiscordRole(
                    props.user.bob.in_server,
                    props.user.bob.role,
                    props.user.bob.role_color
                )
            }
        </span>;
    } else {
        // Just not loaded prop
        return <span className=
            {
                classNames(
                    profile.discordname,
                    loading.darkAnimation,
                    profile.stretched
                )
            }
        ></span>
    }
}

// Helper Function to show discord nickname or suggest to join
function DiscordNickname(in_server: boolean, nickname: string): string {
    return in_server ? nickname : "Join our Discord server";
}


function DiscordRole(in_server: boolean, role: string, color: string): React.ReactChild {
    if (in_server) {
        const style = { color: color };
        return <b className={profile.role} style={style}>
            {role}
        </b>;
    }
    return <></>;
}

function DiscordName(props: DiscordStatusProps) {
    if (props.ready && props.user) {
        return <>
            <h2>
                Welcome{" "}
                <b className={profile.gray}>
                    {props.user.discord.name} #{props.user.discord.discriminator}
                </b>
            </h2>
            <Logout />
        </>;
    }
    return <span className={classNames(loading.darkAnimation, profile.stretched)} />;
}

function DiscordImage(props: DiscordStatusProps) {
    if (props.ready && props.user) {
        return <img
            className={profile.image}
            alt="Avatar"
            src={props.user.discord.avatar + "?size=256"}
        />;
    }
    return <div className={classNames(profile.image, loading.darkAnimation)} />;
}

interface OriginNameProps {
    user?: User;
    ready: boolean;
    changing_nick: boolean;
    changeOriginName: Function;
    checkOriginName: Function;
}

function OriginName(props: OriginNameProps) {
    if (props.ready && props.user && props.user.origin) {
        let OriginNameInstance = (
            <InputOriginName
                callback={props.checkOriginName}
            />
        );
        if (props.user.origin.id !== 0 && !props.changing_nick) {
            OriginNameInstance = (
                <OriginNameText
                    name={props.user.origin.name}
                    callback={props.changeOriginName}
                />
            );
        }
        return (
            <span>
                {OriginNameInstance}
                <PlatoonDisplay
                    in_platoon={props.user.origin.is_in_platoon}
                    platoon={props.user.origin.platoon}
                />
            </span>
        );
    } else {
        return <span className={
            classNames(loading.darkAnimation, profile.stretched)
        }></span>;
    }
}

function OriginNameText(props: { callback: any; name: string; }) {
  return (
    <b onClick={props.callback} className={profile.originname}>
      {props.name + " "}
    </b>
  );
}

function InputOriginName(props: { callback: any }) {
    const title =
            "Origin name must consist of English " +
            "letters, digits and symbols -, _",
        pattern = "[a-zA-Z0-9-_]*",
        pholder = "Origin name here";
    return (
        <input
            type="text"
            placeholder={pholder}
            pattern={pattern}
            title={title}
            className={profile.input}
            onKeyDown={props.callback}
        />
    );
}

function PlatoonDisplay(props: { in_platoon: boolean, platoon: string }) {
  const style = {
    color: platoonColor(props.in_platoon)
  };
  return (
    <b className={profile.platoon} style={style}>
      {platoonstate(props.in_platoon, props.platoon)}
    </b>
  );
}

function platoonColor(in_platoon: boolean) {
  return in_platoon ? "var(--green-color)" : "var(--yellow-color)";
}

function platoonstate(in_platoon: boolean, platoon: string) {
  return in_platoon ? "Platoon " + platoon : "Not in the platoon";
}

function OriginChangeStatus(props: { status: string }) {
    if (props.status === "") {
        return <></>;
    }
    return (
        <span className={profile.originUpdateStatus}>{props.status}</span>
    );
}

class Logout extends React.Component {
    static contextType = BandApi;
    logout = () => {
        let api = this.context;
        const logout_url = api.constructApiUrl(Method.logout);
        window.location.href = logout_url;
    }
    render() {
        return (
            <div className={profile.logout} onClick={this.logout}>
                Logout from profile
            </div>
        );
    }
}
