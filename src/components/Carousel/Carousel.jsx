import React from 'react';
import './Carousel.scss';

const Carousel = () => {
  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide"
      data-ride="carousel"
    >
      <ol className="carousel-indicators">
        <li
          data-target="#carouselExampleIndicators"
          data-slide-to="0"
          className="active"
        />
        <li data-target="#carouselExampleIndicators" data-slide-to="1" />
        <li data-target="#carouselExampleIndicators" data-slide-to="2" />
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="w-100 carousel-content-container">
            <div className="col-8 position-relative">
              <div className="carousel-content">
                <h2>Example Headline 1</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vivamus felis libero, auctor id lorem in, feugiat auctor nunc.
                  Sed euismod nulla semper, mollis sem sit amet, convallis enim.
                  Nullam rutrum vestibulum arcu, sed luctus augue lobortis eu.
                </p>
                <button type="button" className="btn btn-primary">
                  Sign Up Today
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="w-100 carousel-content-container">
            <div className="col-8 position-relative">
              <div className="carousel-content">
                <h2>Example Headline 2</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vivamus felis libero, auctor id lorem in, feugiat auctor nunc.
                  Sed euismod nulla semper, mollis sem sit amet, convallis enim.
                  Nullam rutrum vestibulum arcu, sed luctus augue lobortis eu.
                </p>
                <button type="button" className="btn btn-primary">
                  Sign Up Today
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="w-100 carousel-content-container">
            <div className="col-8 position-relative">
              <div className="carousel-content">
                <h2>Example Headline 3</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vivamus felis libero, auctor id lorem in, feugiat auctor nunc.
                  Sed euismod nulla semper, mollis sem sit amet, convallis enim.
                  Nullam rutrum vestibulum arcu, sed luctus augue lobortis eu.
                </p>
                <button type="button" className="btn btn-primary">
                  Sign Up Today
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a
        className="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
};

export default Carousel;
