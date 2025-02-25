import React from 'react'

const GptSearchBar = () => {
  return (
    <div>
        <form className='p-6 m-6'>
            <input type='text' className=' p-4` m-4' placeholder='What u like to watch'/>
            <button className='py-2 px-4 bg-red-600 text-white font-bold rounded-lg'>Search</button>
        </form>
    </div>
  )
}

export default GptSearchBar