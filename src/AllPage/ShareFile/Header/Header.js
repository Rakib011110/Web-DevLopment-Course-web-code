import React, { useContext, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/esm/Button';
import Image from 'react-bootstrap/esm/Image';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown'
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import CoursesList from '../CoursesList/CoursesList';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
// import "./Header.css"







const Header = () => {
    const { user, signout } = useContext(AuthContext)
    const [darkMode, setDarkMode] = useState(false)


    const hanldeSignOut = () => {
        signout()
            .then(() => {

            })
            .cath(error => console.error(error))
    }


    return (
        <div>
            <Navbar className='mb-4' collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/" href="#home">Web DevLopment Course</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/" >All Course</Nav.Link>
                            <Nav.Link as={Link} to="/blog" > Blog </Nav.Link>
                            <Nav.Link as={Link} to="/faq" href="#pricing">FAQ </Nav.Link>


                            <div >
                                {/* <div className="container">
                                    <span  style={{ color: darkMode ? "grey" : "yellow" }}>☀︎</span>
                                    <div className="switch-checkbox">
                                        <label className="switch">
                                            <input type="checkbox" onChange={() => setDarkMode(!darkMode)} />
                                            <span className="slider round"> </span>
                                        </label>
                                    </div>
                                    <span style={{ color: darkMode ? "#c96dfd" : "grey" }}>☽</span>
                                </div> */}
                            </div>

                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">
                                {
                                    user?.uid ?
                                        <>


                                            <Button className='me-2' onClick={hanldeSignOut} variant="outline-light" >Log out</Button>

                                            <OverlayTrigger
                                                placement="bottom"
                                                overlay={<Tooltip id="button-tooltip-2"></Tooltip>}
                                            >
                                                {({ ref, ...triggerHandler }) => (
                                                    <div
                                                        variant="light"
                                                        {...triggerHandler}
                                                        className="d-inline-flex align-items-center"
                                                    >
                                                        <Image
                                                            ref={ref}

                                                        />
                                                        <span className="ms-1">


                                                            <span className='fs-5 '>{user?.displayName}</span>

                                                        </span>
                                                    </div>
                                                )}
                                            </OverlayTrigger>


                                        </>
                                        :
                                        <>
                                            <Button variant="outline-light"><Link to='/login'>Login</Link></Button>{' '}



                                            <Button variant="outline-light">  <Link to='/register'>Register</Link></Button>{' '}



                                        </>
                                }










                                <OverlayTrigger
                                    placement="bottom"
                                    overlay={<Tooltip id="button-tooltip-2">{user?.displayName}</Tooltip>}
                                >
                                    {({ ref, ...triggerHandler }) => (
                                        <div
                                            variant="light"
                                            {...triggerHandler}
                                            className="d-inline-flex align-items-center"
                                        >
                                            <Image
                                                ref={ref}

                                            />
                                            <span className="ms-1"> <Nav.Link eventKey={2} >

                                                {user?.photoURL ?
                                                    <Image
                                                        style={{ height: '30px' }}
                                                        roundedCircle
                                                        src={user?.photoURL}>
                                                    </Image>





                                                    : <FaUser></FaUser>
                                                }


                                            </Nav.Link></span>
                                        </div>
                                    )}
                                </OverlayTrigger>






                            </Nav.Link>
                            {/* <Nav.Link eventKey={2} >

                                {user?.photoURL ?
                                    <Image
                                        style={{ height: '30px' }}
                                        roundedCircle
                                        src={user?.photoURL}>
                                    </Image>





                                    : <FaUser></FaUser>
                                }


                            </Nav.Link> */}
                        </Nav>
                        <div className="d-lg-none">

                            <CoursesList></CoursesList>
                        </div>
                    </Navbar.Collapse>
                </Container>


            </Navbar>


        </div>
    );
};

export default Header;