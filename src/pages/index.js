import React from 'react'
import { Helmet } from 'react-helmet'
import Layout from 'components/layout'
import Banner from 'components/Banner'
import About from 'components/About'
import Schedule from 'components/Schedule'
import config from 'root/config'

class Home extends React.Component {
  render() {
    return (
      <Layout location='/'>
        <Helmet
          htmlAttributes={{ lang: 'zh-Hans' }}
          title={config.siteTitle}
          meta={[
            { name: 'description', content: config.siteDescription }
          ]}
        ></Helmet>
        <Banner/>
        <About/>
        <Schedule/>
      </Layout>
    )
  }
}

export default Home
