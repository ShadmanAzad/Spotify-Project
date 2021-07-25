import React from 'react';



class Description extends React.Component {
    render () {
        return (
            <div className = "box">
        <p className = "firstDescrip">
            Find the mood for your top tracks on your Spotfiy. By clicking the button, log into your spotify account, the application will analyze your listening history and the mood for your top tracks will be shown.
        </p>
        <div className ="buttonPad">
        <a href="/login">
            <button className = "button">Connect to Spotify</button>
        </a>
        </div>
        </div>
        );
    }
}
export default Description;