import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

const Faq = () => {
    return (
        <div>
            <h4>


                <h2> Getting Started Web DevLopment Course</h2>

                <h5>  This project was Web DevLopment Course <a href="https://learn-web-development-project.firebaseapp.com/"></a> .</h5>


                <h4>   Which is in this project</h4>
                <p>
                    -The navigation bar includes home page, All corse, blog, FAQ, dark and light button, and user profile ase.

                </p>
                <h4>
                    All Course

                </h4>
                <p>
                    -I have kept the class of web development in the middle of all courses

                </p>
                <h4> class name</h4>


                <ListGroup variant="flush">
                    <ListGroup.Item>-HTML CLSS</ListGroup.Item>
                    <ListGroup.Item>CSS Class</ListGroup.Item>
                    <ListGroup.Item>-Bootstrap class</ListGroup.Item>
                    <ListGroup.Item>  -Tailwind css class</ListGroup.Item>
                    <ListGroup.Item>JavaScript Class
                    </ListGroup.Item>
                    <ListGroup.Item>  -React js class</ListGroup.Item>
                </ListGroup>


            </h4>
        </div>
    );
};

export default Faq;