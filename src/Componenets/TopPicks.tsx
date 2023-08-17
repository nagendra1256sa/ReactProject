import React from 'react';
import { topPicks } from '../data/data';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const TopPicks=()=>
{
    return(<div>
   <h1 className='text-orange-500 font-bold text-center py-2'>Top Picks</h1>
    <div className='hidden lg:flex max-w[1520px] m-auto py-2 px-2'>
        <Splide options={{perPage: 4, gap:"0.5rem"}}>
       {
           topPicks.map((item)=>
           {
             return(
                <SplideSlide key={item.id}>
                <div className='rounded-3xl relative'>
                    <div className='w-full h-full rounded-3xl bg-black/50 text-white absolute'>
                         <p className='px-2 py-1 font-bold text-2xl'>{item.title}</p>
                         <p className='px-2'>{item.price}</p>
                         <button className='border-dotted border-white text-white mx-2 absolute bottom-4'>Add to cart</button>
                    </div>
                      <img className='h-[200px] w-full rounded-3xl object-cover cursor-pointer hover:scale-105 'src={item.img} alt={item.title}/>
                </div>
                </SplideSlide>
             )
           })
       }
       </Splide>
    </div>
    </div>)
}
export default TopPicks;