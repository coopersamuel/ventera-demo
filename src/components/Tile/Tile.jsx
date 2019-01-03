import React from 'react';
import './Tile.scss';

const Tile = () => {
  return (
    <div className="tile-container px-3">
      <div className="circle" />
      <h3>Heading</h3>
      <div className="text-center">
        Fusce non ex quis mi iaculis tristique non nec felis. Mauris efficitur
        laoreet ligula a accumsan. Donec urna tellus, pellentesque et elit vel,
        pulvinar commodo purus.
      </div>
      <button type="button" className="btn btn-sm btn-secondary mt-3">
        View details &raquo;
      </button>
    </div>
  );
};

export default Tile;
