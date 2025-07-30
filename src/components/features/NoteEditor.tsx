'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { useNotes } from '@/contexts/NotesContext';

export const NoteEditor: React.FC = () => {
  const [content, setContent] = useState('');
  const { addNote } = useNotes();

  const handleAddNote = () => {
    addNote(content);
    setContent('');
  };

  return (
    <div className="mb-4">
      <Input type="text" value={content} onChange={(e) => setContent(e.target.value)} placeholder="Write a note..." />
      <Button onClick={handleAddNote}>Add Note</Button>
    </div>
  );
};