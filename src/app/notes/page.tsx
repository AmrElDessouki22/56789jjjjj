"use client";

import { useState } from 'react';
import EditNote from './EditNote';

const initialNotes = [
  { id: '1', content: 'First note' },
  { id: '2', content: 'Second note' },
];

export default function NotesPage() {
  const [notes, setNotes] = useState(initialNotes);
  const [editingNoteId, setEditingNoteId] = useState<string | null>(null);

  const handleEdit = (id: string) => {
    setEditingNoteId(id);
  };

  const handleSave = (id: string, content: string) => {
    setNotes((prevNotes) =>
      prevNotes.map((note) =>
        note.id === id ? { ...note, content } : note
      )
    );
    setEditingNoteId(null);
  };

  return (
    <div>
      {notes.map((note) => (
        <div key={note.id}>
          {editingNoteId === note.id ? (
            <EditNote
              noteId={note.id}
              initialContent={note.content}
              onSave={handleSave}
            />
          ) : (
            <div>
              <p>{note.content}</p>
              <button onClick={() => handleEdit(note.id)}>Edit</button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
