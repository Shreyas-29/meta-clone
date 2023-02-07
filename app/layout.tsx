import Header from "./Header";
import '../styles/globals.css';
import { getServerSession } from "next-auth";
import { authOptions } from "../pages/api/auth/[...nextauth]";


export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(authOptions);
  return (
    <html>
      <head />
      <body>
        <Header session={session} />
        {children}
      </body>
    </html>
  )
}
