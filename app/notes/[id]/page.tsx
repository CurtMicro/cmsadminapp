
import PocketBase from 'pocketbase';
import UpdateNote from './UpdateNote';

export const fetchCache = 'default-no-store';

async function getNote(noteId: string) {
    const db = new PocketBase('http://127.0.0.1:8090')
    const record = await db.collection('notes').getOne(noteId);
    return record as any;
}

async function getUsername(userId: string) {
    const db = new PocketBase('http://127.0.0.1:8090')
    const record = await db.collection('users').getOne(userId);
    return record?.name as string
}

export default async function NotePage({ params }: any) {
    const noteId = params.id
    const note = await getNote(noteId);

    return (
        <div className="flex flex-col items-center">
            <h1 className="m-2">Notes/{note.id}</h1>
            <div className="flex flex-col items-center">
                <h2>{getUsername(note.creator)}</h2>
                <h3>{note.title}</h3>
                <h5>{note.content}</h5>
                <p>{note.created}</p>
            </div>
            <UpdateNote id={noteId} />
        </div>
    );
}

