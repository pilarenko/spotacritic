import React, { Component } from 'react';
import axios from 'axios';

import Navbar from '../components/Navbar/Navbar';
import Layout from '../components/Layout/Layout';
import Footer from '../components/Footer/Footer';

import classes from './App.css';

class App extends Component {
  state = {
    error: null,
    albums: [],
  }

  componentDidMount() {
    axios.get('https://spotacritic.firebaseio.com/albums/-LO5FfbrZ1ESkI4Tu3HB.json')
    .then(response => {
      this.setState({albums: response.data})
    })
    .catch(error => {
      this.setState({error: true});
    });

    // let generateRandomString = function(length) {
    //   let text = '';
    //   let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    
    //   for (let i = 0; i < length; i++) {
    //     text += possible.charAt(Math.floor(Math.random() * possible.length));
    //   }
    //   return text;
    // };
    
    // let state = generateRandomString(16);

    // const spotifyParams = {
    //   scope: 'user-read-private user-read-email',
    //   client_id: '94903f5572374cfab607bdbe30db9156',
    //   redirect_uri: 'https://peelar.netlify.com/callback',
    // };

    // axios.get('https://accounts.spotify.com/authorize?', spotifyParams)
    //   .then(response => {
    //     console.log(response);
    //   })
    //   .catch(error => {
    //     // console.log(error);
    //   });
  };


  render() {
    return (
      <div className={classes.App}>
        <Navbar />
        <Layout albums={this.state.albums} />
        <Footer />
      </div>
    );
  }
}

export default App;
