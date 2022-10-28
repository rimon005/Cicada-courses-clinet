import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Course = () => {
    const course = useLoaderData();
    // const enroll = useLoaderData();
    // console.log(course);
    const { title, details, thumbnail_url , _id , } = course
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl mt-10 w-8/12 m-auto" >
            <figure><img src={thumbnail_url} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{details}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">
                        <Link to={`/enroll/${_id}`}>Get Premium access</Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Course;