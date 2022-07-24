import type { NextPage } from "next";
import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { useCallback } from "react";
import Link from "next/link";

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
    <main className="container min-h-screen mx-auto flex flex-col gap-4 justify-center text-lime-100">
      
      <h1 className="text-5xl font-semibold ">
        Sign up for your free <br /> account.
      </h1>

      <p className="text-base">
        Trusted by many big companies all around the globe.
      </p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className='flex flex-col gap-6'
      >
        <label htmlFor="email" className="block">
          <span className="block font-medium text-sm">Email</span>
          <input
            id="email"
            type="text"
            placeholder="Input text"
            {...register("email", { required: true })}
            autoComplete="email"
            className="bg-transparent border rounded-md p-5 invalid:border-red-500 invalid:text-red-600
          focus:invalid:border-red-500 focus:invalid:ring-red-500 caret-lime-400 placeholder:italic"
          />
          {errors.email && <p className="text-red-600">Email is required</p>}
        </label>

        <label htmlFor="new-password" className="block">
          <span className="block font-medium text-sm">Password</span>
          <input
            id="new-password"
            type="password"
            placeholder="Input text"
            {...register("password", { required: true })}
            autoComplete="new-password"
            className="bg-transparent border rounded-md p-5 invalid:border-red-500 invalid:text-red-600
          focus:invalid:border-red-500 focus:invalid:ring-red-500 caret-lime-400 placeholder:italic"
          />
          {errors.password && <p className="text-red-600">Password is required</p>}
        </label>

        <button className="px-8 py-3 text-neutral-900 font-black uppercase bg-lime-500 rounded-md">Sign Up</button>
      </form>

      <p>
        By signing up, you are agreeing to the{" "}
        <a className="underline text-lime-500">Kochalka terms of service.</a>{" "}
        View our <a className="underline text-lime-500">privacy policy.</a>
      </p>

      <p>
        Already registered?{" "}
        <Link href="/signin">
          <a className="underline text-lime-500">Sign into existing account.</a>
        </Link>
      </p>
    </main>
  );
};

export default SignUp;
