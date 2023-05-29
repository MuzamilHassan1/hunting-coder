import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Hunting Coder</title>
      </Head>

      <nav className={styles.mainNav}>
        <ul>
          <Link href='/'><li>Home</li></Link>
          <Link href='/about'><li>About</li></Link>
          <Link href='/blog'><li>Blog</li></Link>
          <Link href='/contact'><li>Contact</li></Link>
        </ul>
      </nav>

      <main>
        <h1 className={styles.title}>
          Hunting Coder
        </h1>

        <p className={styles.description}>
          A Blog for Hunting Coders written by Hunting Coder.
        </p>

        <div className="blogs">
          <h2>Popular Blogs</h2>
          <div className="blogItem">
            <h3>How to learn js in 2023.</h3>
            <p>Javascripts is the front end framework that allows us to write client side logic into our websites.</p>
          </div>
          <div className="blogItem">
            <h3>How to learn js in 2023.</h3>
            <p>Javascripts is the front end framework that allows us to write client side logic into our websites.</p>
          </div>
          <div className="blogItem">
            <h3>How to learn js in 2023.</h3>
            <p>Javascripts is the front end framework that allows us to write client side logic into our websites.</p>
          </div>
          <div className="blogItem">
            <h3>How to learn js in 2023.</h3>
            <p>Javascripts is the front end framework that allows us to write client side logic into our websites.</p>
          </div>
        </div>

      </main>

      <style jsx>{`
        main {
          padding: 2rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
