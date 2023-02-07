import { getServerSession } from 'next-auth/next';
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { authOptions } from '../pages/api/auth/[...nextauth]';
import LogoutButton from './LogoutButton';



function Header({ session }: any) {

    // const session =  getServerSession(authOptions);

    if (session)
        return (
            <header className='fixed top-0 z-50 bg-white flex justify-between items-center px-5 py-10 md:p-10 shadow-md w-full'>
                <div className='flex space-x-3'>
                    <Image unoptimized src={session.user?.image!} alt='user' width={1000} height={1000} className='w-12 h-auto rounded-full' />
                    {/* session.user?.image! */}
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
        <header className='fixed top-0 z-50 bg-white flex justify-center items-center px-5 py-10 md:p-10 shadow-md w-full'>
            <div className='flex flex-col items-center space-y-5'>
                <div className='flex items-center space-x-2'>
                    <Image src='/meta.png' alt='meta' width={1000} height={1000} className='w-12 h-auto' />
                    <p className='bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent text-lg font-medium'>
                        Welcome to Meta Messanger
                    </p>
                </div>
                <Link href={'/auth/signin'} className='bg-blue-500 shadow-lg shadow-blue-500/40 text-white rounded-md px-5 py-2 hover:bg-blue-700 font-medium'>
                    Sign In
                </Link>
            </div>
        </header>
    )

    // return (
    //     (session ? (
    //         <header className='fixed top-0 z-50 bg-white flex justify-between items-center px-10 py-6 w-full shadow-sm'>
    //             <div className='flex space-x-3'>
    //                 <Image unoptimized src={session.user?.image!} alt='user' width={1000} height={1000} className='w-12 h-auto rounded-full' />
    //                 <div>
    //                     <p className='text-blue-500'>Logged in as:</p>
    //                     <p className='font-medium text-lg'>
    //                         {session.user?.name}
    //                     </p>
    //                 </div>
    //             </div>
    //             <LogoutButton />
    //         </header>
    //     ) : (
    //         <header className='sticky top-0 z-50 bg-white flex justify-center items-center p-10 shadow-sm'>
    //             <div className='flex flex-col items-center space-y-5'>
    //                 <div className='flex items-center space-x-2'>
    //                     <Image src='/meta.png' alt='meta' width={1000} height={1000} className='w-12 h-auto' />
    //                     <p className='bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent text-lg font-medium'>
    //                         Welcome to Meta Messanger
    //                     </p>
    //                 </div>
    //                 <Link href={'/auth/signin'} className='bg-blue-500 shadow-lg shadow-blue-500/40 text-white rounded-md px-5 py-2 hover:bg-blue-700 font-medium'>
    //                     Sign In
    //                 </Link>
    //             </div>
    //         </header>
    //     ))
    // )
}

export default Header
