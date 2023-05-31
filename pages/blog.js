import React from 'react'
import styles from '../styles/Blog.module.css'
import Link from 'next/link'

const Blog = () => {
  return (
    <div className={styles.container}>
      <div className="blogs">
        <div className="blogItem">
          <Link className={styles.blogLink} href='/blogpost/learn-js-in-2023'><h3>How to learn js in 2023.</h3></Link>
          <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit,.....</p>
        </div>
        <div className="blogItem">
          <Link className={styles.blogLink} href='/blogpost/learn-js-in-2023'><h3>How to learn js in 2023.</h3></Link>
          <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit,.....</p>
        </div>
        <div className="blogItem">
          <Link className={styles.blogLink} href='/blogpost/learn-js-in-2023'><h3>How to learn js in 2023.</h3></Link>
          <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit,.....</p>
        </div>
        <div className="blogItem">
          <Link className={styles.blogLink} href='/blogpost/learn-js-in-2023'><h3>How to learn js in 2023.</h3></Link>
          <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit,.....</p>
        </div>
      </div>
    </div>
  )
}

export default Blog
