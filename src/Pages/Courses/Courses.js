import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseSummaryCard from '../CourseSummaryCard/CourseSummaryCard'
import './Course.css'

const Courses = () => {
    const courseCategory = useLoaderData();
    // console.log(courseCategory);
    return (
        <div className='category'>
            {
                courseCategory.map(course => <CourseSummaryCard
                course={course} 
                key={course._id}
                ></CourseSummaryCard>)
            }
        </div>
    );
};

export default Courses;