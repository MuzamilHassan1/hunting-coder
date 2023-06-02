import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import styles from '../../styles/BlogPost.module.css'
import axios from 'axios';

const slug = (props) => {
  // const router = useRouter();
  // useEffect(()=>{
  //   if (!router.isReady) return;
  //   const { query: { slug } } = router; //same as router.query.slug
  //   axios.get(`http://localhost:3000/api/getblog?slug=${slug}`)
  //   .then(data => setBlog(data.data))
  //   .catch(error => console.log(error));
  // }, [router.isReady]);

  const [blog, setBlog] = useState(props.blogData);

  return (
    <div className={styles.container}>
      <h2>{blog.title}</h2>
      <h4>Author: {blog.author}</h4>
      <hr />
      <p className='content'>{blog.content} </p>
    </div>
  )
}

// This gets called on every request
export async function getServerSideProps(context) {
  // context.req.url -> URL
  const {query: {slug}} = context; //same as context.query.slug
  let blog = await axios.get(`http://localhost:3000/api/getblog?slug=${slug}`).data;
  let blogData = blog.data;
  return { props: {blogData} };
}

export default slug
