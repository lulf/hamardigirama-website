import Image from 'next/image';
import Link from "next/link";
import {getAllEvents} from "@/lib/events-api";
import {HAMAR_DIGIRAMA_GIF} from "@/lib/public-assets";

export default function Home() {

    const events = getAllEvents()
    const nextEvent = events[0]

    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col">
                <Image
                    className="w-60 sm:w-80"
                    width={1000}
                    height={1000}
                    src={HAMAR_DIGIRAMA_GIF}
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
