import React from 'react';

export default function Roadmap() {
  return (
    <section id="#roadmap">
      <h2 className="text-uppercase text-white text-center Questrian my-5">
        Roadmap
      </h2>
      <div className="roadmap custom-container">
        <div className="phase ">
          <h4 className="text-uppercase text-center Questrian text-black">
            phase 1
          </h4>
          <p className="sanchez text-white text-center roadmapPara">
            10,000 adventurers are warped in to the Ethereum blockchain, and
            begin their journey through the Adventureverse.
          </p>
        </div>
        {/* 2nd */}
        <div className="d-flex justify-content-end">
          <div className="phase">
            <h4 className="text-uppercase text-center Questrian text-black">
              Phase 2
            </h4>
            <p className="sanchez text-white text-center roadmapPara">
              Staking operational, $VERSE P2E ecosystem officially launches and
              adventurers may begin earning passive income to climb the economic
              ranks.
            </p>
          </div>
        </div>
        {/* 3rd */}
        <div className="phase pb-2">
          <h4 className="text-uppercase text-center Questrian text-black">
            Phase 3: Factions
          </h4>
          <p className="sanchez text-white text-center roadmapPara">
            Our adventurers can now choose a faction to join, allowing them to
            unlock their full potential based on their character type &
            className! Contribute to the DAO & campaigns to amass power and
            climb the ranks!
          </p>
        </div>
        {/* 4rd */}
        <div className="d-flex justify-content-end">
          <div className="phase">
            <h4 className="text-uppercase text-center Questrian text-black">
              Phase 4
            </h4>
            <p className="sanchez text-white text-center roadmapPara">
              Magical items and upgrade modules introduced, which adventurers
              can buy with $VERSE tokens, which can improve $VERSE yields & buff
              attributes.
            </p>
          </div>
        </div>
        {/* 5th */}
        <div className="phase pb-2">
          <h4 className="text-uppercase text-center Questrian text-black">
            Phase 5
          </h4>
          <p className="sanchez text-white text-center roadmapPara">
            Every adventurer needs a companion to accompany them on quests and
            campaigns! Pet companion NFT launches, as well as holder-exclusive
            merch drops!
          </p>
        </div>
        {/* 6th */}
        <div className="d-flex justify-content-end">
          <div className="phase">
            <h4 className="text-uppercase text-center Questrian text-black">
              Phase 6
            </h4>
            <p className="sanchez text-white text-center roadmapPara">
              The Adventureverse ecosystem expands with the rollout of roadmap
              V2, aimed at building a circular, value-packed P2E economy and
              expanding the brand of the Multiverse Club
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
