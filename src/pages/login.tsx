import { signIn, signOut, useSession } from "next-auth/react";
import Image from 'next/image'

export default function Login() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <main>Loading...</main>;
  }
  return (
    <>
    <main className="flex flex-col justify-center items-center gap-5">
      <h1 className="text-2xl text-center">Login</h1>
      {session ? (
        <div>
            <Image className="rounded-full"
            src={session.user?.image}
            width='200'
            height='200'
            />
          <p>
            hi <span className="text-blue-500">{session.user?.name}</span>
          </p>

          <button onClick={() => signOut()}>Logout</button>
        </div>
      ) : (
        <div>
          <button onClick={() => signIn("google")} className="bg-blue-500 p-2 text-white rounded hover:bg-blue-700">Login with Google</button>
        </div>
      )}
    </main>
    </>
  );
}