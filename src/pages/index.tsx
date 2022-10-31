// src/pages/index.tsx

import { signIn, signOut, useSession } from "next-auth/react";

const Home = () => {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <main>Loading...</main>;
  }

  return (
    <main>
      <h1>Aszshop</h1>
      {session ? (
        <div>
          <p>
            hi {session.user?.name}
          </p>

          <button onClick={() => signOut()}>Logout</button>
        </div>
      ) : (
        <div>
          <button onClick={() => signIn("google")}>Login with Google</button>
        </div>
      )}
    </main>
  );
};

export default Home;