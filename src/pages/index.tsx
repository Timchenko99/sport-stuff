import { signIn } from 'next-auth/react'
import Head from 'next/head'

import Image from 'next/image'

import NavBar from '../components/NavBar'

function Home() {
  return (
    <>
      <Head>
        <title>Sport-Stuff</title>
        <meta name="description" content="Exercise platform" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/** bg-gradient-to-tr from-[#0B0B0B] to-[#0A1201]*/}

      <header className="sticky top-0">
        <NavBar />
      </header>

      <div className="container mx-auto">
        <main>
          <div className="mt-10 px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="text-center sm:text-left">
              <div className="sm:flex sm:items-center sm:justify-center">
                <div>
                  <h1 className="text-4xl lg:text-7xl tracking-tight font-bold text-lime-100 sm:text-5xl sm:tracking-tight sm:max-w-xl md:text-6xl md:tracking-tight">
                    Exercise as you wish.
                  </h1>
                  <p className="text-base sm:text-lg md:text-xl text-gray-400 mt-3 sm:mt-5 sm:max-w-lg sm:mx-auto md:mt-5 lg:mx-0">
                    Get access to our limitless knowledge base with over 150+
                    thousand workout programs created by professionals today!
                  </p>
                  <button
                    onClick={() => signIn()}
                    className="w-full sm:w-auto text-base sm:text-lg px-8 py-3 text-neutral-900 mt-7 md:mt-16  font-black uppercase bg-lime-400 hover:bg-lime-200 [&:focus-visible]:bg-lime-200 active:bg-lime-700 focus:outline-none focus:ring focus:ring-lime-700  rounded-md"
                  >
                    get started
                  </button>
                </div>
                <div className="mt-10 sm:mt-auto">
                  <Image src="/lightning.svg" alt="" width="436" height="536" />
                </div>
              </div>
            </div>
          </div>
        </main>

        <footer></footer>
      </div>
    </>
  )
}

export default Home
