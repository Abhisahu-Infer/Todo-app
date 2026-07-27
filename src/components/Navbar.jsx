import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav className='bg-purple-400 w-full h-25 flex justify-between items-center'>
        <div className="font-bold md:text-xl text-sm text-blue-900">
            <ul className='flex md:gap-5 gap-2 px-2 '>
                <li className='cursor-pointer'>Home</li>
                <li className='cursor-pointer'>Mode</li>
            </ul>
        </div>
        <div className='flex justify-center items-center flex-col w-[100px]'>
            <h1 className='md:text-3xl text-xl font-bold text-purple-900'>Itask</h1>
        </div>
        <div className="font-bold md:text-xl text-sm px-10 text-blue-900">Profile</div>
      </nav>
    </div>
  )
}

export default Navbar
