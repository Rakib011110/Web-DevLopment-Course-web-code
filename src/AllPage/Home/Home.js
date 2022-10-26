import React from 'react';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import { useLoaderData } from 'react-router-dom';
import CourseCard from '../ShareFile/CourseCard/CourseCard';
import CoursesList from '../ShareFile/CoursesList/CoursesList';

const Home = () => {

    const corses = useLoaderData()
    return (
        <div>
            <h2 className='mb-4 bg-black rounded-3 p-2 text-light'> Web Devlopement Class {corses.length} </h2>
            {/* <p> {corse.name}</p> */}


            <Row >
                <Col className='d-none d-lg-block' sm={3}>

                    <CoursesList></CoursesList>

                </Col>

                <Col sm={9} >
                    <div className='row  row-cols-sm-1 bg-black bg-opacity-25 p-1 row-cols-md-2 row-cols-lg-3 shadow-sm'>



                        {
                            corses.map(corse => <CourseCard course={corse} key={corse._id}></CourseCard>)

                        }

                    </div>
                </Col >


            </Row>








        </div>
    );
};

export default Home;