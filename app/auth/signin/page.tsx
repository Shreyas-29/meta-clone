import React from 'react';
import { getProviders } from 'next-auth/react';
import Image from 'next/image';
import SignInComponent from './SignInComponent';

async function SignInPage() {

    const providers = await getProviders();


    return (
        <div className='flex flex-col space-y-5 h-[90vh] items-center justify-center w-full py-32'>
            <div>
                <Image src='/messenger.png' alt='user' width={1000} height={1000} className='w-24 h-auto' />
            </div>
            <SignInComponent providers={providers} />
        </div>
    )
}

export default SignInPage
