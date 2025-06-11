import React from 'react'

const MagicalGrid = () => { 
  return (
    <>
    <div className='gridContainer w-full border border-amber-50'>
        <div className='card' style={{ ['--clr' as any]: '#f00' }}></div>
        <div className='card' style={{ ['--clr' as any]: '#f00' }}></div>
        <div className='card' style={{ ['--clr' as any]: '#f00' }}></div>
        <div className='card' style={{ ['--clr' as any]: '#f00' }}></div>
    </div>
    </>
  )
}

export default MagicalGrid