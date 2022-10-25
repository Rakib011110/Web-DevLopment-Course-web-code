import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseCard from '../ShareFile/CourseCard/CourseCard';

const Home = () => {

    const corses = useLoaderData()
    return (
        <div>
            <h2 className='mb-4 bg-black rounded-3 p-2 text-light'> Web Devlopement Class {corses.length} </h2>
            {/* <p> {corse.name}</p> */}
            <div className='row  row-cols-sm-1 row-cols-lg-2 shadow-sm'>
                {
                    corses.map(corse => <CourseCard course={corse} key={corse._id}></CourseCard>)

                }

            </div>
        </div>
    );
};

export default Home;