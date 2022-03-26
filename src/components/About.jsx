import React from 'react';
import earth from '../images/earth.svg';

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="d-flex justify-content-center flex-column  h-100">
              <div className="pe-4">
                <h2 className="text-white Questrian fw-normal text-uppercase pe-4">
                  What is The multiverse club?
                </h2>
              </div>
              <div className="paragraph">
                <p className="text-white p-multiverse mt-3 fs-6">
                  We are a collection of 10,000 lost adventurers, hurled through
                  space, time, and infinite universes that must now come
                  together, collaborate, and fight in a “Dungeons and Dragons”
                  inspired P2E experience for the right to become the
                  multiverse’s ultimate heroes. Holders of a Multiverse Club NFT
                  makes you an adventurer, giving you access to an exclusive
                  community, airdrops, and unique gameplay experience!
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div>
              <img src={earth} alt="" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
