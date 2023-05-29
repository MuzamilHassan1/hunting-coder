import React from 'react'
import { useRouter } from 'next/router'

const slug = () => {
  const router = useRouter();
  const { query: { slug } } = router;

  return (
    <div>{slug}</div>
  )
}

export default slug
