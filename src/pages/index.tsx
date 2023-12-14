import { useSession, signIn, signOut } from "next-auth/react"
import Image from "next/image";

export default function Home() {
  const { data: session } = useSession();
  if (session && session.user) {
    return (
      <>
        Signed in as {session.user.name} <br />
        {session.user.image && <Image src={session.user.image} alt="User avatar" width={100} height={300}/>}
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  );
}
