import Image from 'next/image';
import logo from '../../public/Hamar_digirama_logo_anim_once_600x306.gif';
import Link from "next/link";
import {getAllEvents} from "@/lib/events-api";

export default function Home() {

    const events = getAllEvents()
    const nextEvent = events[0]

    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col">
                <Image
                    className="w-60 sm:w-80"
                    src={logo}
                    alt="Hamar Digirama"
                />
                <div className="max-w-md text-center prose">
                    <p className="py-6">
                        Vi er en frivillig organisasjon som holder uformelle samlinger for utviklere, designere og andre som er interessert i teknologi i Hamar området.
                    </p>
                    <Link role={"button"} className={"btn btn-primary"} href={`/events/${nextEvent?.slug}`}>
                        Neste samling
                    </Link>
                </div>
            </div>
        </div>
    )
}
