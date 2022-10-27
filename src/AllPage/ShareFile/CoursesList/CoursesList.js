import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const CoursesList = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch("https://assignment-10-serversite-rakib011110.vercel.app/cours-categories")
            .then(res => res.json())
            .then(data => setCategories(data))


    }, [])


    return (
        <div  >
            {/* left side  */}
            {/* <h2> All Courses {categories.length}  </h2> */}
            <div className='bg-light bg-opacity-100 shadow-lg rounded-5  p-3'>
                {
                    categories.map(category => <h5 className='bg-black text-light rounded-5 p-1' category={category} key={category.id} > <Link to={`/catergory/${category.id}`}>{category.name} </Link> </h5>)
                }

            </div>
        </div>
    );
};

export default CoursesList;