import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';


import { Outlet } from 'react-router-dom';
// import CoursesList from '../AllPage/ShareFile/CoursesList/CoursesList';
import Header from '../AllPage/ShareFile/Header/Header';
import Footer from '../AllPage/ShareFile/Footer/Footer';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container>

                <Row >
                    <Col className='d-none d-lg-block' sm={0}>



                    </Col>

                    <Col sm={12} >
                        <Outlet></Outlet>

                    </Col >
                    <Footer></Footer>

                </Row>
            </Container>
        </div>
    );
};

export default Main;