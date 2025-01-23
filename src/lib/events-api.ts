import fs from "fs"
import {join} from "path"
import matter from "gray-matter";

export interface Author {
    name: string
    picture: string
}

export interface Location {
    name: string
    address: string
    mapsLink: string
}

export interface EventDTO {
    title: string;
    excerpt: string;
    coverImage?: string;
    date: string;
    author: Author;
    location?: Location
    content: string;
    slug?: string;
}

const EVENTS_DIR = join(process.cwd(), "_events")

function getEventsFileNames(): string[] {
    return fs.readdirSync(EVENTS_DIR)
}

function readEventFile(fileName: string) {
    const fullpath = join(EVENTS_DIR, fileName)
    return fs.readFileSync(fullpath, "utf8")
}

function fileExists(fileToFind: string): boolean {
    const eventFileNames = getEventsFileNames()
    return !!eventFileNames.find((filename) => filename === fileToFind)
}

export function getEventBySlug(slug: string): EventDTO | undefined {
    const fileTofind = `${slug}.md`
    if (!fileExists(fileTofind)) {
        return undefined
    }
    const fileContent = readEventFile(fileTofind)
    const {data, content} = matter(fileContent)

    return {...data, content, slug} as EventDTO
}

export function getAllEvents(): EventDTO[] {
    const eventFileNames = getEventsFileNames()
    return eventFileNames
        .map((fileName) => {
            const slug = fileName.replace(/\.md$/, "")
            const fileContent = readEventFile(fileName)
            const {data, content} = matter(fileContent)

            return {...data, slug, content} as EventDTO
        })
        .sort((eventA, eventB) => (eventA.date > eventB.date ? -1 : 1))
}





