import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useSendEmailVerification } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'
import SocialLogIn from '../socialLogIn/SocialLogIn';
import { sendEmailVerification } from 'firebase/auth';
import Loding from '../Loding/Loding';

const Register = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [agree, setAgree] = useState(false)
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification:true});

    

    const navigate = useNavigate()

    const navigateLogin = (e) => {
        navigate('/login')
    }
    if (user) {
        navigate('/login')
    }
    if (loading) {
        return <Loding></Loding>;
    }
    

    const handleSubmit = (e) => {
        e.preventDefault();
        

        console.log(e.target)
        if (agree) {
            createUserWithEmailAndPassword(email, password, name)
        }
        
    }

    return (
        <section class="w-100 mt-5" style={{ backgroundColor: '#eee' }}>
            <div class="container ">
                <div class="row d-flex justify-content-center align-items-center h-100">
                    <div class="col-lg-12 col-xl-11">
                        <div class="card text-black m-5">
                            <div class="card-body p-md-5">
                                <div class="row justify-content-center">
                                    <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                                        <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                                        <form onSubmit={handleSubmit} class="mx-1 mx-md-4">

                                            <div class="d-flex flex-row align-items-center mb-4">
                                                <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                                                <div class="form-outline flex-fill mb-0">
                                                    <input onChange={(e) => setName(e.target.value)} type="text" id="form3Example1c" class="form-control" placeholder='Your Name' />
                                                    {/* <label class="form-label" for="form3Example1c">Your Name</label> */}
                                                </div>
                                            </div>

                                            <div class="d-flex flex-row align-items-center mb-4">
                                                <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                                <div class="form-outline flex-fill mb-0">
                                                    <input onChange={(e) => setEmail(e.target.value)} type="email" id="form3Example3c" class="form-control" placeholder='Your Email' />
                                                    {/* <label class="form-label" for="form3Example3c">Your Email</label> */}
                                                </div>
                                            </div>

                                            <div class="d-flex flex-row align-items-center mb-4">
                                                <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                                                <div class="form-outline flex-fill mb-0">
                                                    <input onChange={(e) => setPassword(e.target.value)} type="password" id="form3Example4c" class="form-control" placeholder='Password' />
                                                    {/* <label class="form-label" for="form3Example4c">Password</label> */}
                                                </div>
                                            </div>

                                            <div class="d-flex flex-row align-items-center mb-4">
                                                <i class="fas fa-key fa-lg me-3 fa-fw"></i>
                                                <div class="form-outline flex-fill mb-0">
                                                    <input placeholder='Repeat your password' type="password" id="form3Example4cd" class="form-control" />
                                                    {/* <label class="form-label" for="form3Example4cd">Repeat your password</label> */}
                                                </div>
                                            </div>

                                            <div class="form-check d-flex justify-content-center mb-5">
                                                <input
                                                    class="form-check-input me-2"
                                                    type="checkbox"
                                                    value=""
                                                    id="form2Example3c"
                                                    onClick={() => setAgree(!agree)}
                                                />
                                                <label className={agree ? "ps-2 text-primary" : "ps-2 text-danger"} for="form2Example3">
                                                    I agree all statements in Terms of service
                                                </label>
                                            </div>

                                            <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                <button
                                                disabled={!agree}
                                                    type="submit"
                                                    class="btn btn-primary btn-lg"
                                                
                                                    
                                                    >Register</button>
                                            </div>

                                        </form>
                                        <SocialLogIn></SocialLogIn>

                                    </div>
                                    <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                                        <img src="https://media.istockphoto.com/photos/modern-keyboard-with-blue-online-registration-button-picture-id931524202?b=1&k=20&m=931524202&s=170667a&w=0&h=AUacfR9LFQ97ZvYVA97VXPSdjbn-DMezqL3MDEwJSqc=" class="img-fluid rounded-3" alt="Sample image" />

                                    </div>


                                </div>
                            </div>
                        </div>
                        <p className='mt-5 '>
                            Already have an account ?   <button className=' btn btn-primary' onClick={navigateLogin}>  please LogIn</button>
                        </p>
                    </div>

                </div>

            </div>


        </section>

    );
};

export default Register;