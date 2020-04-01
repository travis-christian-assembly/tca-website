import bannerGive from 'assets/images/banner_give.jpg'
import { renderAll } from 'components/BibleVerses'
import { language } from 'components/Language'
import Layout from 'components/layout'
import React from 'react'
import Helmet from 'react-helmet'
import showdown from 'showdown'

export default class Give extends React.Component {
  render() {
    const markdownScripture = renderAll(`$bible_verses book='Malachi', chapter='3', verses='10,11'$`)

    return (
      <Layout>
        <Helmet>
          <title>{language().giveTitle}</title>
          <meta name="description" content="Right Sidebar Page" />
        </Helmet>

        <div id="main" className="wrapper style1">
          <div className="container">
            <header className="major">
              <h2>{language().giveTitle}</h2>
            </header>

            <section id="content">
              <div className="image fit">
                <img src={bannerGive} alt="" />
              </div>

              <div dangerouslySetInnerHTML={{ __html: new showdown.Converter().makeHtml(markdownScripture) }}/>

              <br/>

              <p>
                {language().giveDescriptionLine1}
                <br/>
                <br/>
                {language().giveDescriptionLine2}
              </p>

              <hr/>

              <h4>{language().giveOption1Title}</h4>
              <p>
                {language().giveOption1DescriptionLine1}
                <br/>
                <br/>
                {language().giveOption1DescriptionLine2}
              </p>

              <hr/>

              <h4>{language().giveOption2Title}</h4>
              <p>
                {language().giveOption2DescriptionLine1}
                <br/>
                <br/>
                <ul>
                  <li><a href={language().giveOption2BulletPoint1Url}>{language().giveOption2BulletPoint1Description}</a></li>
                  <li><a href={language().giveOption2BulletPoint2Url}>{language().giveOption2BulletPoint2Description}</a></li>
                </ul>
              </p>

              <hr/>

              <h4>{language().giveOption3Title}</h4>
              <p>
                {language().giveOption3DescriptionLine1}
                <br/>
                <br/>
                <ul>
                  <li><a href={language().giveOption3BulletPoint1Url}>{language().giveOption3BulletPoint1Description}</a></li>
                  <li>{language().giveOption3BulletPoint2Description}</li>
                </ul>
              </p>

              <hr/>
            </section>
          </div>
        </div>
      </Layout>
    )
  }
}
