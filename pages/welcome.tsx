import Head from 'next/head';
import Link from 'next/link';
import { signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

export default function Home() {
    const router = useRouter()
    const { data: session, status } = useSession({
      required: true,
    onUnauthenticated() {
        router.push('/auth');
      },
    })
  return (
    <div>
      <Head>
        <title>HackMedia</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Hey Hackclubber, welcome to hackMedia!</h1>
      <h2>Hack Media is a social media <b>just</b> for hackclubbers
      where you can share your projects, chat and have fun with other hackclubbers!
      </h2>
      <h3>Ready to get going? <Link href="/">
          Click here to get started</Link>!
      </h3>
    </div>
  )
}