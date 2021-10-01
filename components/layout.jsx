import Head from 'next/head'
import Nav from './nav/nav';
import Footer from './footer/footer';
import styles from '../styles/sass/main.module.scss';
import SideNavigation from './navigation/side-nav/side-navigation';

const Layout = ({children}) => {
  return (
    <>
      <Head>
        <title>cms</title>
        <meta name="cms" content="Hey welcome to my cms." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <header>
        <SideNavigation></SideNavigation>
      </header>
      
      <main className={styles.mainContent}>{children}</main>
      
      {/* <Footer></Footer> */}
    </>
  )
}

export default Layout;