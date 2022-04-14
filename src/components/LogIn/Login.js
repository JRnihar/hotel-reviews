import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import SocialLogIn from '../socialLogIn/SocialLogIn';

const Login = () => {
    const emailRef=useRef('')
    const passwordRef=useRef('')
    const navigate=useNavigate()



    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

    const navigateRegister=(e)=>{
        navigate('/register')
    }

    if(user){
        navigate('/')
    }
    let errorElement;
    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message}</p>
    }

    const handelSubmit=(e)=>{
        e.preventDefault()
        const email=emailRef.current.value
        const pasword=passwordRef.current.value
        signInWithEmailAndPassword(email, pasword);
    }

    return (
        <div className='container w-50 mx-auto'>
            <h2 className='text-center mt-5'>please log In</h2>
            <Form onSubmit={handelSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                {errorElement}
            </Form>
            <SocialLogIn></SocialLogIn>
            <p className='mt-5 '>
                new to hotel ?   <button className=' btn btn-primary' onClick={navigateRegister}>  please register</button>
            </p>
        </div>
    );
};

export default Login;