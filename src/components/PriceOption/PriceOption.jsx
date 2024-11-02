import React from 'react';
import { IoIosCheckmarkCircle } from "react-icons/io";

const PriceOption = ({ priceOption }) => {
    const { name, price, features } = priceOption;
    console.log(priceOption);

    return (
        <section className='flex flex-col'>
            <div className='border rounded-xl p-4 text-center bg-blue-500 text-white flex flex-col h-full'>
                <h1 className='text-2xl font-bold text-white-500'>{name}</h1>
                <h2>
                    <span className='text-5xl'>{price}</span>
                    <span className='text-3xl'>/mon</span>
                </h2>
                <div className='flex-grow'>
                    {
                        features.map(feature => <p className='flex justify-center items-center gap-1 '><IoIosCheckmarkCircle className='text-green-300' />{feature}</p>)
                    }
                </div>
                <div className='mt-auto'>
                    <button className='mt-12 bg-green-600 w-full py-2 font-bold rounded-lg hover:bg-green-900 '>Buy Now</button>
                </div>
            </div>
        </section>
    );
};

export default PriceOption;