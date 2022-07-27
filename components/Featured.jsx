import styles from '../styles/Featured.module.css'
import Image from 'next/image'
import { useCallback, useEffect, useState } from 'react'

const Featured = () => {
  const [index, setIndex] = useState(0)

  const images = [
    '/img/italian.png',
    '/img/pizza-2.png',
    '/img/eat-2.png',
    '/img/featured4-2.png',
  ]

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleArrow = useCallback((direction) => {
    if (direction === 'l') {
      setIndex(index !== 0 ? index - 1 : 3)
    }
    if (direction === 'r') {
      setIndex(index !== 3 ? index + 1 : 0)
    }
  })
  useEffect(() => {
    const lastIndex = 3
    if (index < 0) {
      setIndex(lastIndex)
    }
    if (index > lastIndex) {
      setIndex(0)
    }
  }, [index, handleArrow])

  useEffect(() => {
    const slider = setInterval(() => {
      setIndex(index + 1)
    }, 3000)
    return () => clearInterval(slider)
  }, [index])

  return (
    <div className={styles.container}>
      <div
        className={styles.arrowContainer}
        style={{ left: 0 }}
        onClick={() => handleArrow('l')}
      >
        <Image src='/img/arrowl.png' alt='' layout='fill' objectFit='contain' />
      </div>
      <div
        className={styles.wrapper}
        style={{ transform: `translateX(${-100 * index}vw)` }}
      >
        {images.map((img, i) => (
          <div className={styles.imgContainer} key={i}>
            <Image src={img} alt='' layout='fill' objectFit='contain' />
          </div>
        ))}
      </div>
      <div
        className={styles.arrowContainer}
        style={{ right: 0 }}
        onClick={() => handleArrow('r')}
      >
        <Image src='/img/arrowr.png' layout='fill' alt='' objectFit='contain' />
      </div>
    </div>
  )
}

export default Featured
