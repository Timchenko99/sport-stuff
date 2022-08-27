import Link from 'next/link'
import { useRef, Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

function NavBar() {
  const data = useRef([
    { name: 'Home', href: '#' },
    { name: 'About', href: '/#about' },
    { name: 'Services', href: '/#services' },
    { name: 'Contact Us', href: '#' },
  ])

  const navigations = data.current.map(({ name, href }) => {
    return (
      <li key={`link-${name}`}>
        <Link href={href}>
          <a className="block md:inline-block px-3 py-2 rounded-md hover:bg-gray-400 hover:text-gray-100">
            {name}
          </a>
        </Link>
      </li>
    )
  })

  return (
    <>
      <Popover className="relative">
        <div className=" pt-6 px-4 sm:px-6 lg:px-8 container mx-auto">
          <div className="flex items-center justify-end overflow-hidden">
            <nav
              className="flex items-center justify-between sm:h-10 lg:justify-start"
              aria-label="Global"
            >
              <div className="flex items-center md:hidden">
                <Popover.Button className="rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-lime-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-lime-500">
                  <span className="sr-only">Open main menu</span>
                  <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
              <ul className="hidden md:flex md:space-x-8 text-base font-medium text-gray-500">
                {navigations}
                <button className="text-base font-medium px-3 py-2 rounded-md text-lime-500 hover:bg-lime-600 hover:text-gray-900">
                  Sign In
                </button>
              </ul>
            </nav>
          </div>
        </div>

        <Transition
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden text-gray-100 ">
            <div className="rounded-lg shadow-md bg-neutral-800 ring-1 ring-black ring-opacity-5 overflow-hidden">
              <div className="px-5 pt-4 flex flex-col ">
                <div className="flex items-center justify-end">
                  <Popover.Button className="text-gray-100">
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
                <ul className="px-2 pt-2 pb-6 space-y-1">{navigations}</ul>
              </div>
              <button className="px-5 py-3 text-lime-500 w-full font-bold bg-neutral-900">
                Sign In
              </button>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </>
  )
}

export default NavBar
