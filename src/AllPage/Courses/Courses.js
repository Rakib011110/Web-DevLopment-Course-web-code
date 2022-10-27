import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Carousel from 'react-bootstrap/Carousel';
import Accordion from 'react-bootstrap/Accordion';






const Courses = () => {
    const cours = useLoaderData()
    const { author, details, title, image_url, quesion1, ans1, quesion2, ans2, quesion3, ans3, quesion4, quesion5, quesion6, ans4, ans5, ans6 } = cours

    return (
        <div>



            <div className='mt-2 bg-light shadow-lg rounded-4'>


                <Carousel variant="dark">

                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://www.elegantthemes.com/blog/wp-content/uploads/2018/12/top11.png"
                            alt="Second slide"
                        />
                        <Carousel.Caption>
                            <h3 className='text-light'>Web DevLopment Course
                            </h3>
                            <p></p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://www.elegantthemes.com/blog/wp-content/uploads/2018/12/top11.png"
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h3 className='text-light'>Web DevLopment Course</h3>

                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>


            </div>


            <div className='mt-3 bg-black p-2 text-light rounded-4 shadow-sm '>
                <h1> {title} </h1>

            </div>

            <div className='mt-5 text-center  '>



                <Accordion className='shadow-lg rounded-2' defaultActiveKey="0" flush>

                    <Accordion.Item eventKey="7">
                        <Accordion.Header> <h2>More </h2>  </Accordion.Header>
                        <Accordion.Body>
                            <h5> {details} </h5>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="0">



                        <Accordion.Header> <h3> {quesion1}</h3> </Accordion.Header>
                        <Accordion.Body>
                            <h5>   {ans1} </h5>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header> <h2>{quesion2}</h2>  </Accordion.Header>
                        <Accordion.Body>
                            <h5> {ans2}</h5>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header> <h2>{quesion2}</h2>  </Accordion.Header>
                        <Accordion.Body>
                            <h5> {ans2}</h5>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header> <h2>{quesion3}</h2>  </Accordion.Header>
                        <Accordion.Body>
                            <h5> {ans3}</h5>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4">
                        <Accordion.Header> <h2>{quesion4}</h2>  </Accordion.Header>
                        <Accordion.Body>
                            <h5> {ans4}</h5>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="5">
                        <Accordion.Header> <h2>{quesion5}</h2>  </Accordion.Header>
                        <Accordion.Body>
                            <h5> {ans5}</h5>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="6">
                        <Accordion.Header> <h2>{quesion6}</h2>  </Accordion.Header>
                        <Accordion.Body>
                            <h5> {ans6}</h5>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="7">
                        <Accordion.Header> <h2>{quesion6}</h2>  </Accordion.Header>
                        <Accordion.Body>
                            <h5> {ans6}</h5>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>


            </div>






















            {/* 


            <Card style={{ width: '50rem' }}>

                <Card.Body>


                    <Card.Title>{title}</Card.Title>
                    <Card.Text>

                    </Card.Text>
                </Card.Body>

                <Card.Header>Featured</Card.Header>


                <ListGroup className="list-group-flush">
                    <ListGroup.Item> </ListGroup.Item>
                    <ListGroup.Item></ListGroup.Item>
                    <ListGroup.Item></ListGroup.Item>
                </ListGroup>
                <Card.Body>
                    <Card.Link as={Link} to="/" href="#">Home</Card.Link>
                    <Card.Link href="#"></Card.Link>
                </Card.Body>
            </Card> */}


        </div>
    );
};

export default Courses;