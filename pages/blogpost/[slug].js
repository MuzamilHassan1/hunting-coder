import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import styles from '../../styles/BlogPost.module.css'
import axios from 'axios';

const slug = () => {
  const router = useRouter();

  useEffect(()=>{
    if (!router.isReady) return;
    const { query: { slug } } = router; //same as router.query.slug
    axios.get(`http://localhost:3000/api/getblog?slug=${slug}`)
    .then(data => setBlog(data.data))
    .catch(error => console.log(error));
  }, [router.isReady]);
  const [blog, setBlog] = useState('')

  return (
    <div className={styles.container}>
      <h2>{blog.title}</h2>
      <h4>Author: {blog.author}</h4>
      <hr />
      <p className='content'>{blog.content} </p>
    </div>
  )
}

export default slug
