import React, { useContext } from 'react';
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



const Header = () => {
    const { user, signout } = useContext(AuthContext)


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
                            <Nav.Link href="#pricing"> Faq </Nav.Link>
                            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Faq</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />

                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">
                                {
                                    user?.uid ?
                                        <>


                                            <Button className='me-2' onClick={hanldeSignOut} variant="outline-light" >Log out</Button>
                                            <span>{user?.displayName}</span>
                                        </>
                                        :
                                        <>
                                            <Button variant="outline-light"><Link to='/login'>Login</Link></Button>{' '}



                                            <Button variant="outline-light">  <Link to='/register'>Register</Link></Button>{' '}



                                        </>
                                }

                            </Nav.Link>
                            <Nav.Link eventKey={2} >

                                {user?.photoURL ?
                                    <Image
                                        style={{ height: '30px' }}
                                        roundedCircle
                                        src={user?.photoURL}>
                                    </Image>
                                    : <FaUser></FaUser>
                                }


                            </Nav.Link>
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