import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav className='bg-purple-400 w-full h-25 flex flex-col justify-center items-center'>
        <div className='flex justify-center items-center flex-col'>
            <h1 className='md:text-4xl text-3xl font-bold text-purple-900'>Itask</h1>
        </div>
        <div className="md:text-xl text-md font-bold">your daily task manager</div>
      </nav>
    </div>
  )
}

export default Navbar
