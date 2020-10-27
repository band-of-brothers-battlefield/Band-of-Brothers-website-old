import React from "react";
import { BandApi } from "../api";
import { Link } from "react-router-dom";
import classNames from "classnames";

// Styles
import bar from "./TopBar.module.css";
import adaptive from "./Adaptive.module.css";
import loading from "./Loading.module.css";

function Title() {
  return (
    <Link to="/" title="Main page">
      <h1>Band of Brothers</h1>
    </Link>
  );
}

function PageLink(props) {
  return (
    <BandApi.Consumer>
      {(api) =>
        // A -> B = !A || B
        !props.v || api.version % 1000 >= props.v ? (
          <Link to={props.to} title={props.text}>
            {props.text}
          </Link>
        ) : (
          ""
        )
      }
    </BandApi.Consumer>
  );
}

function AdminPageLink(props) {
  return (
    <Link to={props.to} title={props.text}>
      {props.text}
      {/* <svg viewBox="0 0 24 24" className={bar.restrictedIcon}>
        <path
          fill="currentColor"
          d="M18,8A2,2 0 0,1 20,10V20A2,2 0 0,1 18,22H6C4.89,22 4,21.1 4,20V10A2,2 0 0,1 6,8H15V6A3,3 0 0,0 12,3A3,3 0 0,0 9,6H7A5,5 0 0,1 12,1A5,5 0 0,1 17,6V8H18M12,17A2,2 0 0,0 14,15A2,2 0 0,0 12,13A2,2 0 0,0 10,15A2,2 0 0,0 12,17Z"
        />
      </svg> */}
    </Link>
  );
}

function uuidv4() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

class LinkMenu extends React.Component {
  state = { opened: false };
  openMenu = this.openMenu.bind(this);
  closeMenu = this.closeMenu.bind(this);
  openEnterMenu = this.openEnterMenu.bind(this);
  id = "open-menu-" + uuidv4();
  static contextType = BandApi;
  componentWillMount() {
    document.body.addEventListener("click", this.closeMenu);
  }
  componentWillUnmount() {
    document.body.removeEventListener("click", this.closeMenu);
  }
  openEnterMenu(ev) {
    ev.preventDefault();
    if (ev.key === "Enter") this.openMenu();
  }
  openMenu() {
    this.setState((state) => ({ opened: !state.opened }));
  }
  closeMenu(ev) {
    if (ev.target.id !== this.id) this.setState({ opened: false });
  }
  render() {
    let api = this.context;
    return !this.props.v || api.version % 1000 >= this.props.v ? (
      <div
        className={classNames(
          bar.menu,
          this.state.opened ? bar.opened : bar.closed
        )}
      >
        <div
          className={bar.menuHead}
          onClick={this.openMenu}
          onKeyPress={this.openEnterMenu}
          id={this.id}
          tabIndex="0"
        >
          {this.props.text}
          <svg viewBox="0 0 24 24" className={bar.arrow}>
            {this.state.opened ? (
              <path
                fill="currentColor"
                d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z"
              />
            ) : (
              <path
                fill="currentColor"
                d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"
              />
            )}
          </svg>
        </div>
        <div className={bar.menuList}>{this.props.children}</div>
      </div>
    ) : (
      ""
    );
  }
}

class AdminLinks extends React.Component {
  static contextType = BandApi;
  state = { ready: false };
  updateUser(u) {
    if (!this.state.ready) this.setState({ user: u, ready: true });
  }
  render() {
    let api = this.context;
    let user = api.user;
    user.then((u) => this.updateUser(u));
    if (this.state.ready) {
      if (this.state.user.auth.is_signed_in && this.state.user.auth.is_admin) {
        return (
          <LinkMenu text="Administration">
            <AdminPageLink
              onClick={this.openMenu}
              to="/members/"
              text="Members"
            />
            <AdminPageLink
              onClick={this.openMenu}
              to="/ban-list/"
              text="Ban list"
            />
          </LinkMenu>
        );
      }
    }
    return <React.Fragment />;
  }
}

class UserBage extends React.Component {
  static contextType = BandApi;
  constructor(props) {
    super(props);
    this.state = { ready: false };
    this.login = this.login.bind(this);
  }
  updateUser(u) {
    if (!this.state.ready) this.setState({ user: u, ready: true });
  }

  render() {
    let api = this.context;
    let user = api.user;
    user.then((u) => this.updateUser(u));

    if (this.state.ready) {
      if (this.state.user.auth.is_signed_in) {
        return (
          <div className={bar.login}>
            <Link to="/account/" title="Open profile">
              <div className={bar.imageBack} />
              <img
                src={this.state.user.discord.avatar + "?size=32"}
                className={bar.smallimg}
                alt=""
              />
              <span className={bar.discordName}>
                {this.state.user.discord.name}
              </span>
              <b className={bar.gray}>
                &#160;#
                {this.state.user.discord.discriminator}
              </b>
            </Link>
          </div>
        );
      } else {
        return (
          <div className={bar.login} tabIndex="0">
            <span
              onClick={this.login}
              className={bar.loginButton}
              title="Sign in"
            >
              Log in
            </span>
          </div>
        );
      }
    }
    return (
      <div className={classNames(bar.login, loading.animation, bar.stretch)} />
    );
  }
  login() {
    let api = this.context;
    api.openLoginPage();
  }
}

export default function TopBar() {
  return (
    <div className={bar.container}>
      <div className={classNames(bar.inner, adaptive.adaptive)}>
        <Title />
        <div className={bar.links}>
          <PageLink to="/donations/" text="Donations" />
          <a href="https://discord.gg/V46eKGF" title="Join our Discord">
            Discord
          </a>
          <LinkMenu text="Battlefield" v={103}>
            <PageLink to="/bot/" text="Stat bot" />
            <PageLink to="/servers/" text="Servers" />
          </LinkMenu>
          <AdminLinks />
        </div>
        <UserBage />
      </div>
    </div>
  );
}
