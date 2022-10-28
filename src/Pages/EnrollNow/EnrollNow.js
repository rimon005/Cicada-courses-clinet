import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const EnrollNow = () => {
    const course = useLoaderData();
    console.log(course);
    const { title, details, thumbnail_url, price } = course;
    const tostify = () =>{
        Swal.fire(
            'Enroll Done',
            '',
            'success'
          )
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-col">
                <img src={thumbnail_url} className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">{title}</h1>
                    <p className="py-6">{details}</p>
                    <h4 className='mb-3 text-4xl text-warning'>Price${price}</h4>
                    <button  onClick={tostify} className="btn btn-primary">Enroll Now</button>
                </div>
            </div>
        </div>
    );
};

export default EnrollNow;