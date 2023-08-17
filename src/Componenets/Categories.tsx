import React from 'react';
import { categories } from '../data/data';

const Categories=()=>
{
    return(<div className='m-auto max-w[1520px] px=4 py-4'>
        <h1 className='font-bold text-orange-700 text-2xl text-center mt-0'>
            Trending Categories
        </h1>
        <div className='grid grid-cols-2 md:grid-cols-6 gap-5 py-5 px-3'>
             {
                categories.map((item)=>{
                    return <div className='flex justify-center items-center hover:scale-105 duration-300' >
                        <img className='w-40 h-10 object-cover' src={item.image} alt={item.name}/>
                    </div>
                })
             }
        </div>
    </div>)
}
export default Categories;