import styles from './nav.module.scss';
import React, { useState } from 'react';

const Nav = () => {

  const [isOpened, setIsOpened] = useState(false);

  const [navButtonClass, setNavButtonClass] = useState()
  const [navContainerClass, setNavContainerClass] = useState()

  const toggleNavigation = ()=>{
    if(isOpened){
        setNavContainerClass()
        setNavButtonClass()
        setIsOpened(false);  
    }else{
        setNavContainerClass(styles.menuOpened)
        setNavButtonClass(styles.navOpen);
        setIsOpened(true);
    }
  }

  return (
    <nav className={styles.navigation}>
      <h1 className={styles.logo}>Burak Gozen</h1>
      <button onClick={toggleNavigation} className={styles.hamburgerMenuContainer}>
          <div className={navButtonClass}></div>
          <div className={navButtonClass}></div>
          <div className={navButtonClass}></div>
      </button>
      
        <div   className={styles.menuContainer,navContainerClass}> {/*onClick={toggleNavigation}*/}
          <div>
            <div className={styles.navigationLinksContainer}>
              <a>Home</a>
              <a>Over Ons</a>
              <a>Menu</a>
              <a>Contact</a>
            </div>

            <div className={styles.menuContactButtonContainer}>
              <button className={styles.contactButton}>Call</button>
              <button className={styles.contactButton,styles.whiteButton}>Mail</button>
            </div>
          </div>
        </div>
    </nav>
  )
}

export default Nav;

{/*  */}