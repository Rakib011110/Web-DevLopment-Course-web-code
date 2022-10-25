import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseCard from '../ShareFile/CourseCard/CourseCard';

const Home = () => {

    const corses = useLoaderData()
    return (
        <div>
            <h2> All Corse List {corses.length} </h2>
            {/* <p> {corse.name}</p> */}
            <div className='row row-cols-2'>
                {
                    corses.map(corse => <CourseCard course={corse} key={corse._id}></CourseCard>)

                }

            </div>
        </div>
    );
};

export default Home;