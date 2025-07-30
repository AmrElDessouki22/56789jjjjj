'use client';

import React from 'react';
import { useNotes } from '@/contexts/NotesContext';

export const NotesList: React.FC = () => {
  const { notes, deleteNote } = useNotes();

  return (
    <ul className="list-disc">
      {notes.map(note => (
        <li key={note.id} className="p-2 border-b">
          {note.content}
          <button onClick={() => deleteNote(note.id)} className="ml-2 text-red-500">Delete</button>
        </li>
      ))}
    </ul>
  );
};