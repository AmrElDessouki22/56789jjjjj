import React from 'react';
import { NotesList } from '@/components/features/NotesList';
import { NoteEditor } from '@/components/features/NoteEditor';

const HomePage: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <NoteEditor />
      <NotesList />
    </div>
  );
};

export default HomePage;