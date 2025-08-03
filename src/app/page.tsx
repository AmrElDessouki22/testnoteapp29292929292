import { useEffect, useState } from 'react';
import NoteList from '@/components/features/NoteList';
import CreateNote from '@/components/features/CreateNote';

export default function HomePage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">My Notes</h1>
      <CreateNote />
      <NoteList />
    </div>
  );
}
