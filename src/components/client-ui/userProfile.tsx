'use client'
import React from "react";
import {signIn, signOut, useSession} from "next-auth/react";

function LoginButton() {
    return (
        <button className="btn btn-link" onClick={() => signIn()}>Logg inn</button>
    )
}

function LogoutButton() {
    return (
        <button className="btn btn-link" onClick={() => signOut()}>Logg av</button>
    )
}

export default function UserProfile() {
    const {data: session} = useSession()

    if (session) {
        return (
            <div className="flex flex-col content-center items-center prose md:pr-8">
                {session.user?.name}
                <LogoutButton/>
            </div>
        )
    }

    return (
        <div className="prose">
            <LoginButton/>
        </div>
    )
}