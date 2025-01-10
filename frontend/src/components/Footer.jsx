import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-10 text-sm'>

        <div>
          <img className='mb-5 w-32' src={assets.logo} alt="" />
         </div>

        
        <div>
          <p className='text-xl font-medium mb-5'>CONTACTS</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
            <li>+33 6 65 94 56 38</li>
            <li>abdelhadi.mou@outlook.com</li>
          </ul>
        </div>

      </div>

      <div>
        <hr />
        
        <p className='py-5 text-sm text-center'>Copyright 2024 - GSB - Tous droits réservés.</p>
      </div>

    </div>
  )
}

export default Footer
