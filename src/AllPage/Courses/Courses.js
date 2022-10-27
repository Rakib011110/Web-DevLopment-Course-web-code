import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
const Courses = () => {
    const cours = useLoaderData()
    const { author, details, title, image_url } = cours

    return (
        <div>
            <h3>  Learn WebDevelopment{cours.length} </h3>

            <Card style={{ width: '40rem' }}>
                <Card.Img variant="top" src={image_url} />
                <Card.Body>


                    <Card.Title>{title}</Card.Title>
                    <Card.Text>

                    </Card.Text>
                </Card.Body>

                <Card.Header>Featured</Card.Header>


                <ListGroup className="list-group-flush">
                    <ListGroup.Item></ListGroup.Item>
                    <ListGroup.Item></ListGroup.Item>
                    <ListGroup.Item></ListGroup.Item>
                </ListGroup>
                <Card.Body>
                    <Card.Link as={Link} to="/" href="#">Home</Card.Link>
                    <Card.Link href="#"></Card.Link>
                </Card.Body>
            </Card>


        </div>
    );
};

export default Courses;