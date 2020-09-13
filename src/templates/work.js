import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";

// gatsby-node.js で定義した context の値(slug) が引数の $slug に渡される
export const query = graphql`
  query ($slug: String!) {
    markdownRemark (fields: { slug: { eq: $slug } }){
      frontmatter {
        title
        order
      }
      html
    }
  }
`;

const WorkTemplate = (props) => {
  return (
    <Layout fullMenu>
      <section id="wrapper">
        <header className={`port port${props.data.markdownRemark.frontmatter.order}`}>
          <div className="inner">
            <h2>{props.data.markdownRemark.frontmatter.title}</h2>
          </div>
        </header>

        <div className="wrapper">
          <div className="inner">
            <div dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}></div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default WorkTemplate;