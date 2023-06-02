import React, { useEffect, useState } from 'react'
import styles from '../styles/Blog.module.css'
import Link from 'next/link'
import axios from 'axios'

const Blog = () => {
  useEffect(()=>{
    axios.get('http://localhost:3000/api/blogs')
    .then(data => setBlogData(data.data))
    .catch(error => console.log(error));
  }, []);

  const [blogData, setBlogData] = useState([]);
  console.log(blogData);

  return (
    <div className={styles.container}>
      <div className="blogs">
        {blogData.map((data)=>(
          <div className="blogItem" key={data.slug}>
            <Link className={styles.blogLink} href={`/blogpost/${data.slug}`}><h3>{data.title}</h3></Link>
            <p>{data.content.slice(0,100)}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Blog
