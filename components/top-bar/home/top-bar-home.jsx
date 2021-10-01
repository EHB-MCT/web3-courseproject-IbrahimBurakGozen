import styles from './top-bar-home.module.scss';

const TopBarHome = ()=> {
    return (
      <section className={styles.topBarContainer}>
        <img src="https://picsum.photos/100/100" alt="" />
        <h1 className={styles.topBarTitle}>Welkom Burak</h1>
      </section>
    )
  }
  
  export default TopBarHome;