import React from 'react';

import Tile from './Tile';

const TileContainer = () => {
  return (
    <section className="row justify-content-center pt-5">
      <div className="col-8">
        <div className="row">
          <div className="col-md-12 col-lg-4 mb-5">
            <Tile />
          </div>
          <div className="col-md-12 col-lg-4 mb-5">
            <Tile />
          </div>
          <div className="col-md-12 col-lg-4 mb-5">
            <Tile />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TileContainer;
