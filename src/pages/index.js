import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';

import pic1 from '../assets/images/pic01.jpg';
import pic2 from '../assets/images/pic02.jpg';
import pic3 from '../assets/images/pic03.jpg';
import port1 from '../assets/images/port01.png';
import port2 from '../assets/images/port02.png';

import config from '../../config';
const IndexPage = () => (
  <Layout>
    <section id="banner">
      <div className="inner">
        <div className="logo">
          <span className="icon fa-coffee"></span>
        </div>
        <h2>{config.heading}</h2>
        <p>{config.subHeading}</p>
      </div>
    </section>

    <section id="wrapper">
      <section id="one" className="wrapper spotlight style1">
        <div className="inner">
          <Link to="/about" className="image">
            <img src={pic1} alt="about me" />
          </Link>
          <div className="content">
            <h2 className="major">About</h2>
            <p>
              Hello! I'm Eriko.<br />
              Thank you for visiting my homepage.
            </p>
            <Link to="/about" className="special">
              More
            </Link>
          </div>
        </div>
      </section>

      <section id="two" className="wrapper alt spotlight style2">
        <div className="inner">
          <Link to="/work" className="image">
            <img src={pic2} alt="skills" />
          </Link>
          <div className="content">
            <h2 className="major">Skills</h2>
            <p>
              I’m a software engineer with passion for the front-end.
            </p>
            <Link to="/work" className="special">
              My portfolio
            </Link>
          </div>
        </div>
      </section>

      <section id="three" className="wrapper spotlight style3">
        <div className="inner">
          <a href="https://wonderful-dubinsky-d7fc26.netlify.app/" className="image">
            <img src={pic3} alt="interests" />
          </a>
          <div className="content">
            <h2 className="major">Interests</h2>
            <p>
              I'm a big fan of STARBUCKS!!<br />
              I travel around the world to visit Starbucks.<br />
              Here's a post about my daily Starbucks life. Have fun!
            </p>
            <a href="https://wonderful-dubinsky-d7fc26.netlify.app/" className="special">
              Check my blog
            </a>
          </div>
        </div>
      </section>

      <section id="work" className="wrapper alt style1">
      <div className="inner">
        <h2 className="major">Work</h2>
        <section className="features">
          <article>
            <Link to="/work/MY-STARBUCKS-JOURNEY/" className="image">
              <img src={port1} alt="MY-STARBUCKS-JOURNEY" />
            </Link>
            <h3 className="major">MY-STARBUCKS-JOURNEY</h3>
            <p>This is my Starbucks journey in Seattle using Deck.gl made by UBER.</p>
            <Link to="/work/MY-STARBUCKS-JOURNEY/" className="special">
              More
            </Link>
          </article>              
          <article>
            <Link to="/work/QLAB/" className="image">
              <img src={port2} alt="QLAB" />
            </Link>
            <h3 className="major">QLAB</h3>
            <p>QLAB is a learning envioronment where you can learn any topic to earn points.</p>
            <Link to="/work/QLAB/" className="special">
              More
            </Link>
          </article>              
        </section>
        <Link to="/work" className="special right">
          Check more
        </Link>
      </div>
    </section>
    </section>
  </Layout>
);

export default IndexPage;
