import React from "react";
import {getEventBySlug} from "@/lib/events-api";
import {markdownToHtml} from "@/lib/markdownToHtml";
import markdownStyles from "./markdown-styles.module.css"
import {notFound} from "next/navigation";
import Image from "next/image";
import Link from "next/link";

type Props = {
    params: Promise<{ slug: string; }>;
};

export default async function Event(props: Props) {
    const params = await props.params
    const event = getEventBySlug(params.slug)

    if (!event) {
        return notFound()
    }

    const eventHtml = await markdownToHtml(event.content)

    return (
        <main className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-2xl mx-auto prose">
            {event.coverImage &&
                <Image
                    className="col-span-1 md:col-span-4"
                    width={400}
                    height={200}
                    src={event.coverImage}
                    alt="converimage"
                />
            }
            <h1 className="col-span-3">{event.title}</h1>
            <div className="col-span-1">
                <h3>Skrevet av</h3>
                <span>{event.author.name}</span>
            </div>
            <div className={"col-span-3"}>
                <div className={markdownStyles["markdown"]} dangerouslySetInnerHTML={{__html: eventHtml}}/>
            </div>
            {event.location &&
                <div className="col-span-1 flex flex-col gap-1 mb-6">
                    <h3>Lokasjon</h3>
                    <div>
                        <h4>Sted</h4>
                        <span>{event.location?.name}</span>
                    </div>
                    <div>
                        <h4>Addresse</h4>
                        <Link href={event.location?.mapsLink}>
                            {event.location?.address}
                        </Link>
                    </div>
                </div>
            }
        </main>
    )
}