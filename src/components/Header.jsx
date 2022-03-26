import React from 'react';
import logo from '../images/MULTIVERSETEAM.svg';
import twitter from '../images/twitterlogo 1.svg';
import discord from '../images/disclogo 1 (1).png';
import { Link } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';

export default function Header() {
  const handleScroll = (id) => {
    const anchor = document.querySelector(id);
    anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  return (
    <Navbar expand="lg">
      <Navbar.Brand href="#home">
        <img src={logo} alt="" className="ps-md-4 heading-img img-fluid" />
      </Navbar.Brand>
      <Navbar.Toggle
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        className="navbar-toggler"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-ico text-white ">MENU</span>
      </Navbar.Toggle>

      <Navbar.Collapse id="navbarNav">
        <div
          className="collapse navbar-collapse d-flex justify-content-end pe-3"
          id="navbarNav"
        >
          <Link
            to="#about"
            className="p-2 text-white btn btn-link Questrian text-decoration-none"
            onClick={() => {
              handleScroll('#about');
            }}
          >
            ABOUT
          </Link>
          <Link
            to="#team"
            className="p-2 text-white btn btn-link Questrian text-decoration-none"
            onClick={() => {
              handleScroll('#team');
            }}
          >
            TEAM
          </Link>
          <Link
            to="#faq"
            className="p-2 text-white btn btn-link Questrian text-decoration-none"
            onClick={() => {
              handleScroll('#faq');
            }}
          >
            FAQ
          </Link>
        </div>
        <div
          className="collapse navbar-collapse d-flex justify-content-end pe-4"
          id="navbarNav"
        >
          <Link to="#">
            <img src={twitter} alt="" className="img-fluid p-2" />
          </Link>
          <Link to="#">
            <img src={discord} alt="" className="img-fluid p-2" />
          </Link>

          <div className="d-inline m-2">
            <button className="connectWallet text-white text-center p-2">
              CONNECT WALLET
            </button>
          </div>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
}
