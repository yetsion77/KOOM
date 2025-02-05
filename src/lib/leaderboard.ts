import { db } from './firebase';
import { ref, push, query, orderByChild, limitToLast, get } from 'firebase/database';

export interface LeaderboardEntry {
  playerName: string;
  score: number;
  date: string;
  mistakes: number;
}

export const addScore = async (entry: LeaderboardEntry) => {
  try {
    await push(ref(db, 'scores'), {
      ...entry,
      date: new Date().toISOString()
    });
  } catch (error) {
    console.error('Error adding score:', error);
  }
};

export const getTopScores = async (limitCount = 10) => {
  try {
    const scoresRef = ref(db, 'scores');
    const scoresQuery = query(
      scoresRef,
      orderByChild('score'),
      limitToLast(limitCount)
    );
    
    const snapshot = await get(scoresQuery);
    const scores: LeaderboardEntry[] = [];
    
    snapshot.forEach((childSnapshot) => {
      scores.push({
        id: childSnapshot.key,
        ...childSnapshot.val()
      });
    });
    
    return scores.sort((a, b) => b.score - a.score);
  } catch (error) {
    console.error('Error getting scores:', error);
    return [];
  }
};