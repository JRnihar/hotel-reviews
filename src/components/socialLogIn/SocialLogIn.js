import React from 'react';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';

import auth from '../../firebase.init';
import Loding from '../Loding/Loding';

const SocialLogIn = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    let errorElement;
    if (error || error1) {
        errorElement = <p className='text-danger'>Error: {error?.message} {error1?.message}</p>
    }
    if (loading || loading1 ) {
        return <Loding></Loding>;
    }

    return (
        <div>
            <div className='d-flex align-item-center'>
                <hr className='w-50' />
                <p className='px-3'>or</p>
                <hr className='w-50' />
            </div>
            {errorElement}
            <div className='d-flex justify-content'>
                <button onClick={() => signInWithGoogle()} className='btn btn-info d-block me-3'> <i class="fa-brands fa-google"></i>Google sing In</button>
                <button className='btn btn-info d-block  me-3'> <i class="fa-brands fa-facebook-square"></i>Facebook Sing In</button>
                <button onClick={() => signInWithGithub()} className='btn btn-info d-block  me-3'><i class="fa-brands fa-github "></i>Git-hub Sing In</button>
            </div>
        </div>
    );
};

export default SocialLogIn;