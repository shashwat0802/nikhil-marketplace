import React from 'react';
import { Accordion } from 'react-bootstrap';

export default function Faq() {
  return (
    <section id="#faq">
      <div className="grass">
        <div className="container pt-5">
          <h1 className="Questrian text-black text-center padding_faq">
            FAQ'S
          </h1>

          {/* react */}
          <Accordion defaultActiveKey={['0']}>
            <Accordion.Item eventKey="0" className="my-4">
              <Accordion.Header>
                <h2 className="ps-3 pt-2 text-black text-center Questrian ">
                  WEN MINT?
                </h2>
              </Accordion.Header>
              <Accordion.Body>
                <span className="sanchez fs-5">
                  TBA. Announcements regarding the mint datewill be made in
                  discord as soon as early March
                </span>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1" className="my-4">
              <Accordion.Header>
                <h2 className="ps-3 pt-2 text-black text-center Questrian ">
                  HOW DO I GET ON THE WHITELIST
                </h2>
              </Accordion.Header>
              <Accordion.Body>
                <span className="sanchez fs-5">
                  Members of the community will be rewarded Whitelist spots
                  depending on their activity in discord,as well as
                  participation in community events/contests.More information
                  available in the Discord.
                </span>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2" className="my-4">
              <Accordion.Header>
                <h2 className="ps-3 pt-2 text-black text-center Questrian ">
                  How many adventurers can i mint?
                </h2>
              </Accordion.Header>
              <Accordion.Body>
                <span className="sanchez fs-5">
                  All members,including staff and Whitelist members,are limited
                  to 5 NFT's per wallet.
                </span>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3" className="my-4">
              <Accordion.Header>
                <h2 className="ps-3 pt-2 text-black text-center Questrian ">
                  how do i warp in my adventurer?
                </h2>
              </Accordion.Header>
              <Accordion.Body>
                <span className="sanchez fs-5">
                  There will be a maximum of 10,000 unique adventurers ever
                  minted.
                </span>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4" className="my-4">
              <Accordion.Header>
                <h2 className="ps-3 pt-2 text-black text-center Questrian ">
                  what is the total supply?
                </h2>
              </Accordion.Header>
              <Accordion.Body>
                <span className="sanchez fs-5">
                  There will be a maximum of 10,000 unique adventurers ever
                  minted.
                </span>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
        <div className="copyright">
          <h3 className="text-black text-center Questrian vesperLibre">
            © 2022 Multiverse Club | All Rights Reserved.
          </h3>
        </div>
      </div>
    </section>
  );
}
