import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Link  from 'next/link'

export default function Post( {postData}) {
  return (
    <Layout>
      {postData.title}
      <br />
      <img src={"/next-demo/images/" + postData.image}/>
      <br />
      <iframe src={postData.video}></iframe>
      <br />
      {postData.content}
      <br />
      <Link href={postData.link}>
	  <a> Next </a>
      </Link>	  
    </Layout>
  )
}

export async function getStaticProps({ params }) {
  const postData = getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}
