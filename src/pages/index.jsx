import Head from 'next/head'
import SeoConfig from '../components/seo'
import SectionCertificates from '../components/certificates'
import Footer from '../components/footer'
import HeaderMain from '../components/header/headerMain'
import HomePortfolio from '../components/home'
import About from '../components/about'
import SectionProjects from '../components/projects'
import Skills from '../components/skills'
import Contact from '../components/contact'

export default function Home() {

  return (
    <>
      <Head>
        <title>Portfólio Fábio Vitor</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        {//<link rel="icon" href="/favicon.ico" />
        }
      </Head>
      <SeoConfig/>
      <div className="homepage">
        <HeaderMain />
        <HomePortfolio />
      </div>
      <main className="main">
        <About />
        <Skills />
        <SectionProjects />
        <SectionCertificates />
        <Contact />
        <Footer />
      </main>
    </>
  )
}
