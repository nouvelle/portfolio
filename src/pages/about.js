import React from 'react';

import Layout from '../components/Layout';
import pic1 from '../assets/images/pic01.jpg';
import pic3 from '../assets/images/pic03.jpg';
import pic4 from '../assets/images/pic04.jpg';

const About = () => (
  <Layout fullMenu>
    <section id="wrapper">
      <header>
        <div className="inner">
          <h2>About</h2>
        </div>
      </header>

      <div className="wrapper">
        <div className="inner">
          <h3 className="major">Hello!</h3>
          <p>
            Hi! I'm Eriko. Thank you for visiting my portfolio site.
          </p>
          <p>
            I'm a software engineer and a big fan of STARBUCKS!!<br />
            When I’m not coding, you can often spot me in a Starbucks enjoying their coffees.<br />
            If you have any questions, please feel free to contact me. Thank you!
          </p>

          <h3 className="major">Experience</h3>
          <p>
            After graduate, I worked as systems engineer in financial company where I spent a decade handling system design, UI/UX, testing, and product launches.
            I was also in charge of communication with clients where I worked directly with them to solve their issues. 
          </p>
          <p>
            From October to December 2019, I participated in Code Chrysalis' English Immersive bootcamp.<br />
            Learned all the technologies from front-end to back-end, and also experienced team development with several people.<br />
            During this time, I also did a 20 minute TechTalk in English. The theme of TechTalk was "Data Visualization".<br />
            Also, I did a simple implementation using "Deck.gl" developed by Uber.<br />
            <a href="https://deck.gl/#/">https://deck.gl/#/</a>
          </p>
          <p>
            I'm currently working as a Tech instructor at <a href="https://www.codechrysalis.io/">Code Chrysalis</a> on the Japanese Immersive bootcamp.<br />
          </p>

          <h3 className="major">My favorite</h3>
          <p>
            I love the front end, I'm good at JavaScript.<br />
            Lately, I’ve built full-stack applications on Node.js/Express using JavaScript frameworks such as React and Vue.js.
          </p>
          <p>
            I love Starbucks! I travel around the world to visit Starbucks.
          </p>

          <section className="features">
            <article>
              <span className="image"><img src={pic3} alt="I love SBUX" /></span>
              <h3 className="major">I love STARBUCKS</h3>
            </article>
            <article>
              <div className="col-12">
                <span className="image"><img src={pic1} alt="coding me" /></span>
                <h3 className="major">I like Codeing</h3>
            </div>
            </article>
            <article className="widthFull">
              <div className="col-12">
                <span className="image fit"><img src={pic4} alt="cc10" /></span>
              </div>
              <h3 className="major">Code Chrysalis - CC10</h3>
              <p>I was a student of Code Chrisalis Immersive - CC10.</p>
            </article>
          </section>
        </div>
      </div>
    </section>
  </Layout>
);

export default About;
