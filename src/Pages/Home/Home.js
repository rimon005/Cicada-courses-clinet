import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseSummaryCard from '../CourseSummaryCard/CourseSummaryCard';
import './Home.css'

const Home = () => {
    const allCourses = useLoaderData();
    // console.log(allCourses);
    return (
        <div className='course'>
            {
                allCourses.map(course => <CourseSummaryCard
                course={course}
                key={course._id}
                ></CourseSummaryCard> )
            }
        </div>
    );
};

export default Home;