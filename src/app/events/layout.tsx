import React from "react";
import Image from "next/image";
import logo from "../../../public/Hamar_digirama_logo-01.svg";

export default function EventLayout({children}: { children: React.ReactNode }) {
    return (<>
        <header>
            <Image
                className="w-40 sm:w-60 h-40 sm:h-40"
                src={logo}
                alt="Hamar Digirama"
            />
        </header>
        <div className="pr-12 pl-12 min-h-screen">
            {children}
        </div>
        <footer className="footer bg-base-200 flex flex-row-reverse">
            <Image
                className="w-40 sm:w-60 h-40 sm:h-40"
                src={logo}
                alt="Hamar Digirama"
            />
        </footer>
    </>)
}