import React from 'react'
import Head from 'next/head'
import Menu from '../components/Menu'
const library = () => {
  return (
    <div>
      <head>
        <title>Library</title>
        <meta name="keywords" content="music, streaming, entertainment"></meta>
      </head>
      <div className="flex min-h-screen">
        <nav className="w-64 flex-shrink-0">
          <div className="h-full flex-auto bg-gray-900">
            <div className="flex flex-col overflow-y-auto">
              <ul className="relative m-0 h-full list-none p-0">
                <li className="relative flex w-full justify-start border-b-2 border-gray-700 bg-gray-800 p-4 text-2xl text-white shadow-sm">
                  Bloow Africa
                </li>
                <li className="relative flex w-full p-4 shadow-sm">
                  <div className="my-1 flex-auto">
                    <span className="font-medium text-white">Playlists</span>
                  </div>
                </li>

                <div className="relative flex cursor-pointer px-4 text-teal-400 hover:bg-gray-700">
                  <div className="my-auto mr-4">
                    <svg
                      className="h-5 w-5 fill-current"
                      focusable="false"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"></path>
                    </svg>
                  </div>
                  <div className="my-1 flex-auto">
                    <span>Today's Hits</span>
                  </div>
                </div>

                <div className="relative flex cursor-pointer px-4 text-gray-400 hover:bg-gray-700">
                  <div className="my-auto mr-4">
                    <svg
                      className="h-5 w-5 fill-current"
                      focusable="false"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M19 13H5c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-4c0-1.1-.9-2-2-2zM7 19c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM19 3H5c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM7 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"></path>
                    </svg>
                  </div>
                  <div className="my-1 flex-auto">
                    <span>Good Vides</span>
                  </div>
                </div>

                <div className="relative flex cursor-pointer px-4 text-gray-400 hover:bg-gray-700">
                  <div className="my-auto mr-4">
                    <svg
                      className="h-5 w-5 fill-current"
                      focusable="false"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M21 3H3C2 3 1 4 1 5v14c0 1.1.9 2 2 2h18c1 0 2-1 2-2V5c0-1-1-2-2-2zM5 17l3.5-4.5 2.5 3.01L14.5 11l4.5 6H5z"></path>
                    </svg>{' '}
                  </div>
                  <div className="my-1 flex-auto">
                    <span>Afrobeats Mix</span>
                  </div>
                </div>

                <div className="relative flex cursor-pointer px-4 text-gray-400 hover:bg-gray-700">
                  <div className="my-auto mr-4">
                    <svg
                      className="h-5 w-5 fill-current"
                      focusable="false"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"></path>
                    </svg>{' '}
                  </div>
                  <div className="my-1 flex-auto">
                    <span>Bongo Flavor</span>
                  </div>
                </div>

                <div className="relative flex cursor-pointer px-4 text-gray-400 hover:bg-gray-700">
                  <div className="my-auto mr-4">
                    <svg
                      className="h-5 w-5 fill-current"
                      focusable="false"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M7.77 6.76L6.23 5.48.82 12l5.41 6.52 1.54-1.28L3.42 12l4.35-5.24zM7 13h2v-2H7v2zm10-2h-2v2h2v-2zm-6 2h2v-2h-2v2zm6.77-7.52l-1.54 1.28L20.58 12l-4.35 5.24 1.54 1.28L23.18 12l-5.41-6.52z"></path>
                    </svg>
                  </div>
                  <div className="my-1 flex-auto">
                    <span>House Mix</span>
                  </div>
                </div>
              </ul>
            </div>
          </div>
        </nav>

        <div className="flex w-full flex-col">
          <header className="sticky left-auto top-0 right-0 bg-teal-400 text-white">
            <div className="relative flex h-12 items-center justify-end px-6">
              <button className="mx-4 flex text-white hover:text-gray-200 focus:outline-none">
                <svg
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 17H20L18.5951 15.5951C18.2141 15.2141 18 14.6973 18 14.1585V11C18 8.38757 16.3304 6.16509 14 5.34142V5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5V5.34142C7.66962 6.16509 6 8.38757 6 11V14.1585C6 14.6973 5.78595 15.2141 5.40493 15.5951L4 17H9M15 17V18C15 19.6569 13.6569 21 12 21C10.3431 21 9 19.6569 9 18V17M15 17H9"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </button>

              <button className="relative block h-8 w-8 overflow-hidden rounded-full shadow focus:outline-none">
                <img
                  className="h-full w-full object-cover"
                  src="https://www.w3schools.com/howto/img_avatar.png"
                  alt="Avatar"
                ></img>
              </button>
            </div>
          </header>
        </div>
      </div>
    </div>
  )
}
export default library
