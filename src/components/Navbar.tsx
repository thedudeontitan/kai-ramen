import React from 'react'

export default function Navbar() {
  return (
    <div className='fixed flex flex-row justify-between top-0 left-0 right-0 bg-[#F3EDE1] p-8 px-16 border-b border-[#333F72] border-opacity-30'>
        <div>
        Kai Ramen
        </div>
        <div className='flex flex-row gap-10'>
            <div>
                Home
            </div>
            <div>
                Menu
            </div>
            <div>
                About
            </div>
        </div>
        <div className='flex flex-row gap-10'>
            <div></div>
        </div>
    </div>
  )
}
