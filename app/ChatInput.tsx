'use client';
import React, { FormEvent, useState } from 'react';
import { v4 as uuid } from 'uuid';
import { Message } from '../typings';
import useSWR from 'swr';
import fetcher from '../utils/fetchMessages';
import { getServerSession } from 'next-auth/next';


type Props = {
    session: Awaited<ReturnType<typeof getServerSession>>
}

function ChatInput({ session }: any) {

    const [input, setInput] = useState("");
    const { data: messages, error, mutate } = useSWR('/api/getMessages', fetcher);
    // console.log(messages)

    const addMessage = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!input || !session) return;

        const messageToSend = input;

        setInput('');

        const id = uuid();

        const message: Message = {
            id,
            message: messageToSend,
            created_at: Date.now(),
            username: session?.user?.name!,
            profilePic: session?.user?.image!,
            email: session?.user?.email!,
        }

        const uploadMessageToUpstash = async () => {
            const data = await fetch('/api/addMessage', {
                method: 'POST',
                headers: {
                    "Content-Type": 'application/json',
                },
                body: JSON.stringify({
                    message,
                }),
            }).then(res => res.json());

            return [data.message, ...messages!];
        };

        await mutate(uploadMessageToUpstash, {
            optimisticData: [message, ...messages!],
            rollbackOnError: true,
        })

    };

    return (
        <form onSubmit={addMessage} className='flex fixed w-full bottom-0 z-50 px-5 md:px-10 py-5 space-x-2 border border-gray-100 bg-white'>
            <input
                type="text"
                value={input}
                disabled={!session}
                onChange={(e) => setInput(e.target.value)}
                placeholder='Enter message here...'
                className='flex-1 rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent px-5 py-3 disabled:cursor-not-allowed'
            />
            <button
                type='submit'
                disabled={!input}
                className='bg-blue-500 text-white rounded-md px-4 text-sm md:text-base md:px-5 py-2 hover:bg-blue-700 font-medium disabled:opacity-50 disabled:cursor-not-allowed'
            >
                Send
            </button>
        </form>
    )
}

export default ChatInput
