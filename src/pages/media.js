import Layout from 'components/layout'
import React from 'react'
import Helmet from 'react-helmet'

const Media = props => (
  <Layout>
    <Helmet>
      <title>影音资料</title>
      <meta name="description" content="Right Sidebar Page"/>
    </Helmet>

    <div id="main" className="wrapper style1">
      <div className="container">
        <header className="major">
          <h2>影音资料</h2>
        </header>
        <div className="row gtr-150">
          <div className="col-8 col-12-medium">
            <section id="content">
              <ul className="alt">
                <li>稳行在高处 — 超越的信心</li>
                <li>稳行在高处 — 爱里没有惧怕</li>
                <li>福音专题</li>
                <li>特会专题</li>
                <li>青少年聚会</li>
                <li>美南秋令会</li>
              </ul>
            </section>
          </div>
          <div className="col-4 col-12-medium">
            <section id="sidebar">
              <h3>分类</h3>
              <ul className="alt">
                <li>主日信息</li>
                <li>主日学</li>
                <li>福音专题</li>
                <li>特会专题</li>
                <li>青少年聚会</li>
                <li>美南秋令会</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default Media
