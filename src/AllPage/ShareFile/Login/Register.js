import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/esm/ButtonGroup';
import Form from 'react-bootstrap/Form';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';




const Register = () => {
    const { createUser, profileUpdate, providerLogin, githublogin } = useContext(AuthContext)
    const [errorMassage, setErrorMassage] = useState("")
    const navigate = useNavigate()
    const location = useLocation()

    const provider = new GoogleAuthProvider()
    const githubProvider = new GithubAuthProvider()

    const from = location.state?.from?.pathname || '/';





    const handleGoogleSignIn = () => {
        providerLogin(provider)
            .then(result => {
                const user = result.user
                console.log(user)
                navigate(from, { replace: true })
            })
            .catch(error => console.error(error))
    }



    const handleGitHubSignIn = () => {
        githublogin(githubProvider)
            .then(result => {
                const user = result.user
                console.log(user)
                navigate(from, { replace: true })
            })
            .catch(error => console.error(error))
    }









    const handleRegisterSubmit = (e) => {
        e.preventDefault()

        const form = e.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photoURL, email, password)
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                form.reset()
                setErrorMassage('')
                navigate("/")
                handleprofileUpdate(name, photoURL)
            })
            .catch(error => {
                console.error(error)
                setErrorMassage(error.message)

            })

    }

    const handleprofileUpdate = (name, photoURL) => {

        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        profileUpdate(profile)
            .then(() => { })
            .catch(error => console.error(error));
    }


    return (
        <div>
            <div className=' bg-light bg-opacity-50 shadow-lg rounded-5 p-5'>
                <Form onSubmit={handleRegisterSubmit}  >
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Your Name</Form.Label>
                        <Form.Control name="name" type="text" placeholder="Your Name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Photo URL</Form.Label>
                        <Form.Control name="photoURL" type="text" placeholder="Phot URL" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control name="email" type="email" placeholder="Enter email" required />

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control name="password" type="password" placeholder="Password" required />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Login
                    </Button>
                    <Form.Text className="text-danger">
                        {errorMassage}
                    </Form.Text>




                    <div className=''>

                        <ButtonGroup className=' ' vertical>
                            <div className=' d-flex gap-2 mt-3'>
                                <Button onClick={handleGoogleSignIn} variant="outline-primary"><FaGoogle />Google</Button>
                                <Button onClick={handleGitHubSignIn} className='text-primary' variant="outline-dark"><FaGithub /> Github</Button>
                            </div>
                        </ButtonGroup>





                    </div>





                </Form>
            </div>
        </div>
    );
};

export default Register;