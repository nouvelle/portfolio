import React from 'react';
import { Link, graphql, useStaticQuery } from "gatsby";

import port1 from '../assets/images/port01.png';
import port2 from '../assets/images/port02.png';
import port3 from '../assets/images/port03.png';
import port4 from '../assets/images/port04.png';
import port5 from '../assets/images/port05.png';
import port6 from '../assets/images/port06.png';

const Work = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark (sort: { fields: frontmatter___order }) {
        edges {
          node {
            frontmatter {
              title
              memo
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  return (
    <section id="four" className="wrapper alt style1">
      <div className="inner">
        <h2 className="major">Work</h2>
        <section className="features">
          {data.allMarkdownRemark.edges.map((work, i) => {
            const imgArr = [port1, port2, port3, port4, port5, port6];
            return (
              <article key={i}>
                <Link to={`/work/${work.node.fields.slug}`} className="image">
                  <img src={imgArr[i]} alt={work.node.frontmatter.title} />
                </Link>
                <h3 className="major">{work.node.frontmatter.title}</h3>
                <p>{work.node.frontmatter.memo}</p>
                <Link to={`/work/${work.node.fields.slug}`} className="special">
                  Learn more
                </Link>
              </article>              
            );
          })}
        </section>
      </div>
    </section>
  );
};

export default Work;
