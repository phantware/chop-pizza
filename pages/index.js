import Head from 'next/head'
import Image from 'next/image'
import Featured from '../components/Featured'
import ProductList from '../components/ProductList'
import styles from '../styles/Home.module.css'
import axios from 'axios'
import { useState } from 'react'
import Add from '../components/Add'
import AddButton from '../components/AddButton'

export default function Home({ productList, admin }) {
  const [close, setClose] = useState(true)
  return (
    <div className={styles.container}>
      <Head>
        <title>CHOP PIZZA</title>
        <meta
          name='description'
          content='The best Pizza Resturant in Nigeria'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Featured />
      {<AddButton setClose={setClose} />}
      <ProductList productList={productList} />
      {!close && <Add setClose={setClose} />}
    </div>
  )
}

export const getServerSideProps = async (ctx) => {
  const myCookie = ctx.req?.cookies || ''
  let admin = false

  if (myCookie.token === process.env.TOKEN) {
    admin = true
  }

  const res = await axios.get('http://localhost:3000/api/products')
  return {
    props: {
      productList: res.data,
      admin,
    },
  }
}
