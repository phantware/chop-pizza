import styles from '../styles/Featured.module.css'
import Image from 'next/image'

const Featured = () => {
  const images = [
    '/img/featured1.jpg',
    '/img/featured2.jpg',
    '/img/featured3.jpg',
    '/img/featured4.jpg',
    '/img/featured5.jpg',
  ]
  return (
    <div className={styles.container}>
      <div className={styles.arrowContainer} style={{ left: 0 }}>
        <Image src='/img/arrowl.png' layout='fill' objectFit='contain' alt='' />
      </div>
      <div className={styles.wrapper}>
        {images.map((image, i) => (
          <div key={i} className={styles.imgContainer}>
            <Image src={image} layout='fill' alt='' />
          </div>
        ))}
      </div>
      <div className={styles.arrowContainer} style={{ right: 0 }}>
        <Image src='/img/arrowr.png' layout='fill' alt='' />
      </div>
    </div>
  )
}

export default Featured
