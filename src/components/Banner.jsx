import React from 'react';
import mainLanding from '../images/Main landing pic.svg';
import disc1 from '../images/disc 1.svg';
import twitter from '../images/twitter btn.svg';

export default function Banner() {
  return (
    <section id="banner">
      <div className="container ">
        <div className="row">
          <div className="col-12 col-md-6 d-flex justify-content-center flex-column">
            <h2 className="text-white Questrian fw-normal">
              ENTER THE MULTIVERSE
            </h2>
            <div className="paragraph">
              <p className="text-white p-multiverse mt-3">
                The adventure awaits you. The Multiverse Club is a <br />
                community for investors, gamers and RPG enthusiasts <br />
                alike. Join forces with other Adventurers, become a <br />
                member of an exclusive community and fight back <br />
                against the forces that be.
              </p>
            </div>

            {/* need to fix overflow */}
            <div className="d-flex flex-wrap justify-content-md-start justify-content-center">
              <button className="rowtwobtn d-flex justify-content-between align-items-center px-4 py-1 me-md-3">
                <img src={disc1} alt="" className="custom-btn-img" />
                <span className="Questrian text-white mx-2">JOIN DISCORD</span>
              </button>

              <button className="rowtwobtn d-flex justify-content-between align-items-center px-4 py-1 my-2 my-md-0">
                <img src={twitter} alt="" className="custom-btn-img" />
                <span className="Questrian text-white mx-2">Twitter</span>
              </button>
            </div>
          </div>

          <div className="col-lg-6 col-md-6 col-sm-12">
            <div>
              <img src={mainLanding} alt="" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
