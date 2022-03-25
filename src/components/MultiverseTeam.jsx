import React from 'react';
import rick from '../images/rickpfp 1.svg';
import rachel from '../images/rachel love.svg';
import terminator from '../images/TerminatorpfpASH 1.svg';
import twitter from '../images/twitterlogo 1.svg';
import webpage from '../images/MJ1webpage.svg';
import matt from '../images/Mattwebsite 1.svg';

export default function MultiverseTeam() {
  return (
    <section id="#multiverse">
      <div class="container">
        <h2 class="text-black text-center text-uppercase Questrian mt-5">
          The multiverse team
        </h2>
        <div class="d-flex justify-content-center align-center flex-wrap">
          <div class="m-4 d-flex justify-content-center align-center flex-column">
            <img
              src={rick}
              alt=""
              class="img-fluid rounded-circle multiverseTeam w-100"
            />
            <h2 class="text-black text-uppercase text-center  Questrian ps-1">
              slim
            </h2>
            <p class="text-black text-center sanchez ">
              Operations/Project Lead
            </p>
            <div class="text-center ">
              <img src={twitter} alt="" class="img-fluid" />
            </div>
          </div>
          <div class="m-4">
            <img
              src={rachel}
              alt=""
              class="img-fluid rounded-circle multiverseTeam"
            />
            <h2 class="text-black text-uppercase text-center  Questrian rachelLove">
              rachelLove
            </h2>
            <p class="text-black text-center sanchez ">
              Artist/Creative Director
            </p>
          </div>
          <div class="m-4">
            <img
              src={terminator}
              alt=""
              class="img-fluid rounded-circle multiverseTeam"
            />
            <h2 class="text-black text-uppercase text-center  Questrian">
              Ashman
            </h2>
            <p class="text-black text-center sanchez ">Smart Contracts</p>
            <div class="text-center ">
              <img src={twitter} alt="" class="img-fluid" />
            </div>
          </div>
          <div class="m-4">
            <img
              src={webpage}
              alt=""
              class="img-fluid rounded-circle multiverseTeam"
            />
            <h2 class="text-black text-uppercase text-center Questrian">
              Dbone
            </h2>
            <p class="text-black text-center sanchez ">Web Developer</p>
          </div>
          <div class="m-4">
            <img
              src={matt}
              alt=""
              class="img-fluid rounded-circle multiverseTeam"
            />
            <h2 class="text-black text-uppercase text-center Questrian">
              Nathan
            </h2>
            <p class="text-black text-center sanchez ">Coummunity Lead</p>
            <div class="text-center ">
              <img src={twitter} alt="" class="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
