import React from 'react'
import style from '../styles/library.module.css'
import db from '../firebase'
import firebase from 'firebase/compat/app'
import 'firebase/storage'
import { useState } from 'react'

function Upload() {
  const [fileUrl, setFileUrl] = React.useState(null)
  const [musicUrl, setMusicUrl] = React.useState(null)
  const [disable, setDisable] = React.useState(true)

  const filechanged = async (e) => {
    var file = e.target.files[0]
    var storageRef = firebase.storage().ref('Image')
    const fileRef = storageRef.child(file.name)
    await fileRef.put(file)
    setFileUrl(await fileRef.getDownloadURL())
  }
  const musicchanged = async (e) => {
    var music = e.target.files[0]
    var storagemRef = firebase.storage().ref('Music')
    const musicRef = storagemRef.child(music.name)
    await musicRef.put(music)
    setMusicUrl(await musicRef.getDownloadURL())
  }

  React.useEffect(() => {
    if (musicUrl !== null) {
      setDisable(false)
      alert('click on submit')
      console.log(disable)
    }
  }, [musicUrl])

  const submit = (e) => {
    e.preventDefault()
    if (musicUrl != null && fileUrl !== null) {
      const musicname = e.target.musicname.value
      if (!musicname) {
        return
      }
      db.collection('Music').doc(musicname).set({
        name: musicname,
        music: musicUrl,
        image: fileUrl,
      })
      alert('Music added')
    }
  }
  return (
    <>
    <div className={style.uploadpage}>
        <form onSubmit={submit} className={style.uploadform}>
          <label>images</label>
          <input
            type="file"
            className={style.myfile}
            name="img"
            onChange={filechanged}
            required />
          <label>Music files</label>
          <input type="file" name="music" onChange={musicchanged} required />
          <input type="text" name="musicname" placeholder="Music name" required />
          <button className={style.btn} disabled={disable}>
            Submit
          </button>
        </form>
      </div></>
  )
}

export default Upload
