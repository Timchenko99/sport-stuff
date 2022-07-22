import type { NextPage } from "next";
import Head from "next/head";
import { trpc } from "../utils/trpc";
import Link from "next/link";

const Home: NextPage = () => {
  const hello = trpc.useQuery(["example.hello", { text: "from tRPC" }]);

  return (
    <>
      <Head>
        <title>Kochalka</title>
        <meta name="description" content="Exercise platform" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="flex items-center justify-center text-gray-400 h-[72px] min-h-[72px]">
        {/* <img src="#" alt="logo" /> */}
        <nav>
          <ul className="flex gap-5">
            <li><a href="#about" className="hover:text-white">About</a></li>
            <li><a href="#Services" className="hover:text-white">Services</a></li>
            <li><a href="#Contact Us" className="hover:text-white">Contact Us</a></li>
            <li><a href="/signin" className="hover:text-white">Sign In</a></li>
          </ul>
        </nav>
      </header>

      <main className="container mx-auto flex flex-col items-center justify-center h-[calc(100vh-72px)] p-4 selection:bg-lime-300 selection:text-lime-900">
        <section className="flex lg:grid lg:grid-cols-2 lg:gap-20 lg:place-items-center">
          <div>
          <h1 className="text-6xl md:text-[5rem] font-extrabold text-lime-100 mb-5 leading-[77px]">
            Exercise as you wish.
          </h1>
          <p className="text-2xl text-gray-400 mb-16">Get access to our limitless knowledge base with over 150+ thousand workout programs created by professionals today!</p>
          <Link href='/signup'><button className="shadow-md shadow-lime-400/50 hover:shadow-lg hover:shadow-lime-500/40 px-8 py-3 text-neutral-900 font-bold uppercase bg-gradient-to-tr from-lime-500 to-lime-400 hover:from-lime-600 hover:to-lime-700 rounded-md">get started</button></Link>
          </div>
          <div className="relative">

            <img src="./lightning.svg" alt="green lightning icon" className="hidden absolute top-0 left-[3.25rem] lg:block z-10"/>
            <img src="./lightning-bg.svg" alt="" className=" hidden lg:block"/>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
