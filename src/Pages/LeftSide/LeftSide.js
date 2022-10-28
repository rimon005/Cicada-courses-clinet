import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSide = () => {

    const  [categories , setCategories] = useState([]);
    // console.log(categories);
    
    useEffect(()=>{
        fetch('https://cicada-courses-server-rimon005.vercel.app/category')
        .then(res => res.json())
        .then(data => setCategories(data))
    } , [])

    return (
        <div className='w-9/12 mt-5 m-auto border p-3'>
            <h5 className='mb-5'>All Categories: {categories.length}</h5>
            {
                categories.map(category => <p className='mb-3 border p-3 bg-indigo-500 text-white' key={category.id}>
                    <Link  to={`/category/${category.id}`}>{category.name}</Link>
                </p>)
            }
        </div>
    );
};

export default LeftSide;