import styles from './project-component.module.scss';

const ProjectComponent = ()=>{
    return(
        <div className={styles.projectContainer}>
            <img className={styles.projectImg} src="https://picsum.photos/200/300" alt=""/>
            <div className={styles.projectBottomBar}>
                <h2 className={styles.projectTitle}>Middleware Shopify</h2>
            </div>
        </div> 
    )
}

export default ProjectComponent;