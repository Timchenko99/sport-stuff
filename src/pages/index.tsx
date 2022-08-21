import { signIn } from "next-auth/react";
import Head from "next/head";
import NavBar from "../components/NavBar";

function Home() {
  return (
    <>
      <Head>
        <title>Sport-Stuff</title>
        <meta name="description" content="Exercise platform" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-gradient-to-tr from-[#0B0B0B] to-[#0A1201]">
        <NavBar />

        <section className="container mx-auto h-[calc(100vh-72px)] p-4 flex lg:grid lg:grid-cols-2 lg:gap-20 lg:place-items-center selection:bg-lime-300 selection:text-lime-900">
          <div>
            <h1 className="text-6xl md:text-[5rem] font-extrabold text-lime-100 mb-5 leading-[77px]">
              Exercise as you wish.
            </h1>
            <p className="text-2xl text-gray-400 mb-16">
              Get access to our limitless knowledge base with over 150+ thousand
              workout programs created by professionals today!
            </p>
            <button
              onClick={() => signIn()}
              className="px-8 py-3 text-neutral-900 font-black uppercase bg-lime-400 hover:bg-lime-200 [&:focus-visible]:bg-lime-200 active:bg-lime-700 focus:outline-none focus:ring focus:ring-lime-700  rounded-md"
            >
              get started
            </button>
          </div>
          <div className="relative">
            <img
              src="./lightning.svg"
              alt="green lightning icon"
              className="hidden absolute top-0 left-[3.25rem] lg:block z-10"
            />
            <img src="./lightning-bg.svg" alt="" className=" hidden lg:block" />
          </div>
        </section>
      </header>

      <main className="container mx-auto flex flex-col items-center justify-center"></main>
    </>
  );
}

export default Home;
