import React from 'react';
import irl from '../images/irl.svg';
import sword from '../images/sword 1.svg';
import reddish from '../images/reddish-icon.svg';
import coin from '../images/coins.svg';

export default function Club() {
  return (
    <section id="#club" className="my-5">
      <div class="container">
        <h2 class="text-center text-white text-uppercase Questrian my-5">
          WHY join the multiverse club?
        </h2>
        <div class="row">
          <div class="col-lg-3 col-md-6 col-sm-12">
            <div class="d-flex justify-content-center">
              <img src={irl} alt="" class=" club-img" />
            </div>

            <div class="text-white text-center rectangle p-3 club-card my-5">
              <h3 class="crispyTofu pt-3">IRL EVENTS</h3>
              <li class="mt-4 sanchez IRLevents">
                IRL EVents Free access to exclusive,
                <br />
                members-only IRL <br />
                events across the U.S.
              </li>
              <li class="mt-4 sanchez">
                Connect with other <br />
                adventurers, close knit <br />
                community with perks, <br />
                airdrops
              </li>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-12">
            <div class="d-flex justify-content-center">
              {' '}
              <img src={sword} alt="" class=" club-img" />
            </div>

            <div class="text-white text-center rectangle p-3 club-card my-5">
              <h3 class="crispyTofu pt-3 text-uppercase">Immersive P2E</h3>
              <li class="mt-4 sanchez">
                Diverse character types <br />
                equipped with skills <br />
                which interact with P2E <br />
                ecosystem in various ways
              </li>
              <li class="mt-4 sanchez">
                Earn $VERSE tokens by <br />
                staking or taking part in <br />
                adventures/campaigns.
              </li>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-12">
            <div class="d-flex justify-content-center">
              <img src={reddish} alt="" class=" club-img" />{' '}
            </div>

            <div class="text-white text-center rectangle p-3 club-card my-5">
              <h3 class="crispyTofu pt-3 text-uppercase">community driven</h3>
              <li class="mt-4 sanchez">
                Members may join <br />
                factions(DAO) that best <br />
                represent their personal <br />
                interests and skills.
              </li>
              <li class="mt-4 sanchez">
                Events, policies and <br />
                future product releases <br />
                will be voted on & driven <br />
                by the factions
              </li>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-12">
            <div class="d-flex justify-content-center">
              <img src={coin} alt="" class=" club-img" />
            </div>

            <div class="text-white text-center rectangle p-3 club-card my-5">
              <h3 class="crispyTofu pt-3 text-uppercase">$VERSE TOKENS</h3>
              <li class="mt-4 sanchez">
                Members may join <br />
                factions that best <br />
                represent their personal <br />
                interests and gains.
              </li>
              <li class="mt-4 sanchez">
                Events and policies will <br />
                be decided and driven <br />
                by the DAO(factions)
              </li>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
