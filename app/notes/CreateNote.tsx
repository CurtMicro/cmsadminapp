'use client';

import { useState } from "react"
import { useRouter } from "next/navigation";

import PocketBase from 'pocketbase';

export const fetchCache = 'default-no-store';

export default function CreateNote() {
    const creator = 'gydv9r48053jmfa';
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const router = useRouter();

    const create = async () => {
        const db = new PocketBase('http://127.0.0.1:8090');
        const data = {
            "content": content,
            "creator": creator,
            "title": title
        };
        await db.collection('notes').create(data);

        setContent('');
        setTitle('');

        router.refresh();
    }

    return (
        <form className="bg-slate-600  rounded-md p-2 flex flex-col gap-2 justify-center items-center" onSubmit={create}>
            <h3 className="text-white font-bold">Create a new Note</h3>
            <input className="text-black font-bold" type="text" placeholder="Enter a Title" value={title} onChange={(e) => setTitle(e.target.value)} />
            <textarea className="text-black font-bold" placeholder="Content" value={content} onChange={(e) => setContent(e.target.value)} />
            <button className="bg-emerald-400 text-black font-bold rounded-full p-2" type="submit">Create Note</button>
        </form>
    );
}