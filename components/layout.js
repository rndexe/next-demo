import Head from 'next/head'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

const name = 'Recursive functions'
export const siteTitle = 'Storyline demo'

export default function Layout({children}) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        
          <>
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        
      </header>
      <main>{children}</main>
    </div>
  )
}
