import React from 'react'
import { assets } from '../assets/assets'

const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700'>

      <div>
        <img className='w-12 m-auto mb-5' src={assets.exchange_icon} alt="" />
        <p className='font-semibold'>Politique d'échange facile</p>
        <p className='text-gray-400'>Politique d'échange simple et sans tracas.</p>
      </div>
      <div>
        <img className='w-12 m-auto mb-5' src={assets.quality_icon} alt="" />
        <p className='font-semibold'>Politique de retour de 7 jours</p>
        <p className='text-gray-400'>Retours gratuits sous 7 jours.</p>
      </div>
      <div>
        <img className='w-12 m-auto mb-5' src={assets.support_img} alt="" />
        <p className='font-semibold'>Meilleur service client</p>
        <p className='text-gray-400'>Service client disponible 24h/24, 7j/7.</p>
      </div>

    </div>
  )
}

export default OurPolicy
