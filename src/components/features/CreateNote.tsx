'use client';

import { useState } from 'react';
import { useNotes } from '@/contexts/NotesContext';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';

export default function CreateNote() {
  const [note, setNote] = useState('');
  const { addNote } = useNotes();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (note.trim()) {
      addNote(note);
      setNote('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex mb-4">
      <Input label="New Note" value={note} onChange={(e) => setNote(e.target.value)} />
      <Button type="submit" label="Add Note" />
    </form>
  );
}
