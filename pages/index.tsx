import { Component, useState } from 'react'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Play from '../components/Play'
import { useRouter } from 'next/router'
import Upload from '../components/Upload'


export default function Home() {
  const router = useRouter()

  function addComponent() {
    ;<Play />
  }
  const [isFormOpen, setIsFormOpen] = useState('')

  const [songs, setsongs] = useState([
    {
      id: 1,
      title: 'song 1',
      artist: 'artist 1',
      img_src: 'publicimg1.jpg',
      src: 'publicsong1.mp3',
    },
    {
      id: 2,
      title: 'song 2',
      artist: 'artist 2',
      img_src: 'publicimg2.jpg',
      src: 'publicsong2.mp3',
    },
    {
      id: 3,
      title: 'song 3',
      artist: 'artist 3',
      img_src: 'publicimg3.jpg',
      src: 'publicsong3.mp3',
    },
  ])

  function navigateToSong(songId: number) {
    console.log('HI')
    router.push(`song/${songId}`)
  }

  return (
    <>
      <div>
        <Head>
          <title>Bloow Africa</title>
          <meta
            name="keywords"
            content="music, streaming, entertainment"
          ></meta>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Navbar />
        {/* <Play /> */}

        <link
          rel="stylesheet"
          href="https://cdn.tailgrids.com/tailgrids-fallback.css"
        />
        <main className="grid min-h-screen place-items-center bg-gradient-to-t from-teal-200 to-teal-700 p-5">
          <div>
            <h4 className="mb-5 text-4xl font-bold text-gray-200 sm:text-5xl md:text-5xl">
              Connecting souls with music
            </h4>
            <section className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {songs.map((song) => (
                <div className="rounded bg-gray-900 p-3 shadow-lg">
                  <div className="group relative">
                    <img
                      className="round block w-full md:w-72"
                      src="https://img.freepik.com/free-vector/elegant-musical-notes-music-chord-background_1017-20759.jpg?size=338&ext=jpg"
                      alt=""
                    />
                    <div className="group-hover:opacity-400  absolute top-0 flex h-full w-full items-center justify-evenly rounded bg-opacity-0 transition group-hover:bg-gray-200">
                      <button className="translate-y-3 transform text-gray-900 opacity-0 transition hover:scale-110 group-hover:translate-y-0 group-hover:opacity-100">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          fill="currentColor"
                          className="bi bi-heart"
                          viewBox="0 0 16  16"
                        >
                          <path d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                        </svg>
                      </button>

                      <button
                        onClick={() => navigateToSong(song.id)}
                        className="text-gray-990 translate-y-3 transform opacity-0 transition hover:scale-110 group-hover:translate-y-0 group-hover:opacity-100"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="40"
                          height="40"
                          fill="currentColor"
                          className="bi bi-play-circle-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z" />
                        </svg>
                      </button>

                      <button className="translate-y-3 transform text-gray-900 opacity-0 transition hover:scale-110 group-hover:translate-y-0 group-hover:opacity-100">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          fill="currentColor"
                          className="bi bi-three-dots"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg text-white">{song.title}</h3>
                    <p className="text-gray-400">{song.artist}</p>
                  </div>
                </div>
              ))}
            </section>
            <Upload/>

          </div>
          <div className="px-4 py-6">
          </div>
        </main>
      </div>
    </>
  )
}
