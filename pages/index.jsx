import styles from './home.module.scss';
import text from '../styles/sass/text.module.scss';
import ProjectList from '../components/projects/project-list';

const Home = ()=> {
  return (
    <>
    <section className={styles.landingPage}>
      <h1 className={styles.ladingPageTitle}>Creating innovation beside elegance</h1>
    </section>

    <section>
      <div className={text.textBlock}>
        <h2 className={text.sectionTitle}>Who am I?</h2>
        <p className={text.bodyText}> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos dolor non iure eos. Aliquam corrupti est nulla tenetur aliquid. At ad neque omnis eaque sint eius, saepe iste consequuntur magnam.</p>
      </div>
    </section>

    <section>
      <div className={text.textBlock}>
        <h2 className={text.sectionTitle}>Projects</h2>
        <ProjectList></ProjectList>
      </div>
    </section>
    </>
  )
}

export default Home;