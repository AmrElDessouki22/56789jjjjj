"use client";

import { useState } from 'react';

interface EditNoteProps {
  noteId: string;
  initialContent: string;
  onSave: (id: string, content: string) => void;
}

export default function EditNote({ noteId, initialContent, onSave }: EditNoteProps) {
  const [content, setContent] = useState(initialContent);

  const handleSave = () => {
    onSave(noteId, content);
  };

  return (
    <div>
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        rows={10}
        cols={50}
      />
      <button onClick={handleSave}>Save</button>
    </div>
  );
}
