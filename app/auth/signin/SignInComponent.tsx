'use client';
import React from 'react';
import { getProviders, signIn } from 'next-auth/react';

type Props = {
    providers: Awaited<ReturnType<typeof getProviders>>;
}

function SignInComponent({ providers }: Props) {
    return (
        <div>
            {Object.values(providers!).map((provider) => (
                <div key={provider.name}>
                    <button
                        onClick={() => signIn(provider.id, {
                            callbackUrl: process.env.LOCAL_URL || 'http://localhost:3000',
                        })}
                        className='bg-blue-500 shadow-lg shadow-blue-500/40 text-white rounded-md px-6 py-2 hover:bg-blue-700 font-medium'
                    >
                        Sign In with {provider.name}
                    </button>
                </div>
            ))}
        </div>
    )
}

export default SignInComponent
