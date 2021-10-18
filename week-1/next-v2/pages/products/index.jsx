import Layout from '../../components/layout';
import ProductList from '../../components/products/product-list';
import styles from './products-page.module.scss';
import TopBarProjects from '../../components/top-bar/projects/top-bar-projects';

const ProjectsPage = () => {
    return (
      <>
      <TopBarProjects pageName={"Projects"}/>
      <Layout>
        <div className={styles.container}>
          <ProductList></ProductList>
        </div>
      </Layout>
      </>
    )
}

export default ProjectsPage;