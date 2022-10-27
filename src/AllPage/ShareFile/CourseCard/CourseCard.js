import React, { useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image'
import { FaDownload } from "react-icons/fa";
import { useReactToPrint } from 'react-to-print'




const CourseCard = ({ course }) => {








    console.log(course)
    const { title, _id, author, details, image_url } = course

    const componentRef = useRef()
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
        documentTitle: 'emp-data',
        onAfterPrint: () => alert('success')
    })


    return (


        <div ref={componentRef}>
            <Card className="text-center mb-4 shadow-lg ">
                <Card.Header>
                    <div className='d-flex justify-content-between'>
                        <Image
                            roundedCircle
                            className='me-2'
                            src={author?.img}
                            style={{ height: '30px' }}
                        ></Image>
                        <div>
                            <Button className='' onClick={handlePrint} variant="outline-dark"><  FaDownload /> Download</Button>
                        </div>
                    </div>

                </Card.Header>
                <Card.Body>

                    <Card.Img variant="top" src={image_url} />

                    <Card.Title> {title}</Card.Title>
                    <Card.Text>
                        {
                            details.length > 100 ?
                                <p>{details.slice(0, 50)}...<Link to={`/cours/${_id}`}> Read More</Link>  </p>
                                :
                                <button></button>
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