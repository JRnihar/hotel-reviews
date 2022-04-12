import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const emailRef=useRef('')
    const passwordRef=useRef('')
    const navigate=useNavigate()

    const navigateRegister=(e)=>{
        navigate('/register')
    }

    const handelSubmit=(e)=>{
        e.preventDefault()
        const email=emailRef.current.value
        const pasword=passwordRef.current.value
        console.log(email, pasword);
    }

    return (
        <div className='container w-50 mx-auto'>
            <h2 className='text-center m-5'>please log In</h2>
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
            </Form>
            <p className='mt-5 '>
                new to hotel ?   <button className=' btn btn-primary' onClick={navigateRegister}>  please register</button>
            </p>
        </div>
    );
};

export default Login;