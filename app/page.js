'use client'

import {signIn, useSession} from "next-auth/react";

function Home() {
    const {data: session} = useSession()

    if (session && session.user) {
        return <main>
            Logged in as {session.user.email}
        </main>
    }
    else if (!session) {
        return <div style={{color: 'white'}}>
            you can login from <a style={{cursor: 'pointer'}} onClick={() => signIn()}>here</a>
        </div>
    }
}

export default Home