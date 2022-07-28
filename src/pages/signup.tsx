import type { NextPage } from "next";
import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { useCallback } from "react";
import Link from "next/link";

import { AiFillGithub, AiOutlineMail, AiOutlineLock } from "react-icons/ai";
import { IconContext } from "react-icons";

interface Inputs {
  email: string;
  password: string;
}

const SignUp: NextPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit = useCallback<SubmitHandler<Inputs>>(
    (data) => console.log(data),
    []
  );

  return (
    <IconContext.Provider value={{ size: "1.50rem" }}>
      <header>
        <nav className="flex items-center justify-center text-gray-400 h-[72px] min-h-[72px]">
          <ul className="flex gap-5">
            <li>
              <Link href="/#about">
                <a className="hover:text-white">About</a>
              </Link>
            </li>
            <li>
              <Link href="/#services">
                <a className="hover:text-white">Services</a>
              </Link>
            </li>
            <li>
              <Link href="/#contactus">
                <a className="hover:text-white">Contact Us</a>
              </Link>
            </li>
            <li>
              <a href="/signin" className="hover:text-white">
                Sign In
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <main className="container mx-auto p-4 h-[calc(100vh-72px)] grid place-content-center text-lime-100 selection:bg-lime-300 selection:text-lime-900">
        <div className="flex flex-col items-center max-w-md text-center">
          <h1 className="text-5xl font-semibold mb-4">
            Sign up for your free account.
          </h1>

          <p className="mb-8">
            Trusted by many big companies all around the globe.
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="w-full mb-6 hidden">
            <label htmlFor="email" className="block mb-6 text-start">
              <span className="block font-medium text-sm mb-3">Email</span>
              <input
                id="email"
                type="text"
                placeholder="Input text"
                {...register("email", { required: true })}
                autoComplete="email"
                className="w-full bg-transparent border rounded-md px-5 py-4 invalid:border-red-500 invalid:text-red-600
          focus:invalid:border-red-500 focus:invalid:ring-red-500 caret-lime-400 placeholder:italic placeholder:text-slate-400"
              />
              {errors.email && (
                <p className="text-red-600">Email is required</p>
              )}
            </label>

            <label htmlFor="new-password" className="block mb-10 text-start">
              <span className="block font-medium text-sm mb-3">Password</span>
              <input
                id="new-password"
                type="password"
                placeholder="Input text"
                {...register("password", { required: true })}
                autoComplete="new-password"
                className="w-full bg-transparent border rounded-md px-5 py-4 invalid:border-red-500 invalid:text-red-600
          focus:invalid:border-red-500 focus:invalid:ring-red-500 caret-lime-400 placeholder:italic placeholder:text-slate-400"
              />
              {errors.password && (
                <p className="text-red-600">Password is required</p>
              )}
            </label>

            <button className="w-full px-8 py-3 text-neutral-900 font-black  bg-lime-500 hover:bg-lime-600 rounded-md active:bg-lime-700 focus:outline-none focus:ring focus:ring-lime-300">
              Sign Up
            </button>
          </form>
          {/* <hr className="mb-6 w-full border-neutral-500/20" /> */}
          <button className="w-full px-8 py-3 mb-6  text-neutral-900 font-black bg-neutral-300 hover:bg-neutral-500  rounded-md active:bg-lime-700 focus:outline-none focus:ring focus:ring-lime-300 flex items-center justify-center gap-2">
            <AiFillGithub width="200px" className="inline-block" /> GitHub
          </button>
          <button className="w-full px-8 py-3 mb-6 text-neutral-400 font-black  border-[2px] border-neutral-900 rounded-md active:bg-lime-700 focus:outline-none focus:ring focus:ring-lime-300 flex items-center justify-center gap-2">
            <AiOutlineLock className="w-7 inline-block" /> Email and Password
          </button>
          <button className="w-full px-8 py-3 mb-6 text-neutral-400 font-black  border-[2px] border-neutral-900 rounded-md active:bg-lime-700 focus:outline-none focus:ring focus:ring-lime-300 flex items-center justify-center gap-2">
            <AiOutlineMail className="w-7 inline-block" /> Magic Link
          </button>



          <p className="mb-4">
            By signing up, you are agreeing to the{" "}
            <Link href="/terms">
              <a className="underline text-lime-500">
                Kochalka terms of service.
              </a>
            </Link>{" "}
            View our{" "}
            <Link href="/privacy">
              <a className="underline text-lime-500">privacy policy.</a>
            </Link>
          </p>

          <p>
            Already registered?{" "}
            <Link href="/signin">
              <a className="underline text-lime-500">
                Sign into existing account.
              </a>
            </Link>
          </p>
        </div>
      </main>
    </IconContext.Provider>
  );
};

export default SignUp;
