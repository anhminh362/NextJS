import React from 'react'
import { VercelLogo } from './vercel-logo'

const Byline = ({className}:{className?:string}) => {
    // console.log(1,className);
  return (
    <div className={`${className} bg-vc-gradient inset-x-0 shadow-lg shadow-black/20 bottom-3 `}>
        <div className='flex flex-row'>
            <div>By</div>
            <VercelLogo/>
        </div>
        <div>
            <a href="/">View code</a>
            {'or'}
            <a href="/">deploy your own</a>
        </div>
    </div>
  )
}

export default Byline