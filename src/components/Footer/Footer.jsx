import React from 'react';

let Footer = () => (
  <section className="row justify-content-center py-5">
    <div className="col-8">
      <div className="row align-items-center pb-3">
        <div className="col-6">
          <span className="text-muted">&copy; 2017-2018 Company, Inc. </span>
          &middot;
          <a href="#"> Privacy </a>
          &middot;
          <a href="#"> Terms </a>
        </div>
        <div className="col-6 justify-content-end">
          <a href="#" className="float-right">
            Back to top
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default Footer;
