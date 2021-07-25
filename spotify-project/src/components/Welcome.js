import React, { Component } from "react";
import Description from "./Description.js";
import axios from "axios";

class Welcome extends React.Component {
  componentDidMount() {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get("code");

    if (code != null) {
      axios.post("/preToken", { code: code }).then(function (res) {
        console.log(res);
      });
    }
  }

  render() {
    return (
      <div className="Heading">
        <h1>Welcome to Spotify Mood</h1>
        <Description />
      </div>
    );
  }
}

export default Welcome;
