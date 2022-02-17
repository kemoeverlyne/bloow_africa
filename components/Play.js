import React from 'react'
import { useState } from 'react'
import PlayerDetails from './PlayerDetails'
import PlayerControls from './PlayerControls'
import style from '../styles/player.module.css'

function Play(props) {
  return (
    <div className={style.cplayer}>
      <audio></audio>
      <h4>Playing now</h4>
      <PlayerDetails title={props.title} image={props.image} />
      <PlayerControls song={props.play} />
    </div>
  )
}

export default Play
