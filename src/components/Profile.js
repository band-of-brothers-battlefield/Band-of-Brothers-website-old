import React from "react";
import classNames from "classnames";
import { BandApi } from "../api";
// Components

// Styles
import adaptive from "./Adaptive.module.css";
import profile from "./Profile.module.css";
import loading from "./Loading.module.css";

// function ArrowRight() {
//   return (
//     <svg style={{ width: "24px", height: "24px" }} viewBox="0 0 24 24">
//       <path
//         fill="currentColor"
//         d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"
//       />
//     </svg>
//   );
// }

class Logout extends React.Component {
  static contextType = BandApi;
  logout = this.logout.bind(this);
  logout() {
    window.location = "//bandofbrothers.site/api/logout/"
  }
  render() {
    return (
      <div className={profile.logout} onClick={this.logout}>
        Logout from profile
      </div>
    );
  }
}

class ProfileComponent extends React.Component {
  static contextType = BandApi;
  constructor(props) {
    super(props);
    this.state = { ready: false, changing_nick: false };
    this.checkOriginName = this.checkOriginName.bind(this);
    this.changeOriginName = this.changeOriginName.bind(this);
  }
  updateUser(u) {
    if (!this.state.ready)
      this.setState({ user: u, ready: true, changing_nick: false });
  }
  checkOriginName(e) {
    if (e.key === "Enter" && e.target.reportValidity())
      this.updateNickname(e.target.value);
  }
  async updateNickname(n) {
    let api = this.context;
    await api.updateNickname(n);
    this.setState({ ready: false, changing_nick: false });
  }
  changeOriginName() {
    this.setState((state) => ({
      user: state.user,
      ready: state.ready,
      changing_nick: true
    }));
  }
  render() {
    let api = this.context;
    let user = api.user;
    user.then((u) => this.updateUser(u));

    if (this.state.ready) {
      if (!this.state.user.auth.is_signed_in) window.location = "/";
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
          <OriginName
            ready={this.state.ready}
            user={this.state.user}
            changing_nick={this.state.changing_nick}
            changeOriginName={this.changeOriginName}
            checkOriginName={this.checkOriginName}
          />
        </div>
      </div>
    );
  }
}

function DiscordStatus(props) {
  return props.ready ? (
    <span className={profile.discordname}>
      {DiscordNickname(props.user.bob.in_server, props.user.bob.nickname)}
      {DiscordRole(
        props.user.bob.in_server,
        props.user.bob.role,
        props.user.bob.role_color
      )}
    </span>
  ) : (
    <span
      className={classNames(
        profile.discordname,
        loading.darkAnimation,
        profile.stretched
      )}
    ></span>
  );
}

function DiscordNickname(in_server, nickname) {
  return in_server ? nickname : "Join our Discord server";
}

function DiscordRole(in_server, role, color) {
  const style = {
    color: color
  };
  return in_server ? (
    <b className={profile.role} style={style}>
      {role}
    </b>
  ) : (
    ""
  );
}

function DiscordName(props) {
  return props.ready ? (
    <React.Fragment>
      <h2>
        Welcome{" "}
        <b className={profile.gray}>
          {props.user.discord.name} #{props.user.discord.discriminator}
        </b>
      </h2>
      <Logout />
    </React.Fragment>
  ) : (
    <span className={classNames(loading.darkAnimation, profile.stretched)} />
  );
}

function DiscordImage(props) {
  return props.ready ? (
    <img
      className={profile.image}
      alt="Avatar"
      src={props.user.discord.avatar + "?size=256"}
    />
  ) : (
    <div className={classNames(profile.image, loading.darkAnimation)} />
  );
}

function OriginName(props) {
  return props.ready ? (
    <span>
      {props.user.origin.id !== 0 && !props.changing_nick ? (
        <OriginNameText
          name={props.user.origin.name}
          callback={props.changeOriginName}
        />
      ) : (
        <InputOriginName callback={props.checkOriginName} />
      )}
      <PlatoonDisplay
        in_platoon={props.user.origin.is_in_platoon}
        platoon={props.user.origin.platoon}
      />
    </span>
  ) : (
    <span
      className={classNames(loading.darkAnimation, profile.stretched)}
    ></span>
  );
}

function OriginNameText(props) {
  return (
    <b onClick={props.callback} className={profile.originname}>
      {props.name + " "}
    </b>
  );
}

function InputOriginName(props) {
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

function PlatoonDisplay(props) {
  const style = {
    color: platoonColor(props.in_platoon)
  };
  return (
    <b className={profile.platoon} style={style}>
      {platoonstate(props.in_platoon, props.platoon)}
    </b>
  );
}

function platoonColor(in_platoon) {
  return in_platoon ? "var(--green-color)" : "var(--yellow-color)";
}

function platoonstate(in_platoon, platoon) {
  return in_platoon ? "Platoon " + platoon : "Not in the platoon";
}

export default function Profile(props) {
  return <ProfileComponent />;
}
