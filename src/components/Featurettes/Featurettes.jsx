import React from 'react';
import './Featurettes.scss';

const Featurettes = () => {
  return (
    <section className="row justify-content-center pt-5">
      <div className="col-8">
        <div className="divider-line w-100 my-5" />
        <div className="row align-items-center py-5">
          <div className="col-md-12 col-lg-7">
            <div>
              <div className="featurette-heading">
                First featurette heading.
                <span className="highlight"> It'll blow your mind.</span>
              </div>
              <p className="featurette-text pt-2">
                Vivamus ultricies sodales urna, at fringilla dolor commodo ac.
                Suspendisse sollicitudin lobortis ante eu maximus. Maecenas
                iaculis metus in diam maximus ornare.
              </p>
            </div>
          </div>
          <div className="col-md-12 col-lg-5">
            <img src="holder.js/500x500" className="img-fluid" />
          </div>
        </div>
        <div className="divider-line w-100 my-5" />
        <div className="row align-items-center py-5">
          <div className="col-md-12 col-lg-5 reverse">
            <img src="holder.js/500x500" className="img-fluid" />
          </div>
          <div className="col-md-12 col-lg-7">
            <div>
              <div className="featurette-heading">
                Oh yeah, it's that good.
                <span className="highlight"> See for yourself.</span>
              </div>
              <p className="featurette-text pt-2">
                Vivamus ultricies sodales urna, at fringilla dolor commodo ac.
                Suspendisse sollicitudin lobortis ante eu maximus. Maecenas
                iaculis metus in diam maximus ornare.
              </p>
            </div>
          </div>
        </div>
        <div className="divider-line w-100 my-5" />
        <div className="row align-items-center py-5">
          <div className="col-md-12 col-lg-7">
            <div>
              <div className="featurette-heading">
                And lastly, this one.
                <span className="highlight"> Checkmate.</span>
              </div>
              <p className="featurette-text pt-2">
                Vivamus ultricies sodales urna, at fringilla dolor commodo ac.
                Suspendisse sollicitudin lobortis ante eu maximus. Maecenas
                iaculis metus in diam maximus ornare.
              </p>
            </div>
          </div>
          <div className="col-md-12 col-lg-5">
            <img src="holder.js/500x500" className="img-fluid" />
          </div>
        </div>
        <div className="divider-line w-100 my-5" />
      </div>
    </section>
  );
};

export default Featurettes;
