'use client';
import React, { useEffect } from 'react';
import fetcher from '../utils/fetchMessages';
import useSWR from 'swr';
import { Message } from '../typings';
import MessageComponent from './MessageComponent';
import { clientPusher } from '../pusher';


type Props = {
    initialMessages: Message[];
}

function MessageList({ initialMessages }: Props) {

    const {
        data: messages,
        error,
        mutate
    } = useSWR<Message[]>('/api/getMessages', fetcher);

    useEffect(() => {
        const channel = clientPusher.subscribe('messages');

        channel.bind('new-message', async (data: Message) => {

            // If you send message, no need to update the cache.
            if (messages?.find((message) => message.id === data.id)) return;

            if (!messages) {
                mutate(fetcher);
            } else {
                mutate(fetcher, {
                    optimisticData: [data, ...messages!],
                    rollbackOnError: true,
                })
            }
        });
        return () => {
            channel.unbind_all();
            channel.unsubscribe();
        }

    }, [messages, mutate, clientPusher]);
    // console.log(messages);

    return (
        <div className='space-y-5 px-10 pt-32 pb-32 max-w-2xl xl:max-w-4xl mx-auto my-auto'>
            {(messages! || initialMessages).map((message) => (
                <MessageComponent message={message} key={message.id} />
            ))}
        </div>
    )
}

export default MessageList
