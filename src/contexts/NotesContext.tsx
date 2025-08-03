'use client';

import { createContext, useContext, useState, ReactNode } from 'react';
import { Note } from '@/types';
import { useLocalStorage } from '@/hooks/useLocalStorage';

interface NotesContextType {
  notes: Note[];
  addNote: (content: string) => void;
}

const NotesContext = createContext<NotesContextType | undefined>(undefined);

export function NotesProvider({ children }: { children: ReactNode }) {
  const [notes, setNotes] = useLocalStorage<Note[]>('notes', []);

  const addNote = (content: string) => {
    const newNote = { id: Date.now().toString(), content };
    setNotes((prevNotes) => [...prevNotes, newNote]);
  };

  return (
    <NotesContext.Provider value={{ notes, addNote }}>
      {children}
    </NotesContext.Provider>
  );
}

export function useNotes() {
  const context = useContext(NotesContext);
  if (!context) {
    throw new Error('useNotes must be used within a NotesProvider');
  }
  return context;
}
