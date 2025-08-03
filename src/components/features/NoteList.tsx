'use client';

import { useNotes } from '@/contexts/NotesContext';

export default function NoteList() {
  const { notes } = useNotes();

  if (notes.length === 0) return <p>No notes available</p>;

  return (
    <ul>
      {notes.map((note, index) => (
        <li key={index} className="border-b border-gray-300 p-2">
          {note}
        </li>
      ))}
    </ul>
  );
}
