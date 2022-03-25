import React from 'react';
import About from '../components/About';
import Banner from '../components/Banner';
import Club from '../components/Club';
import Faq from '../components/Faq';
import Header from '../components/Header';
import MultiverseTeam from '../components/MultiverseTeam';
import Nft from '../components/Nft';
import Roadmap from '../components/Roadmap';
import '../styles/main.css';

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <About />
      <Nft />
      <Club />
      <Roadmap />
      <MultiverseTeam />
      <Faq />
    </>
  );
}
