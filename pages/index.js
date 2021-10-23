import { getSession } from 'next-auth/client'
import Head from 'next/head'
import Image from 'next/image'
import Feed from '../components/Feed'
import Header from '../components/Header'
import Login from '../components/Login'
import Sidebar from '../components/Sidebar'
import styles from '../styles/Home.module.css'

export default function Home({ session }) {
  if(!session) return <Login />
  return (
    <div >
      <Head>
        <title>Facebook</title>
        
      </Head>
      
      
      <Header/>

      <main className="flex bg-gray-100">
        {/* sidebar */}
        <Sidebar />
        {/* Feed */}
        <Feed />
        {/* widgets */}
      </main>
    </div>
  )
}

export async function getServerSideProps(context) {
  // Get the user
  const session = await getSession(context)

  return {
    props: {
      session
    }
  }
}
