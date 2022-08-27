import { GetServerSidePropsContext } from 'next'
import { useRef } from 'react'
import { getServerSideSession } from '../../server/common/get-session'
import { useAutoAnimate } from '@formkit/auto-animate/react'

interface CardTypes {
  title: string
  description: string
}

function OptionCard({ title, description }: CardTypes) {
  return (
    <>
      <div id="card" className="p-8 border rounded-md border-[#222222]">
        <h2 className="text-2xl font-bold">{title}</h2>
        <p className="mt-4">{description}</p>
        <a href="#" className="block mt-7 float-right">
          Show &#8594;
        </a>
      </div>
    </>
  )
}

function Cards() {
  const cards = useRef([
    {
      title: 'Dashboard',
      description: 'All the neccesary information you need at your fingertips.',
    },
    { title: 'Settings', description: 'Description.' },
  ])
  const [parent] = useAutoAnimate<HTMLDivElement>(/* optional config */)

  return (
    <>
      <div
        id="card wrapper"
        className="py-8 px-3 grid gap-5 grid-cols-4"
        ref={parent}
      >
        {cards.current.map((card) => {
          return <OptionCard key={`card-${card.title}`} {...card} />
        })}
      </div>
    </>
  )
}

function Index() {
  return (
    <>
      <div className="overflow-hidden text-gray-100 grid grid-cols-[minmax(222px,_auto)_1fr] min-h-screen selection:bg-lime-300 selection:text-lime-900">
        <div className="border-r p-10 border-[#222222]">
          <nav className="flex flex-col justify-between h-full">
            <ul>
              <li>Overview</li>
              <li>Dashboard</li>
              <li>Exercice</li>
              <li>Explore</li>
              <li>Friends</li>
            </ul>
            <ul>
              <li>Profile</li>
              <li>Settings</li>
            </ul>
          </nav>
        </div>
        <div id="main body" className="p-10">
          <div id="dialog">
            <ul>
              <li>Account</li>
              <li>Settings</li>
              <li>Log Out</li>
            </ul>
          </div>
          <header id="account">
            <span>mail</span>
          </header>
          <section>
            <div id="greeting">
              <span>Profile Pic</span>
              <p>Firstname Lastname</p>
              <p>Message</p>
            </div>
            <h1 className="text-4xl font-bold">Menu</h1>
            <Cards />
          </section>
        </div>
      </div>
    </>
  )
}

//*** Check if user is authenticated ***

// export async function getServerSideProps(ctx: GetServerSidePropsContext) {
//   const { req, res } = ctx;

//   const session = await getServerSideSession(ctx);

//   if (!session && res) {
//     res.writeHead(302, {
//       Location: "/",
//     });
//     res.end();
//     return {
//       props: {}
//     };
//   }

//   return {
//     props: {
//       session: null,
//     }, // will be passed to the page component as props
//   };
// }

export default Index
