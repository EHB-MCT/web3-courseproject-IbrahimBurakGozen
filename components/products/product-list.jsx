import styles from './product-list.module.scss';
import ProductComponent from './product/product-component';

const ProductList = ()=>{
    return(
        <div className={styles.container}>
            <ProductComponent></ProductComponent>
            <ProductComponent></ProductComponent>
            <ProductComponent></ProductComponent>
            <ProductComponent></ProductComponent>
        </div> 
    )
}

export default ProductList;