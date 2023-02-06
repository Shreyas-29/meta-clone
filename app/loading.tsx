import React from 'react'
import { CgSpinner } from 'react-icons/cg';


function Loading() {
    return (
        <div className='space-y-10 px-10 py-32 max-w-2xl xl:max-w-4xl mx-auto my-auto w-full h-screen flex items-center justify-center'>
            <div className='flex items-center justify-center space-x-2 w-full'>
                <CgSpinner className='w-8 h-8 text-blue-500 animate-spin' />
                <p className='text-blue-500 text-lg font-medium animate-pulse transition-opacity'>Loading Messages...</p>
            </div>
        </div>
    )
}

export default Loading
