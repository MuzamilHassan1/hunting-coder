import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Image from 'next/image';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Hunting Coder</title>
      </Head>


      <main>
        <h1 className={styles.title}>
          Hunting Coder
        </h1>

        <Image className={styles.homeImage} src='/homepic.jpg' alt='This is home Page Image' priority={true} width={518} height={315}></Image>

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
