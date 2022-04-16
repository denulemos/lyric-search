import React from 'react'
import useLyrics from '../hooks/useLyrics'

const Lyric = () => {
    const {lyric, loading} = useLyrics();
  return (
      loading ? 'Loading' : 
    <div className='lyric'>{lyric}</div>
  )
}

export default Lyric