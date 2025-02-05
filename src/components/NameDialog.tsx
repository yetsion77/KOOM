import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';

interface NameDialogProps {
  score: number;
  onSubmit: (name: string) => void;
}

const NameDialog: React.FC<NameDialogProps> = ({ score, onSubmit }) => {
  const [name, setName] = useState('');

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="text-center space-y-4"
    >
      <h2 className="text-2xl font-bold text-blue-600">כל הכבוד!</h2>
      <p className="text-xl">השגת {score} נקודות</p>
      <div className="space-y-4">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="הכנס את שמך"
          className="w-full p-2 border rounded text-right"
          dir="rtl"
        />
        <Button
          onClick={() => onSubmit(name)}
          disabled={!name.trim()}
          className="w-full bg-blue-600 hover:bg-blue-700"
        >
          שמור תוצאה
        </Button>
      </div>
    </motion.div>
  );
};

export default NameDialog;