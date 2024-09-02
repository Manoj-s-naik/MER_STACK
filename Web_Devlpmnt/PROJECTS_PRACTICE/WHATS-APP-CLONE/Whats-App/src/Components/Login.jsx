import React from 'react'
import { Fingerprint, LogIn as LoginIcon } from 'lucide-react';

function Login() {
  return (
    <>
    <div className='h-[220px] bg-[#4aa27d]'>
      <div className='flex items-center ml-[200px] gap-4 pt-10'>
        <img src="https://whatsapp-clone-826a9.web.app/whatsapp.svg" alt="" />
        <div className='uppercase text-white'>whatsapp</div>
      </div>
    </div>
    <div className='h-[calc(100vh-220px)] bg-[#FFFFFF]'>
      <div className="h-[80%] w-[50%] bg-white shadow-2xl flex flex-col gap-4 justify-center items-center absolute -top-[93px]">
      <Fingerprint className='h-20 w-20 text-primary'
                        strokeWidth={1} />
        <div className='text-2xl font-medium mb-2'>Sign in</div>
        <div className="">Sign in with your google accout<br />to get started</div>
      </div>
    </div>
    </>
  )
}

export default Login