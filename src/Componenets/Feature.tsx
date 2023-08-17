import { url } from 'inspector';
import React, { useState } from 'react'
import {BsChevronCompactLeft,BsChevronCompactRight} from 'react-icons/bs';
import {RxDotFilled} from 'react-icons/rx'
 
const Featured=()=>
{
    const sliders=[

        {
            url:"https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672076/NetflixApp/burger_emxbtv.jpg"
        },
        {
            url:"https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672452/NetflixApp/pizza_osjb4f.jpg"
        },
        {
            url:"https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672612/NetflixApp/ric_a4ewxo.jpg"
        }
    ];
    const [currentIndex,SetCurrentIndex]=useState(0);
    const preslider=()=>{
        const isFirstSlide=currentIndex===0
        const newIndex=isFirstSlide?sliders.length-1:currentIndex-1
        console.log(newIndex);
        SetCurrentIndex(newIndex);
    }
    const nextSlider=()=>
    {
        const isFirstSlide=currentIndex===sliders.length-1;
        const newIndex=isFirstSlide?0:currentIndex+1;
        SetCurrentIndex(newIndex)
        console.log(newIndex);

    }
    const moveToSlide=(sliderIndex:any)=>
    {
        SetCurrentIndex(sliderIndex)
    }
    return(
        <div className='max-w-[1520px] h-[500px] w-full py-4 px-4 relative'>
            <div className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
            style={{backgroundImage:`url(${sliders[currentIndex].url})`}}>
            </div>
            <div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-orange-700'>
            <BsChevronCompactLeft onClick={preslider}/>
            </div>
            <div className='absolute top-[50%] right-5 text-2xl rounded-full p-2 bg-orange-700'>
            <BsChevronCompactRight onClick={nextSlider}/>
            </div>
            <div className='flex top-4 justify-center py-2'>
            {
                sliders.map((sliderItems:any,slideIndex:any)=>(
                    <div key={slideIndex} onClick={()=>moveToSlide(slideIndex)} className='text-2xl cursor-pointer'>
                      <RxDotFilled/> 
                    </div>
                ))
            }
            </div>
        </div>
    )
}
export default Featured;