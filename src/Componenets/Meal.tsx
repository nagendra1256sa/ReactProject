import React, { useState } from 'react';
import { mealData } from '../data/data';

const Meals=()=>
{
    const[foods,setfoods]=useState(mealData)
    const filerItem=(category:any)=>
    {
        if(category.length===mealData.length)
        {
               setfoods(mealData);
        }
        else{
            setfoods(mealData.filter((item:any)=>
            {
               return item.category.toLowerCase() ===category.toLowerCase();
            }));
        }
        console.log(foods);
    };
    return(<div className='max-3[1520] m-auto px-4 py-12'>
        <h1 className='text-orange-700 font-bold text-2xl text-center py-2'>
            Our Meal
        </h1>
        <div className='flex justify-center md:justify-center'>
            <button onClick={()=>filerItem(mealData)} className='m-1 border-orange-700 text-white bg-orange-700  hover:bg-white hover:text-orange-700 hover:boder-orange-700  '>All</button>
            <button onClick={()=>filerItem("Pizza")} className='m-1 border-orange-700 text-white bg-orange-700  hover:bg-white hover:text-orange-700 hover:boder-orange-700  '>Pizza</button>
            <button onClick={()=>filerItem("Chicken")} className='m-1 border-orange-700 text-white bg-orange-700  hover:bg-white hover:text-orange-700 hover:boder-orange-700  '>Chicken</button>
            <button onClick={()=>filerItem("Salad")} className='m-1 border-orange-700 text-white bg-orange-700  hover:bg-white hover:text-orange-700 hover:boder-orange-700  '>Salad</button>
        </div>
        <div className='grid md:grid-cols-2 lg:grid-cols-4 sm:grid-cols-1 gap-6 py-2'>
        {
            foods.map((item)=>
            (
                <div key={item.id} className='border-none hover:scale-105 duration-300'>
                <img className='h-[200px] w-full rounded-lg' src={item.image} alt={item.name}/>
                <div className='flex justify-between py-2 px-4'>
                 <p className='font-bold'>{item.name}</p>
                 <p>{item.price}</p>
                </div>
             </div>
            ))
        }
        </div>
    </div>)
}
export default Meals;