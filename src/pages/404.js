import React from 'react';

import Layout from '../components/Layout';

const IndexPage = () => (
  <Layout fullMenu>
    <section id="wrapper">
      <header className="notFound">
        <div className="inner">
          <h2>Page not found</h2>
          <p>Not a valid URL</p>
        </div>
      </header>
      <div className="wrapper">
          <div className="inner"></div>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
