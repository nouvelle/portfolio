const path = require('path');

module.exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;
  if(node.internal.type === "MarkdownRemark") {
		// URL パスから拡張子を取り除いた名前だけを返す
    const slug = path.basename(node.fileAbsolutePath, '.md');

    createNodeField({
      node, 
      name: 'slug',
      value: slug
    });
  }  
}

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  
  // 1. template のパスを取得
  //   path.resolve: 指定したファイルの絶対パスを返す
  const workTemplate = path.resolve('./src/templates/work.js');

  // 2. markdown の slug を取得
  //   graphql の return 値は Promise
  const res = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  // 3. 新しいページを作成
  res.data.allMarkdownRemark.edges.forEach((data) => {
    createPage({
      component: workTemplate,
      path: `/work/${data.node.fields.slug}`,
      context: {
        slug: data.node.fields.slug
      }
    });
  });
}