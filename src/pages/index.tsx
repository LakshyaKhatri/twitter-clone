import Head from 'next/head'
import Sidebar from '@/components/Sidebar'
import Feed from '@/components/Feed'
import Login from '@/components/Login'
import { getSession, getProviders, useSession } from 'next-auth/react'

export default function Home({ providers }) {
  const { data: session } = useSession()

  if (!session) return <Login providers={providers}/>
  return (
    <div>
      <Head className="">
        <title>Twitter</title>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen flex max-w-[1500px] mx-auto">
        <Sidebar />
        <Feed />
        {/* Widgets */}

        {/* Modal */}
      </main>
    </div>
  )
}

export async function getServerSideProps(context) {
  const providers = await getProviders()
  const session = await getSession(context)

  return {
    props: {
      providers,
      session,
    },
  }
}
