import React, { Component } from "react";
import Description from "./Description.js";
import axios from "axios";
import { Table } from 'reactstrap';

class Welcome extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isConnected: false,
      tracks: []
    };
    

  }
  componentDidMount() {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get("code");


    if (code != null) {
      const currentThis = this;
      axios.post("/preToken", { code: code }).then(function (res) {
        currentThis.setState({isConnected:true})
        currentThis.setState({tracks:res.data})    
        console.log(currentThis.state);
      });
    }
  }

  renderTracks(track){
    const {songname, artistsname, mood} = track;
    return (
    <tr>
      <th scope="row"></th>
      <td>{songname}</td>
      <td>{artistsname}</td>
      <td>{mood}</td>
    </tr>
    )
  }

  render() {
    if(this.state.isConnected){
      return (
      <Table dark>
        <thead>
        <tr>
          <th></th>
          <th>Track</th>
          <th>Artist</th>
          <th>Mood</th>
        </tr>
      </thead>
      <tbody>
        {this.state.tracks.map((track) => this.renderTracks(track))}
      </tbody>
      </Table>
      );

    }
    else{
    return (
  
      <div className="Heading">
      
        <h1>Welcome to Spotify Mood</h1>
        <Description />
      </div>
  
    );
    }
  }
}

export default Welcome;
