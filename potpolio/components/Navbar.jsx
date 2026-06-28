import React from 'react'
import ld from '../src/assets/photos/image.png'
import gh from '../src/assets/photos/image copy.png'
const Navbar = () => {
  return (
    <>
      <nav className='flex mx-3 my-2 p-5 border-[2px]  border-white/60 rounded-[22px] shadow-[4px_4px_0_rgba(255,255,255,0.25)] rotate-[0.5deg]'>
        
          <h1 className='text-sm sm:text-base w-[40%]'>pruthvik bhoirr</h1>
          <div className='flex gap-5 w-[60%] justify-end'>
            <a
              target='_blank'
              rel='noopener noreferrer'
              href='https://www.linkedin.com/in/pruthvi-bhoir-3abb7b377'
              className='w-38 p-0.5 px-0 flex justify-center items-center gap-2 border-[2px] border-white/60 rounded-[12px] shadow-[4px_4px_0_rgba(255,255,255,0.25)]'
            >
              <img className='w-[18%] rounded-[7px]' src={ld} alt='' />
              <h1>Iinkdeen</h1>
            </a>
            <a
              target='_blank'
              rel='noopener noreferrer'
              href='https://github.com/pruthvik49'
              className='w-38 p-0.5 px-0 flex justify-center items-center gap-2 border-[2px] border-white/60 rounded-[12px] shadow-[4px_4px_0_rgba(255,255,255,0.25)]'
            >
              <img className='w-[18%] rounded-[12px]' src={gh} alt='' />
              <h1>Github</h1>
            </a>
            {/* <a
              target='_blank'
              rel='noopener noreferrer'
              href='https://www.linkedin.com/in/pruthvi-bhoir-3abb7b377'
              className='w-38 p-0.5 px-0 flex justify-center items-center gap-2 border-[2px] border-white/60 rounded-[12px] shadow-[4px_4px_0_rgba(255,255,255,0.25)]'
            >
              <img className='w-[18%] rounded-[7px]' src={ld} alt='' />
              <h1>Iinkdeen</h1>
            </a> */}
          </div>
      </nav>
    </>
  )
}

export default Navbar