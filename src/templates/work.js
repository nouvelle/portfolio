import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";

// gatsby-node.js で定義した context の値(slug) が引数の $slug に渡される
export const query = graphql`
  query ($slug: String!) {
    markdownRemark (fields: { slug: { eq: $slug } }){
      frontmatter {
        title
      }
      html
    }
  }
`;

const WorkTemplate = (props) => {
  return (
    <Layout>
      <h1>{props.data.markdownRemark.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}></div>
    </Layout>
  );
}

export default WorkTemplate;