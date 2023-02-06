export { default } from 'next-auth/middleware';

// If the user is not siggned in it will go direct '/auth/signin'
export const config = { matcher: ["/"] };