import React from 'react';

const NewsLetter=()=>{
   return(<div className='max-w[1520] m-auto text-white px-4 bg-[#24262b]'>
    <div className='mx-auto grid lg:grid-cols-3'>
    <div className='my-4 lg:col-span-2'>
       <h1>Need to adivce how to improve uor flow</h1>
       <p>Sign Up</p>
    </div>
       <div className='my-4'>
        <div className='flex items-center justify-between sm:flex-row w-full flex-col'>
         <input type="email"
         placeholder='email' className='p-1 w-full flex rounded-md text-black'/>
         <button className='w-[200px] ml-2 bg-[#60cecc] rounded-md'>Notify Me</button>
        </div>
        <p >We Concerned about the security of your data,Read{""} </p>
        <span className='text-[#75ceb2]'>Privacy Policy</span>
   </div>
    </div>
   </div>)
}
export default NewsLetter;