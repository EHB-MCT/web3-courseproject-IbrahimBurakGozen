import { iconKebabMenu } from '../../../images/icons/icons-list';
import styles from './top-bar-projects.module.scss';

const TopBarProjects = ({pageName})=> {
    return (
      <section className={styles.topBarContainer}>
        <h1 className={styles.topBarTitle}>{pageName}</h1>
        <button className={styles.kebabMenuButton}>{iconKebabMenu}</button>
      </section>
    )
  }
  
  export default TopBarProjects;