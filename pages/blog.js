import React, { useEffect, useState } from 'react'
import styles from '../styles/Blog.module.css'
import Link from 'next/link'
import axios from 'axios'

const Blog = (props) => {
  // useEffect(()=>{
  //   axios.get('http://localhost:3000/api/blogs')
  //   .then(data => setBlogData(data.data))
  //   .catch(error => console.log(error));
  // }, []);

  const [blogData, setBlogData] = useState(props.allBlogsData);

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


// This gets called on every request
export async function getServerSideProps() {
  let blogs = await axios.get('http://localhost:3000/api/blogs');
  let allBlogsData = blogs.data;
  // Pass data to the BLOG Component via props
  return { props: { allBlogsData} };
}

export default Blog
