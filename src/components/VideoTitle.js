import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black to-transparent'>
      <div className='pt-[20%] px-12 text-white'>
        <h1 className='text-5xl font-bold'>{title}</h1>
        <p className='py-6 text-lg w-1/2'>{overview}</p>
        <div className='flex space-x-4'>
            <button className='bg-gray-600 text-white font-bold px-18 py-2 rounded-lg
            w-32 text-lg'>▶ Play</button>
            <button className='bg-gray-600 text-white font-bold px-18 py-2 rounded-lg
            w-32 text-lg bg-opacity-70'> ℹ My List</button>
        </div>
      </div>
    </div>
  )
}

export default VideoTitle