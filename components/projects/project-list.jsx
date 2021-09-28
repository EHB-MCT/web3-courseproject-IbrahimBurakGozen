import styles from './project-list.module.scss';
import ProjectComponent from '../project/project-component';

const ProjectList = ()=>{
    return(
        <div className={styles.container}>
            <ProjectComponent></ProjectComponent>
            <ProjectComponent></ProjectComponent>
            <ProjectComponent></ProjectComponent>
            <ProjectComponent></ProjectComponent>
        </div> 
    )
}

export default ProjectList;