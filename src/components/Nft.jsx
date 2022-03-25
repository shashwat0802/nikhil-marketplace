import React from 'react';
import wizard from '../images/website wizard 1.svg';
import women from '../images/bitch.svg';
import john from '../images/john_wick.svg';
import jack from '../images/jacketone.svg';

export default function Nft() {
  return (
    <section id="#nft" className="my-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-12 mt-2">
            <div className="d-flex justify-content-center">
              {' '}
              <img src={wizard} alt="" className="img-fluid" />
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 mt-2">
            <div className="d-flex justify-content-center">
              {' '}
              <img src={women} alt="" className="img-fluid" />
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 mt-2">
            <div className="d-flex justify-content-center">
              {' '}
              <img src={john} alt="" className="img-fluid" />
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 mt-2">
            <div className="d-flex justify-content-center">
              <img src={jack} alt="" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
