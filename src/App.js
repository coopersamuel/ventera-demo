import React, { Component } from 'react';
import 'bootstrap';
import * as Holder from 'holderjs';

import Navbar from './components/Navbar/Navbar';
import Carousel from './components/Carousel/Carousel';
import TileContainer from './components/Tile/TileContainer';
import Featurettes from './components/Featurettes/Featurettes';
import Footer from './components/Footer/Footer';
import './App.scss';

class App extends Component {
  componentDidMount() {
    // Initialize holder.js for placeholder images
    Holder.run();
  }

  render() {
    return (
      <div className="container-fluid app-container">
        <header>
          <Navbar />
        </header>
        <Carousel />
        <TileContainer />
        <Featurettes />
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}

export default App;
