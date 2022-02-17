import react from 'react'
import Menu from './Menu'

export default function Navbar() {
  return (
    <nav class="flex flex-wrap items-center justify-between bg-gray-900 p-3">
      <div class="mr-6 flex flex-shrink-0 items-center text-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10  text-teal-200"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
        </svg>
        <span class="px-4 text-xl font-semibold tracking-tight">
          Bloow Africa
        </span>
      </div>
      <div class="block lg:hidden">
        <Menu />
      </div>
      <div class=" block block w-full flex-grow sm:hidden lg:flex lg:w-auto lg:items-center">
        <div class="text-sm lg:flex-grow">
          <a
            href="../index"
            class="mt-4 ml-4 block text-teal-200 hover:text-white lg:mt-0 lg:inline-block"
          >
            Home
          </a>
          <a
            href="../library"
            class="mt-4 ml-4 block text-teal-200 hover:text-white lg:mt-0 lg:inline-block"
          >
            Library
          </a>
          <a
            href="../register"
            class="mt-4 ml-4 block text-teal-200 hover:text-white lg:mt-0 lg:inline-block"
          >
            Register
          </a>
          <a
            href="../login"
            class="mt-4 ml-4 block text-teal-200 hover:text-white lg:mt-0 lg:inline-block"
          >
            Login
          </a>
        </div>
        <div></div>
        <div class="relative mx-auto pt-2 text-gray-600">
          <input
            class="h-10 rounded-lg border-2 border-gray-300 bg-white px-5 pr-16 text-sm focus:outline-none"
            type="search"
            name="search"
            placeholder="Search"
          ></input>
          <button type="submit" class="absolute right-0 top-0 mt-5 mr-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  )
}
