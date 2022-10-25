import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle, FaGithub } from "react-icons/fa";
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';

const Login = () => {
    const { providerLogin } = useContext(AuthContext)

    const provider = new GoogleAuthProvider()



    const handleGoogleSignIn = () => {
        providerLogin(provider)
            .then(result => {
                const user = result.user
                console.log(user)
            })
            .catch(error => console.error(error))
    }



    return (
        <div>
            <Form  >
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

                </Form.Text>
            </Form>
            <div className=''>

                <ButtonGroup className=' ' vertical>
                    <div className=' d-flex gap-2 mt-3'>
                        <Button onClick={handleGoogleSignIn} variant="outline-primary"><FaGoogle /> Login with Google</Button>
                        <Button variant="outline-dark"><FaGithub /> Login with Github</Button>
                    </div>
                </ButtonGroup>

            </div>

        </div>
    );
};

export default Login;