import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';
import Work from '../components/Work';

import pic1 from '../assets/images/pic01.jpg';
import pic2 from '../assets/images/pic02.jpg';
import pic3 from '../assets/images/pic03.jpg';

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
          <a href="#four" className="image">
            <img src={pic2} alt="skills" />
          </a>
          <div className="content">
            <h2 className="major">Skills</h2>
            <p>
              I’m a software engineer with passion for the front-end.
            </p>
            <a href="#four" className="special">
              My portfolio
            </a>
          </div>
        </div>
      </section>

      <section id="three" className="wrapper spotlight style3">
        <div className="inner">
          <a href="/#" className="image">
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

      <Work />
    </section>
  </Layout>
);

export default IndexPage;
