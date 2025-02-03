'use client';

import React from 'react';
import { Delete } from 'lucide-react';  // שינינו ל-Delete במקום Backspace

const HEBREW_KEYS = [
  ['ק', 'ר', 'א', 'ט', 'ו', 'ן', 'ם', 'פ'],
  ['ש', 'ד', 'ג', 'כ', 'ע', 'י', 'ח', 'ל', 'ך', 'ף'],
  ['ז', 'ס', 'ב', 'ה', 'נ', 'מ', 'צ', 'ת', 'ץ']
];

interface VirtualKeyboardProps {
  onKeyPress: (key: string) => void;
  onBackspace: () => void;
  className?: string;
}

const VirtualKeyboard: React.FC<VirtualKeyboardProps> = ({ onKeyPress, onBackspace, className = '' }) => {
  return (
    <div className={`fixed bottom-0 left-0 right-0 bg-gray-100 py-2 px-1 shadow-lg md:hidden ${className}`}>
      <div className="max-w-lg mx-auto">
        {HEBREW_KEYS.map((row, rowIndex) => (
          <div key={rowIndex} className="flex justify-center gap-1 mb-1">
            {row.map((key) => (
              <button
                key={key}
                onClick={() => onKeyPress(key)}
                className="w-[9.5vw] max-w-[2.5rem] aspect-square bg-white rounded-lg 
                  shadow flex items-center justify-center text-lg font-semibold 
                  hover:bg-blue-50 active:bg-blue-100 transition-colors"
              >
                {key}
              </button>
            ))}
          </div>
        ))}
        <div className="flex justify-center gap-1 mt-1">
          <button
            onClick={onBackspace}
            className="px-8 py-3 bg-white rounded-lg shadow flex items-center justify-center
              hover:bg-red-50 active:bg-red-100 transition-colors"
          >
            <Delete className="w-6 h-6 text-red-500" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default VirtualKeyboard;