import styles from './product-component.module.scss';

const ProductComponent = ()=>{
    return(
       <div className={styles.productContainer}>
           <img src="https://picsum.photos/994/994" alt="" className={styles.productImg} />

             <div className={styles.contentContainer}>
                <h2 className={styles.productTitle}>Lorem ipsum sit amet</h2>
                <h3 className={styles.productStatus}>lorem ipsum</h3>
            </div>
            {/* <h4 className={styles.productDate}>estimated_finish_time</h4>
            <button className={styles.productDoneButton}>Done</button> */}
        </div>
    )
}

export default ProductComponent; 

{/* <div className={styles.projectContainer}>
            <img className={styles.projectImg} src="https://picsum.photos/200/300" alt=""/>
            <div className={styles.projectBottomBar}>
                <h2 className={styles.projectTitle}>Middleware Shopify</h2>
            </div>
        </div>  */}