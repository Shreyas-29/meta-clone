'use client';
import { signOut } from 'next-auth/react';
import React from 'react';

function LogoutButton() {
    return (
        <button onClick={() => signOut()} className='bg-blue-500 shadow-lg shadow-blue-500/40 text-white rounded-md px-5 py-2 hover:bg-blue-700 font-medium'>
            Sign Out
        </button>
    )
}

export default LogoutButton
