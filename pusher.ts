import Pusher from "pusher";
import ClientPusher from "pusher-js";

export const serverPusher = new Pusher({
    appId: process.env.PUSHER_APPID!,
    key: process.env.PUSHER_KEY!,
    secret: process.env.PUSHER_SECRET!,
    cluster: "ap2",
    useTLS: true,
})

export const clientPusher = new ClientPusher('d246e66eccc5c66bb888', {
    cluster: 'ap2',
    forceTLS: true,
});