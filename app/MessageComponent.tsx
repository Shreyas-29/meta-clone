import { useSession } from 'next-auth/react';
import Image from 'next/image';
import React from 'react'
import { Message } from '../typings'
import Timeago from 'react-timeago';


type Props = {
    message: Message;
}

function MessageComponent({ message }: Props) {

    const { data: session } = useSession();
    const isUser = session?.user?.email === message.email;
    // console.log(session);

    return (
        <div className={`flex w-fit ${isUser && 'ml-auto'}`} key={message.id}>
            <div className={`flex-shrink-0 items-center flex ${isUser && 'order-2'}`}>
                <Image
                    src={message.profilePic}
                    alt={message.username}
                    width={1000}
                    height={1000}
                    unoptimized
                    className='w-10 h-10 mx-2 rounded-full object-center'
                />
            </div>
            <div>
                <div>
                    <p className={`text-xs px-1 pb-1 ${isUser && 'text-right'}`}>
                        {message.username}
                    </p>
                </div>
                <div className='flex items-end'>
                    <div className={`px-4 py-2 rounded-lg w-fit text-white ${isUser ? 'bg-blue-500 ml-auto order-2' : 'bg-red-500'}`}>
                        <p className='text-sm'>
                            {message.message}
                        </p>
                    </div>
                    <div>
                        <p className={`text-xs italic px-2 text-gray-300 ${isUser && 'text-right'}`}>
                            <Timeago date={new Date(message.created_at)} />
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MessageComponent
