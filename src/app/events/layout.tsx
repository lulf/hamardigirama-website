import React from "react";
import Image from "next/image";
import {HAMAR_DIGIRAMA_SVG} from "@/lib/public-assets";
import {getServerSession} from "next-auth";
import SessionProvider from "@/providers/SessionProvider";
import UserProfile from "@/components/client-ui/userProfile";

function Logo() {
    return (
        <Image
            className="w-40 sm:w-60 h-40 sm:h-40"
            width={200}
            height={200}
            src={HAMAR_DIGIRAMA_SVG}
            alt="Hamar Digirama"
        />
    )
}

export default async function EventLayout({children}: { children: React.ReactNode }) {
    const session = await getServerSession();

    return (
        <SessionProvider session={session}>
            <header className="header bg-base-400 flex flex-row justify-between items-center mb-8">
                <Logo/>
                <UserProfile />
            </header>
            <div className="pr-12 pl-12 min-h-screen">
                {children}
            </div>
            <footer className="footer bg-base-300 flex flex-row-reverse">
                <Logo/>
            </footer>
        </SessionProvider>
    )
}