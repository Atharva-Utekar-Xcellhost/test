
import LandingPage from './landingPage';
import React from 'react';

const index = () => {
  return <div style={{  }}>
    <LandingPage />
  </div>;
};

export default index;


{/*
import { useSession, signIn, signOut } from "next-auth/react"
export default function index() {
  const { data: session } = useSession()
  if(session) {
    return <>
      Signed in as {session.user.email} <br/>
      <button onClick={() => signOut('google')}>Sign out</button>
    </>
  }
  return <>
    Not signed in <br/>
    <button onClick={() => signIn('google')}>Sign in</button>
    <br />
    <br />
    <LandingPage />
  </>
}
*/}
 