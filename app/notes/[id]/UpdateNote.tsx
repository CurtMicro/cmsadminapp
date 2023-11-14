'use client';

import { useState } from "react"

import PocketBase from 'pocketbase';

export default function UpdateNote({ id }: any) {
    const [noteId, setNoteId] = useState(id);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');


    const update = async () => {
        const db = new PocketBase('http://127.0.0.1:8090');
        const data = {
            "content": content,
            "title": title
        };
        await db.collection('notes').update(noteId, data);

        setContent('');
        setTitle('');
        setNoteId(noteId);
    }

    return (
        <form className="bg-slate-600  rounded-md p-2 flex flex-col gap-2 justify-center items-center" onSubmit={update}>
            <h3 className="text-white font-bold">Update this Note</h3>
            <input className="text-black font-bold" type="text" placeholder="Enter a Title" value={title} onChange={(e) => setTitle(e.target.value)} />
            <textarea className="text-black font-bold" placeholder="Update content" value={content} onChange={(e) => setContent(e.target.value)} />
            <button className="bg-emerald-400 text-black font-bold rounded-full p-2" type="submit">Update Note</button>
        </form>
    );
}