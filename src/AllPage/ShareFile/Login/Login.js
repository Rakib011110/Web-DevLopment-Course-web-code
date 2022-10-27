import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle, FaGithub } from "react-icons/fa";
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { useLocation, useNavigate } from 'react-router-dom';




const Login = () => {
    const { providerLogin, login, githublogin } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const [errormassge, setErrorMassage] = useState('')
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
                // navigate(from, { replace: true })
            })
            .catch(error => console.error(error))
    }






    const handleLogin = (e) => {
        e.preventDefault()

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        login(email, password)
            .then(result => {
                const user = result.user
                console.log(user)
                form.reset()
                setErrorMassage('')
                navigate(from, { replace: true })


            })
            .catch(error => {
                console.error(error)
                setErrorMassage(error.message)
            })
    }





    return (
        <div className='w-50 bg-light bg-opacity-50 shadow-lg rounded-5 p-5'>
            <Form onSubmit={handleLogin}  >
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
                    <p>{errormassge} </p>
                </Form.Text>
            </Form>
            <div className=''>

                <ButtonGroup className=' ' vertical>
                    <div className=' d-flex gap-2 mt-3'>
                        <Button onClick={handleGoogleSignIn} variant="outline-primary"><FaGoogle /> Login with Google</Button>
                        <Button onClick={handleGitHubSignIn} className='text-primary' variant="outline-dark"><FaGithub /> Login with Github</Button>
                    </div>
                </ButtonGroup>





            </div>

        </div>
    );
};

export default Login;