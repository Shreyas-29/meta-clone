import React from 'react'
import { CgSpinner } from 'react-icons/cg';


function Loading() {
    return (
        <div className='space-y-10 px-10 py-32 max-w-2xl xl:max-w-4xl mx-auto my-auto w-full h-[100vh] grid place-items-center'>
            <div className='flex items-center justify-center space-x-2 w-full place-items-center place-self-center'>
                <CgSpinner className='w-8 h-8 text-blue-500 animate-spin' />
                <p className='text-blue-600 text-lg animate-pulse transition-opacity'>Loading Messenger...</p>
            </div>
        </div>
    )
}

export default Loading
