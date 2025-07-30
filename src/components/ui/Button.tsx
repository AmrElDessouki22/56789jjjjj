'use client';

import React from 'react';

type ButtonProps = {
  onClick: () => void;
  children: React.ReactNode;
};

export const Button: React.FC<ButtonProps> = ({ onClick, children }) => {
  return (
    <button onClick={onClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      {children}
    </button>
  );
};