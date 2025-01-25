import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full h-fit flex flex-row p-3 md:p-4'>
        <div className='rounded-full w-10 h-10 md:w-16 md:h-16' style={{
            backgroundImage:'url(/LS.jpg)',
            backgroundSize:"cover",
            backgroundPosition:"center"
        }}></div>
        <div className='flex flex-col self-center justify-center md:text-xl mx-2 font-medium'>
            <p>Lumeo</p>
            <p>Studio</p>
        </div>
    </div>
  )
}

export default Navbar
