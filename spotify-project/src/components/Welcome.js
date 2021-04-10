import React, { Component } from 'react';
import Description from './Description.js';


class Welcome extends React.Component {
    render (){
        return (
        <div className = "Heading">
            <h1>Welcome to Spotify Project</h1>
                <Description />
        </div>
        )
    }
}

export default Welcome;

