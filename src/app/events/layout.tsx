import React from "react";
import Image from "next/image";
import {HAMAR_DIGIRAMA_SVG} from "@/lib/public-assets";

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

export default function EventLayout({children}: { children: React.ReactNode }) {
    return (<>
        <header>
            <Logo />
        </header>
        <div className="pr-12 pl-12 min-h-screen">
            {children}
        </div>
        <footer className="footer bg-base-200 flex flex-row-reverse">
            <Logo />
        </footer>
    </>)
}