import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'

const Contact = () => {
  return (
    <div>

      <div className='text-center text-2xl pt-10 border-t'>
        <Title text1={'CONTACT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img className='w-full md:max-w-[480px]' src={assets.contact_img} alt="" />
        <div className='flex flex-col justify-center items-start gap-6'>
        <form class="ml-auo space-y-4">
                    <input type='text' placeholder='Name'
                        class="w-full rounded-md py-2.5 px-4 border text-sm outline-[#007bff]" />
                    <input type='email' placeholder='Email'
                        class="w-full rounded-md py-2.5 px-4 border text-sm outline-[#007bff]" />
                    <input type='text' placeholder='Subject'
                        class="w-full rounded-md py-2.5 px-4 border text-sm outline-[#007bff]" />
                    <textarea placeholder='Message' rows="6"
                        class="w-full rounded-md px-4 border text-sm pt-2.5 outline-[#007bff]"></textarea>
                    <button type='button'
                        class="bg-black text-white px-8 py-3 text-sm active:bg-gray-700 w-full">Send</button>
                </form>
        </div>
      </div>



    </div>
  )
}

export default Contact
