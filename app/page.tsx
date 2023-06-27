'use client'

import Head from 'next/head'
import { MovieSearch } from './componenets/MovieSearch'

export default function Home() {
  return (
    <div  className="bg-black min-h-screen">
   <Head>
<title>Database Movies</title>
<meta name='description' content='a single movie database for user'/>
    </Head>

    <main className='container mx-auto py-10 mx-4 flex flex-col items-center justify-center'>

    <h1 className='text-4xl font-bold mb-8 text-white'> Movies Database </h1>

    <MovieSearch/>
    </main>
    </div>
  )
}
