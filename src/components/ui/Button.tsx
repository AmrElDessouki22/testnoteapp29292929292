'use client';

import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  label: string;
}

export default function Button({ label, ...props }: ButtonProps) {
  return (
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" {...props}>
      {label}
    </button>
  );
}
