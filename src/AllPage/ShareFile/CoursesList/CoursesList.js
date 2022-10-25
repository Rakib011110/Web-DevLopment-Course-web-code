import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const CoursesList = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch("http://localhost:5000/cours-categories")
            .then(res => res.json())
            .then(data => setCategories(data))


    }, [])


    return (
        <div  >
            {/* left side  */}
            <h2> All Courses {categories.length}  </h2>
            <div >
                {
                    categories.map(category => <h5 className='bg-black rounded-5 p-1' category={category} key={category.id} > <Link to={`/catergory/${category.id}`}>{category.name} </Link> </h5>)
                }

            </div>
        </div>
    );
};

export default CoursesList;