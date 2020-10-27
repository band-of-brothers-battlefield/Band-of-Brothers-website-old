import React from "react";

// Components
import Cover from "./ImageCover.js";

// Styles
import adaptive from "./Adaptive.module.css";
import home from "./Home.module.css";

function LabeledPoint(props) {
  return (
    <div>
      <img src="" alt={props.num} />
      <span>{props.text}</span>
    </div>
  );
}

export default function Home(props) {
  return (
    <React.Fragment>
      <Cover>
        Meet Band of Brothers
        <br />
        Renewed
      </Cover>
      <div className={adaptive.adaptive}>
        <div className={home.paragraph}>
          <h2>About us</h2>
          <p>
            Band of Brothers clan was initially found in 2018 by Ghost_shot. Now
            it is being updated with more Quality-of-life improvements for
            members and non members alike.
            <br />
            We'd like to see this renewed community rise with more activity,
            hacker-free servers, and more fun for all of you.
          </p>
        </div>
        <div className={home.paragraph}>
          <h2>Join community</h2>
          <p>
            Want to join our Band? Just make sure to join our new discord
            server, login on this website using your discord account and add
            origin nickname in your profile page. Then make a request inside a
            platoon menu.
            <br />
            If all these steps are done, you will be accepted to the community.
          </p>
          <div>
            <LabeledPoint text="Join our Discord server" num="One" />
          </div>
        </div>
        <div className={home.paragraph}>
          <h2>Become a BoB staff</h2>
          <p>
            All members that are active and help us in seeding servers have a
            chance to became an administrator. We will be looking for these
            players and contact them. Every month we update admin and managment
            teams by criteria.
          </p>
        </div>
      </div>
    </React.Fragment>
  );
}
