import Head from 'next/head'
import Nav from './nav/nav';
import Footer from './footer/footer';
import styles from '../styles/sass/main.module.scss';

const Layout = ({children}) => {
  return (
    <>
      <Head>
        <title>momento</title>
        <meta name="Burak Gozen" content="Hey welcome to my page." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <header>
        <Nav></Nav>
      </header>
      
      <main className={styles.mainContent}>{children}</main>
      
      <Footer></Footer>
    </>
  )
}

export default Layout;