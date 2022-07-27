import styles from '../styles/ProductList.module.css'
import Image from 'next/image'
import ProductCard from './ProductCard'

const ProductList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>EXPERT IN PIZZA MAKING AND DELIVERY</h1>
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut blandit arcu
        in pretium molestie. Interdum et malesuada fames acme. Lorem ipsum dolor
        sit amet, consectetur adipiscing elit.
      </p>
      <div className={styles.wrapper}>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  )
}

export default ProductList
