import React from 'react';

import Layout from '../components/Layout';

import pic1 from '../assets/images/pic01.jpg';
import pic2 from '../assets/images/pic02.jpg';
import pic3 from '../assets/images/pic03.jpg';
import port1 from '../assets/images/port01.png';
import port2 from '../assets/images/port02.png';
import port3 from '../assets/images/port03.png';
import port4 from '../assets/images/port04.gif';
import port5 from '../assets/images/port05.png';
import port6 from '../assets/images/port06.png';

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
          <a href="/#" className="image">
            <img src={pic1} alt="about me" />
          </a>
          <div className="content">
            <h2 className="major">About</h2>
            <p>
              Hello! I'm Eriko.<br />
              Thank you for visiting my homepage.
            </p>
            <a href="/#" className="special">
              More
            </a>
          </div>
        </div>
      </section>

      <section id="two" className="wrapper alt spotlight style2">
        <div className="inner">
          <a href="/#" className="image">
            <img src={pic2} alt="skills" />
          </a>
          <div className="content">
            <h2 className="major">Skills</h2>
            <p>
              I’m a software engineer with passion for the front-end.
            </p>
            <a href="/#" className="special">
              More
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
            <a href="/#" className="special">
              Check my blog
            </a>
          </div>
        </div>
      </section>

      <section id="four" className="wrapper alt style1">
        <div className="inner">
          <h2 className="major">Work</h2>
          <section className="features">
            <article>
              <a href="/#" className="image">
                <img src={port1} alt="100 days of starbucks" />
              </a>
              <h3 className="major">100days-Of-Starbucks</h3>
              <p>This is a collection of tweets about Starbucks from Twitter.</p>
              <a href="/#" className="special">
                Learn more
              </a>
            </article>
            <article>
              <a href="/#" className="image">
                <img src={port2} alt="QLAB" />
              </a>
              <h3 className="major">QLAB</h3>
              <p>QLAB is a learning envioronment where you can learn any topic to earn points.</p>
              <a href="/#" className="special">
                Learn more
              </a>
            </article>
            <article>
              <a href="/#" className="image">
                <img src={port3} alt="starbucks journey" />
              </a>
              <h3 className="major">My Starbucks journey</h3>
              <p>This is my Starbucks journey in Seattle using Deck.gl made by UBER.</p>
              <a href="/#" className="special">
                Learn more
              </a>
            </article>
            <article>
              <a href="/#" className="image">
                <img src={port4} alt="Money Tracker " />
              </a>
              <h3 className="major">Money Tracker</h3>
              <p>You can keep track of your daily spending.</p>
              <a href="/#" className="special">
                Learn more
              </a>
            </article>
            <article>
              <a href="/#" className="image">
                <img src={port5} alt="Coffee Time" />
              </a>
              <h3 className="major">Site clip</h3>
              <p>It is an application to clip the URL for your Coffee Time.</p>
              <a href="/#" className="special">
                Learn more
              </a>
            </article>
            <article>
              <a href="/#" className="image">
                <img src={port6} alt="Daily Starbucks" />
              </a>
              <h3 className="major">Daily Starbucks</h3>
              <p>It' a my daily Starbucks life.</p>
              <a href="/#" className="special">
                Learn more
              </a>
            </article>
          </section>
          <ul className="actions">
            <li>
              <a href="/#" className="button">
                Browse All
              </a>
            </li>
          </ul>
        </div>
      </section>
    </section>
  </Layout>
);

export default IndexPage;
