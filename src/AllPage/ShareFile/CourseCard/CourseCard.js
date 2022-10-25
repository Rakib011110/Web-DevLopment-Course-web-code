import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image'
import { FaDownload } from "react-icons/fa";



const CourseCard = ({ course }) => {
    console.log(course)
    const { title, _id, author, details, image_url, total_view } = course
    return (
        <div>
            <Card className="text-center mb-4">
                <Card.Header>
                    <div className='d-flex justify-content-between'>
                        <Image
                            roundedCircle
                            className='me-2'
                            src={author?.img}
                            style={{ height: '40px' }}
                        ></Image>
                        <div>

                            <Button variant="outline-dark"><FaDownload /> Download Course</Button>
                        </div>
                    </div>

                </Card.Header>
                <Card.Body>

                    <Card.Img variant="top" src={image_url} />

                    <Card.Title> {title}</Card.Title>
                    <Card.Text>
                        {
                            details.length > 100 ?
                                <p>{details.slice(0, 100)}+"..."<Link to={`/cours/${_id}`}> Read More</Link>  </p>
                                :
                                <button><Link to={`/cours/${_id}`}> Read More</Link></button>
                        }
                    </Card.Text>
                    <Button variant="dark"><Link to={`/cours/${_id}`}> Learn More</Link></Button>
                </Card.Body>
                {/* <Card.Footer className="text-muted">2 days ago</Card.Footer> */}
            </Card>

        </div >
    );
};

export default CourseCard;