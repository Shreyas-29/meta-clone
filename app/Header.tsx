import { getServerSession } from 'next-auth';
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { authOptions } from '../pages/api/auth/[...nextauth]';
import LogoutButton from './LogoutButton';

async function Header() {

    const session = await getServerSession(authOptions);
    // console.log(session);

    if (session)
        return (
            <header className='fixed top-0 z-50 bg-white flex justify-between items-center px-10 py-6 w-full shadow-sm'>
                <div className='flex space-x-3'>
                    <Image unoptimized src={session.user?.image!} alt='user' width={1000} height={1000} className='w-12 h-auto rounded-full' />

                    <div>
                        <p className='text-blue-500'>Logged in as:</p>
                        <p className='font-medium text-lg'>
                            {session.user?.name}
                        </p>
                    </div>
                </div>
                <LogoutButton />
            </header>
        )

    return (
        <header className='sticky top-0 z-50 bg-white flex justify-center items-center p-10 shadow-sm'>
            <div className='flex flex-col items-center space-y-5'>
                <div className='flex items-center space-x-2'>
                    <Image src='/meta.png' alt='meta' width={1000} height={1000} className='w-12 h-auto' />
                    <p className='text-blue-500'>
                        Welcome to Meta Messanger
                    </p>
                </div>
                <Link href={'/auth/signin'} className='bg-blue-500 text-white rounded-md px-5 py-2 hover:bg-blue-700 font-medium'>
                    Sign In
                </Link>
            </div>
        </header>
    )
}

export default Header
