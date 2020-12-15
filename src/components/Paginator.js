import React from "react";
import { BandApi } from "lib/api";

import pag from "./Paginator.module.css";

export default class Paginator extends React.Component {
  render() {
    return (
      <div>
        <Buttons
          type="first"
          onClick={this.props.goFirst}
          color={this.props.page < 2 ? "gray" : "white"}
        />
        <Buttons
          type="left"
          onClick={this.props.goBack}
          color={this.props.page < 2 ? "gray" : "white"}
        />
        &nbsp;
        <Buttons
          type="right"
          onClick={this.props.goForv}
          color={this.props.page + 1 > this.props.max ? "gray" : "white"}
        />
        <Buttons
          type="last"
          onClick={this.props.goLast}
          color={this.props.page + 1 > this.props.max ? "gray" : "white"}
        />
        &nbsp; &nbsp;
      </div>
    );
  }
}
//<Buttons type="left" />;
function Buttons(props) {
  let button = "";
  switch(props.type) {
    case "left":
      return (<path
        fill={props.color}
        d="M20,10V14H11L14.5,17.5L12.08,19.92L4.16,12L12.08,4.08L14.5,6.5L11,10H20Z"
      />)
    case "right":
      return (<path
        fill={props.color}
          d="M4,10V14H13L9.5,17.5L11.92,19.92L19.84,12L11.92,4.08L9.5,6.5L13,10H4Z"
      />)
    default:
       return ""
  }
  return (
    <svg onClick={props.onClick} viewBox="0 0 24 24" className={pag.buttons}>
      {((props) => {
        console.log(props);

      })}
    </svg>
  );
}
