import Link from "next/link";
import PocketBase from 'pocketbase';
import CreateNote from "./CreateNote";

export const fetchCache = 'default-no-store';

async function getNotes() {
    const db = new PocketBase('http://127.0.0.1:8090')
    const records = await db.collection('notes').getFullList();
    return records as any[];
}

async function getUsername(userId: string) {
    const db = new PocketBase('http://127.0.0.1:8090')
    const record = await db.collection('users').getOne(userId);
    return record?.name as string
}

export default async function NotesPage() {
    const notes = await getNotes();

    return (
        <div className="flex flex-col items-center">
            <h1 className="m-2">Notes</h1>
            <div className="flex flex-row flex-wrap justify-evenly items-center w-full">
                {notes?.map((note) => {
                    return <Note key={note.id} note={note} />;
                })}
            </div>
            <CreateNote />
        </div>
    );
}

function Note({ note }: any) {
    const { id, title, content, created, creator } = note || {};

    return (
        <Link href={`/notes/${id}`}>
            <div className="bg-white rounded-md text-cyan-600 w-fit p-4">
                <h2>{getUsername(creator)}</h2>
                <h2>{title}</h2>
                <h5>{content}</h5>
                <p>{created}</p>
            </div>
        </Link>
    )
}
