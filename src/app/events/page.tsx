import React from "react";
import {EventDTO, getAllEvents} from "@/lib/events-api";

type EventCaptionProps = {
    event: EventDTO
}

function EventCaption({event}: EventCaptionProps) {
    return (
    <div className="card w-100 shadow-xl bg-base-200 mb-8">
        <div className="card-body">
            <h2 className="card-title">{event.title}</h2>
            <p>{event.excerpt}</p>
            <div className="card-actions justify-end">
                <button className="btn btn-primary">Sjekk ut!</button>
            </div>
        </div>
    </div>
    )
}


export default function EventsOverview() {
    const events = getAllEvents()
    return (
        <main
            className="flex flex-col gap-4 items-center justify-items-center">
            <ul>
                {events.map((event) => {
                        return <EventCaption
                            key={event.date + event.slug} event={event}/>
                    }
                )}
            </ul>
        </main>
    )
}

