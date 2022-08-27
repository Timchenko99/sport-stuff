import { useForm } from 'react-hook-form'
import Link from 'next/link'

import { AiFillGithub } from 'react-icons/ai'
import { IconContext } from 'react-icons'
import NavBar from '../../components/NavBar'
import { getProviders, signIn } from 'next-auth/react'
import type { LiteralUnion, ClientSafeProvider } from 'next-auth/react'
import type { BuiltInProviderType } from 'next-auth/providers'

import { getServerSideSession } from '../../server/common/get-session'
import { GetServerSidePropsContext } from 'next'

interface Inputs {
  email: string
}

function SignInForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>()

  return (
    <form
      onSubmit={handleSubmit(() => signIn('twitch'))}
      className="w-full mb-6"
    >
      <label htmlFor="email" className="block mb-6 text-start">
        <span className="block font-medium text-sm mb-3">Email</span>
        <input
          id="email"
          type="text"
          placeholder="Input text"
          {...register('email', { required: true })}
          autoComplete="email"
          className="w-full bg-transparent border rounded-md px-5 py-4 invalid:border-red-500 invalid:text-red-600
          focus:invalid:border-red-500 focus:invalid:ring-red-500 caret-lime-400 placeholder:italic placeholder:text-slate-400"
        />
        {errors.email && <p className="text-red-600">Email is required</p>}
      </label>

      <button className="w-full px-8 py-3 text-neutral-900 font-black  bg-lime-500 hover:bg-lime-600 rounded-md active:bg-lime-700 focus:outline-none focus:ring focus:ring-lime-300">
        Sign In
      </button>
    </form>
  )
}

function SignInProvider({ provider }: { provider: ClientSafeProvider }) {
  if (provider.name === 'GitHub') {
    return (
      <button
        onClick={() => signIn(provider.id)}
        className="w-full px-8 py-3 mb-6  text-neutral-900 font-black bg-neutral-300 hover:bg-neutral-500  rounded-md active:bg-lime-700 focus:outline-none focus:ring focus:ring-lime-300 flex items-center justify-center gap-2"
      >
        <AiFillGithub width="200px" className="inline-block" />
        <span>Sign in with {provider.name}</span>
      </button>
    )
  }

  return (
    <button
      onClick={() => signIn(provider.id)}
      className="w-full px-8 py-3 mb-6  text-neutral-900 font-black bg-neutral-300 hover:bg-neutral-500  rounded-md active:bg-lime-700 focus:outline-none focus:ring focus:ring-lime-300 flex items-center justify-center gap-2"
    >
      Sign in with {provider.name}
    </button>
  )
}

function ListOfProviders({
  providers,
}: {
  providers: Record<
    LiteralUnion<BuiltInProviderType, string>,
    ClientSafeProvider
  >
}) {
  return (
    <>
      {Object.values(providers).map((provider) => (
        <div key={provider.name} className="w-full">
          <SignInProvider provider={provider} />
        </div>
      ))}
    </>
  )
}

function LegalInfo() {
  return (
    <>
      <p className="mb-4">
        <span>By signing In, you are agreeing to the </span>
        <Link href="/terms">
          <a className="underline text-lime-500">Kochalka terms of service.</a>
        </Link>
        <span>View our </span>
        <Link href="/privacy">
          <a className="underline text-lime-500">privacy policy.</a>
        </Link>
      </p>

      <p>
        <span>Already registered? </span>
        <Link href="/signin">
          <a className="underline text-lime-500">Sign into existing account.</a>
        </Link>
      </p>
    </>
  )
}

function SignIn({
  providers,
}: {
  providers: Record<
    LiteralUnion<BuiltInProviderType, string>,
    ClientSafeProvider
  >
}) {
  return (
    <IconContext.Provider value={{ size: '1.50rem' }}>
      <header>
        <NavBar />
      </header>
      <main className="container mx-auto p-4 h-[calc(100vh-72px)] grid place-content-center text-lime-100 selection:bg-lime-300 selection:text-lime-900">
        <div className="flex flex-col items-center max-w-md text-center">
          <h1 className="text-5xl font-semibold mb-4">
            Sign In for your free account.
          </h1>

          <p className="mb-8">Trusted by couple dudes and a half.</p>

          <SignInForm />
          <ListOfProviders providers={providers} />
          <LegalInfo />
        </div>
      </main>
    </IconContext.Provider>
  )
}

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const { req, res } = ctx

  const session = await getServerSideSession(ctx)
  const providers = await getProviders()

  if (session && res) {
    res.writeHead(302, {
      Location: '/',
    })
    res.end()
    return
  }

  return {
    props: {
      session: null,
      providers,
    }, // will be passed to the page component as props
  }
}

export default SignIn
