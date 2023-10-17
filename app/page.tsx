'use client'

import {signIn, signOut, useSession} from "next-auth/react";
import Header from "@/app/components/Header";
import Posts from "@/app/components/Posts";


function Home() {
    // const {data: session} = useSession()
    //
    // if (session && session.user) {
    //     return LoggedInHome(session)
    // } else if (!session) {
    //     return <div style={{color: 'white'}}>
    //         you can login from <a style={{cursor: 'pointer'}} onClick={() => signIn()}>here</a>
    //     </div>
    // }

    return <div className='home-page'>
        <Header/>
        <Posts />
    </div>

}

// function LoggedInHome(session) {
//     return <main style={{color: "white"}}>
//         Logged in as {session.user.email}
//
//         <button onClick={() => signOut()}>Logout</button>
//     </main>
// }

export default Home