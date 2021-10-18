import styles from './home.module.scss';
import ProductList from '../components/products/product-list';
import TopBarHome from '../components/top-bar/home/top-bar-home';
import Layout from '../components/layout';

const HomePage = ()=> {
  return (
    <>
    <TopBarHome></TopBarHome>

    <Layout>
      <h1>Home</h1>
    </Layout>

    </>
  )
}

export default HomePage;

{/* <section>
<div className={text.textBlock}>
  <h2 className={text.sectionTitle}>Who am I?</h2>
  <p className={text.bodyText}> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos dolor non iure eos. Aliquam corrupti est nulla tenetur aliquid. At ad neque omnis eaque sint eius, saepe iste consequuntur magnam.</p>
</div>
</section>

<section>
<div className={text.textBlock}>
  <h2 className={text.sectionTitle}>Projects</h2>
  <ProductList></ProductList>
</div>
</section> */}