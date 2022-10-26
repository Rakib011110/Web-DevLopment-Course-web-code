import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseCard from '../ShareFile/CourseCard/CourseCard';

const CategoryList = () => {
    const courses = useLoaderData()

    return (
        <div>
            <h2>  </h2>
            {
                courses.map(course => <CourseCard course={course} key={course._id} />)
            }
        </div>
    );
};

export default CategoryList;