import styles from '../styles/Footer.module.css'
import Image from 'next/image'
const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src='/img/bg.png' objectFit='cover' layout='fill' alt='' />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            ASKING OF BEST PIZZA CHOP, AT CHOP-PIZZA, WELL BAKED SLICE OF PIZZA.
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>FIND OUR RESTAURANTS</h1>
          <p className={styles.text}>
            1654 R. Don Road #304.
            <br /> Lagos, 2352
            <br /> 081 8727 3154
          </p>
          <p className={styles.text}>
            2356 K. Laquie Rd #235.
            <br /> Lagos, 2352
            <br /> 081 8727 3154
          </p>
          <p className={styles.text}>
            1614 E. Erwin St #104.
            <br /> Lagos, 2352
            <br /> 081 8727 3154
          </p>
          <p className={styles.text}>
            1614 W. Caroll St #125.
            <br /> Lagos, 2352
            <br /> 081 8727 3154
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>WORKING HOURS</h1>
          <p className={styles.text}>
            MONDAY UNTIL FRIDAY
            <br /> 9:00 – 22:00
          </p>
          <p className={styles.text}>
            SATURDAY - SUNDAY
            <br /> 12:00 – 24:00
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer
