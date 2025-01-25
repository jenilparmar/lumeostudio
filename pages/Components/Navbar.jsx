import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full h-fit flex flex-row p-3 md:p-2'>
        <div className='rounded-full w-10 h-10 md:w-20 md:h-20' style={{
            backgroundImage:'url(/LS.jpg)',
            backgroundSize:"cover",
            backgroundPosition:"center"
        }}></div>
        <div className='flex flex-col self-center justify-center md:text-2xl mx-2 font-semibold'>
            <p>Lumeo</p>
            <p>Studio</p>
        </div>
    </div>
  )
}

export default Navbar
