import React, { useEffect, useState } from 'react';
import { getTopScores, LeaderboardEntry } from '@/lib/leaderboard';
import { motion } from 'framer-motion';

const LeaderBoard = () => {
  const [scores, setScores] = useState<LeaderboardEntry[]>([]);

  useEffect(() => {
    const fetchScores = async () => {
      const topScores = await getTopScores();
      setScores(topScores);
    };
    fetchScores();
  }, []);

  return (
    <div className="w-full max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-center text-blue-600 mb-4">טבלת שיאים</h2>
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full">
          <thead className="bg-blue-50">
            <tr>
              <th className="px-4 py-2 text-right">שם</th>
              <th className="px-4 py-2 text-right">ניקוד</th>
              <th className="px-4 py-2 text-right">תאריך</th>
            </tr>
          </thead>
          <tbody>
            {scores.map((score, index) => (
              <motion.tr
                key={score.id || index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}
              >
                <td className="px-4 py-2">{score.playerName}</td>
                <td className="px-4 py-2">{score.score}</td>
                <td className="px-4 py-2">
                  {new Date(score.date).toLocaleDateString('he-IL')}
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LeaderBoard;