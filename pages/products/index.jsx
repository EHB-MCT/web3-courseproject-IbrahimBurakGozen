import ProductList from '../../components/products/product-list';
import styles from './products-page.module.scss';

const ProjectsPage = () => {
    return (
      <div className={styles.container}>
        <ProductList></ProductList>
      </div>
    )
}

export default ProjectsPage;