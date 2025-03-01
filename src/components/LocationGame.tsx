'use client';

import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Timer, Trophy, Lightbulb, SkipForward } from "lucide-react";
import { motion, AnimatePresence } from 'framer-motion';
import { questions } from '@/data/questions';
import type { Feedback, FeedbackMessages, Question } from '@/types/game';
import NameDialog from './NameDialog';
import LeaderBoard from './LeaderBoard';
import { addScore } from '@/lib/leaderboard';

const LocationGame = () => {
  // Game state
  const [gameStarted, setGameStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [questionTimer, setQuestionTimer] = useState(30); // 30 שניות לכל שאלה
  const [letters, setLetters] = useState<string[]>([]);
  const [showHint, setShowHint] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [isWrong, setIsWrong] = useState(false);
  const [feedback, setFeedback] = useState<Feedback | null>(null);
  const [shuffledQuestions, setShuffledQuestions] = useState<Question[]>([]);
  const [mistakes, setMistakes] = useState(0);
  const [showNameDialog, setShowNameDialog] = useState(false);
  const [showLeaderboard, setShowLeaderboard] = useState(false);
  
  const inputRefs = useRef<HTMLInputElement[]>([]);

  const feedbackMessages = useMemo<FeedbackMessages>(() => ({
    correct: {
      messages: ['כל הכבוד!', 'מצוין!', 'נכון מאוד!', 'יפה מאוד!'],
      className: 'text-green-600'
    },
    wrong: {
      messages: ['לא נכון, נסה שוב', 'טעות, נסה שוב', 'לא בדיוק, נסה שוב'],
      className: 'text-red-600'
    }
  }), []);
  const shuffleQuestions = useCallback(() => {
    const shuffled = [...questions].sort(() => Math.random() - 0.5);
    setShuffledQuestions(shuffled);
  }, []);

  const showFeedback = useCallback((type: 'correct' | 'wrong') => {
    const feedbackType = feedbackMessages[type];
    const message = feedbackType.messages[Math.floor(Math.random() * feedbackType.messages.length)];
    setFeedback({ message, className: feedbackType.className });
    setTimeout(() => setFeedback(null), 1500);
  }, [feedbackMessages]);

  const handleTimeUp = useCallback(() => {
    setMistakes(prev => prev + 1);
    const currentQ = shuffledQuestions[currentQuestion];
    setFeedback({
      message: `נגמר הזמן! התשובה הנכונה: ${currentQ.displayAnswer}`,
      className: 'text-blue-600'
    });
    
    if (mistakes + 1 >= 3) {
      setTimeout(() => {
        setGameOver(true);
        setGameStarted(false);
        setShowNameDialog(true);
      }, 1500);
    } else {
      setTimeout(() => {
        if (currentQuestion < shuffledQuestions.length - 1) {
          setCurrentQuestion(prev => prev + 1);
          setLetters([]);
          setShowHint(false);
          setIsCorrect(false);
          setIsWrong(false);
          setFeedback(null);
          setQuestionTimer(30); // איפוס ל-30 שניות
        } else {
          setGameOver(true);
          setGameStarted(false);
          setShowNameDialog(true);
        }
      }, 1500);
    }
  }, [currentQuestion, mistakes, shuffledQuestions]);

  const handleSkip = useCallback(() => {
    setMistakes(prev => prev + 1);
    
    // מציג את התשובה הנכונה
    const currentQ = shuffledQuestions[currentQuestion];
    setFeedback({
      message: `התשובה הנכונה: ${currentQ.displayAnswer}`,
      className: 'text-blue-600'
    });
    
    if (mistakes + 1 >= 3) {
      setTimeout(() => {
        setGameOver(true);
        setGameStarted(false);
        setShowNameDialog(true);
      }, 1500);
    } else {
      setTimeout(() => {
        if (currentQuestion < shuffledQuestions.length - 1) {
          setCurrentQuestion(prev => prev + 1);
          setLetters([]);
          setShowHint(false);
          setIsCorrect(false);
          setIsWrong(false);
          setFeedback(null);
          setQuestionTimer(30); // איפוס ל-30 שניות
        } else {
          setGameOver(true);
          setGameStarted(false);
          setShowNameDialog(true);
        }
      }, 1500);
    }
  }, [currentQuestion, mistakes, shuffledQuestions]);

  const handleSaveScore = async (playerName: string) => {
    try {
      await addScore({
        playerName,
        score,
        mistakes,
        date: new Date().toISOString()
      });
      setShowNameDialog(false);
      setShowLeaderboard(true);
    } catch (error) {
      console.error('Error saving score:', error);
    }
  };
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (gameStarted && questionTimer > 0) {
      timer = setInterval(() => {
        setQuestionTimer((prev) => {
          if (prev <= 1) {
            handleTimeUp();
            return 30; // איפוס ל-30 שניות
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [gameStarted, questionTimer, handleTimeUp]);

  useEffect(() => {
    if (gameStarted) {
      const currentQ = shuffledQuestions[currentQuestion];
      setLetters(new Array(currentQ.answer.length).fill(''));
      inputRefs.current = new Array(currentQ.answer.length)
        .fill(null)
        .map((_, i) => inputRefs.current[i] || null);
      
      setTimeout(() => {
        inputRefs.current[0]?.focus();
      }, 100);
    }
  }, [currentQuestion, gameStarted, shuffledQuestions]);

  // מניעת ברירת המחדל של מקש הרווח
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (gameStarted && e.code === 'Space') {
        e.preventDefault();
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [gameStarted]);

  const handleInput = useCallback((index: number, value: string) => {
    if (value.length > 1) return;
    
    const newLetters = [...letters];
    newLetters[index] = value;
    setLetters(newLetters);

    // מעבר לתיבה הבאה
    if (value && index < letters.length - 1) {
      inputRefs.current[index + 1]?.focus();
    }

    // בדיקת התשובה רק כשכל התיבות מלאות והגענו לתו האחרון
    if (index === letters.length - 1 && value && newLetters.every(letter => letter)) {
      const userAnswer = newLetters.join('');
      const cleanUserAnswer = userAnswer.replace(/\s/g, '');
      const cleanExpectedAnswer = shuffledQuestions[currentQuestion].answer.replace(/\s/g, '');
      
      if (cleanUserAnswer === cleanExpectedAnswer) {
        setIsWrong(false);
        setIsCorrect(true);
        showFeedback('correct');
        setScore(prev => prev + (showHint ? 5 : 10));
        
        setTimeout(() => {
          if (currentQuestion < shuffledQuestions.length - 1) {
            setCurrentQuestion(prev => prev + 1);
            setLetters([]);
            setShowHint(false);
            setIsCorrect(false);
            setQuestionTimer(30); // איפוס ל-30 שניות
          } else {
            setGameOver(true);
            setGameStarted(false);
            setShowNameDialog(true);
          }
        }, 1500);
      } else {
        setMistakes(prev => prev + 1);
        setIsWrong(true);
        
        // הצגת התשובה הנכונה אחרי תשובה שגויה
        setTimeout(() => {
          setFeedback({
            message: `התשובה הנכונה: ${shuffledQuestions[currentQuestion].displayAnswer}`,
            className: 'text-blue-600'
          });
        }, 1000);

        if (mistakes + 1 >= 3) {
          setTimeout(() => {
            setGameOver(true);
            setGameStarted(false);
            setShowNameDialog(true);
          }, 2500);
        } else {
          setTimeout(() => {
            setIsWrong(false);
            setLetters(new Array(shuffledQuestions[currentQuestion].answer.length).fill(''));
            setFeedback(null);
            
            // מעבר לשאלה הבאה אחרי הצגת התשובה הנכונה
            if (currentQuestion < shuffledQuestions.length - 1) {
              setCurrentQuestion(prev => prev + 1);
              setShowHint(false);
              setQuestionTimer(30);
            } else {
              setGameOver(true);
              setGameStarted(false);
              setShowNameDialog(true);
            }
          }, 2500);
        }
      }
    }
  }, [letters, currentQuestion, shuffledQuestions, mistakes, showHint, showFeedback]);
  const handleKeyDown = useCallback((index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace') {
      const newLetters = [...letters];
      if (!letters[index] && index > 0) {
        inputRefs.current[index - 1]?.focus();
        newLetters[index - 1] = '';
      } else {
        newLetters[index] = '';
      }
      setLetters(newLetters);
    }
  }, [letters]);

  const startGame = useCallback(() => {
    shuffleQuestions();
    setGameStarted(true);
    setGameOver(false);
    setQuestionTimer(30); // איפוס ל-30 שניות
    setScore(0);
    setMistakes(0);
    setCurrentQuestion(0);
    setLetters([]);
    setShowHint(false);
    setIsCorrect(false);
    setIsWrong(false);
    setFeedback(null);
    setShowNameDialog(false);
    setShowLeaderboard(false);
  }, [shuffleQuestions]);

  const renderInputBoxes = useCallback(() => {
    const currentQ = shuffledQuestions[currentQuestion];
    let letterIndex = 0;
    
    return (
      <div className="flex flex-row justify-center gap-4 md:gap-8 mb-8">
        {currentQ.wordLengths.map((length, wordIndex) => (
          <div key={wordIndex} className="flex flex-row gap-1 md:gap-2">
            {Array.from({ length }, () => {
              const currentIndex = letterIndex++;
              return (
                <motion.div
                  key={currentIndex}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: currentIndex * 0.05 }}
                >
                  <input
                    key={currentIndex}
                    ref={(el) => {
                      if (el) {
                        inputRefs.current[currentIndex] = el;
                      }
                    }}
                    type="text"
                    maxLength={1}
                    className={`w-8 h-8 md:w-12 md:h-12 border-2 rounded text-center 
                      text-base md:text-lg font-bold
                      ${isCorrect ? 'border-green-500 bg-green-100 animate-bounce' : 
                        isWrong ? 'border-red-500 bg-red-100 animate-shake' : 
                        'border-blue-300'}
                      focus:border-blue-500 focus:outline-none transition-colors duration-300`}
                    value={letters[currentIndex] || ''}
                    onChange={(e) => handleInput(currentIndex, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(currentIndex, e)}
                    dir="rtl"
                  />
                </motion.div>
              );
            })}
          </div>
        ))}
      </div>
    );
  }, [currentQuestion, shuffledQuestions, letters, isCorrect, isWrong, handleInput, handleKeyDown]);
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white p-2 md:p-8">
      <Card className="w-full max-w-3xl mx-auto bg-white/90 backdrop-blur shadow-xl mb-32 md:mb-0">
        <div className="p-4 md:p-8">
          <AnimatePresence mode="wait">
            {!gameStarted && !gameOver && !showLeaderboard ? (
              // מסך פתיחה
              <motion.div
                key="start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="text-center space-y-6"
              >
                <h1 className="text-3xl md:text-4xl font-bold text-blue-600 mb-4">
                  קום והתהלך בארץ
                </h1>
                <h2 className="text-xl md:text-2xl text-blue-500 mb-8">
                  משחק לזיהוי יישובים בארץ
                </h2>
                <p className="text-lg text-gray-700 mb-8 max-w-lg mx-auto">
                  מצאו את מקומות היישוב לפי ההגדרות. לרשותכם 30 שניות לכל זיהוי. 
                  לאחר שלוש טעויות המשחק יסתיים. בהצלחה!
                </p>
                <Button
                  onClick={startGame}
                  className="bg-blue-600 hover:bg-blue-700 text-lg md:text-xl px-6 md:px-8 py-4 md:py-6 
                    rounded-xl transition-all duration-300 transform hover:scale-105 mb-8"
                >
                  התחל משחק
                </Button>
                
                {/* טבלת השיאים */}
                <div className="mt-12">
                  <h3 className="text-xl font-bold text-blue-600 mb-4">טבלת השיאים</h3>
                  <LeaderBoard />
                </div>
              </motion.div>
            ) : showNameDialog ? (
              // דיאלוג הזנת שם
              <NameDialog
                score={score}
                onSubmit={handleSaveScore}
              />
            ) : showLeaderboard ? (
              // טבלת שיאים
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="space-y-6"
              >
                <LeaderBoard />
                <div className="text-center">
                  <Button
                    onClick={startGame}
                    className="bg-blue-600 hover:bg-blue-700 text-lg px-6 py-3 rounded-xl"
                  >
                    שחק שוב
                  </Button>
                </div>
              </motion.div>
            ) : gameStarted && !gameOver ? (
              // מסך המשחק
              <motion.div
                key="game"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-4 md:space-y-6"
              >
                <div className="flex justify-between items-center mb-6 md:mb-8">
                  <div className="flex items-center gap-2 bg-blue-100 px-4 py-2 rounded-lg">
                    <Trophy className="w-5 h-5 text-yellow-600" />
                    <span className="text-base md:text-lg font-semibold">{score}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-red-100 px-4 py-2 rounded-lg">
                      <span className="text-base md:text-lg font-semibold text-red-600">
                        טעויות: {mistakes}/3
                      </span>
                    </div>
                    <div className="flex items-center gap-2 bg-blue-100 px-4 py-2 rounded-lg">
                      <Timer className="w-5 h-5 text-blue-600" />
                      <span className="text-base md:text-lg font-semibold">{questionTimer}</span>
                    </div>
                  </div>
                </div>

                <motion.h2
                  key={currentQuestion}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-xl md:text-2xl font-bold text-center text-gray-800 mb-6 md:mb-8"
                >
                  {shuffledQuestions[currentQuestion].question}
                </motion.h2>

                {feedback && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className={`text-lg md:text-xl font-bold text-center mb-4 ${feedback.className}`}
                  >
                    {feedback.message}
                  </motion.div>
                )}

                {renderInputBoxes()}

                <div className="flex justify-center gap-4">
                  <Button
                    onClick={() => {
                      setShowHint(true);
                      const firstLetter = shuffledQuestions[currentQuestion].answer[0];
                      const newLetters = [...letters];
                      newLetters[0] = firstLetter;
                      setLetters(newLetters);
                    }}
                    variant="outline"
                    disabled={showHint}
                    className="group relative px-4 md:px-6 py-2 md:py-3 rounded-lg border-2 border-yellow-400 
                      hover:bg-yellow-50 transition-colors duration-300 disabled:opacity-50"
                  >
                    <div className="flex items-center gap-2">
                      <Lightbulb className="w-4 h-4 text-yellow-500 group-hover:text-yellow-600" />
                      <span className="text-yellow-700">קבל רמז</span>
                    </div>
                  </Button>
                  
                  {/* כפתור דילוג */}
                  <Button
                    onClick={handleSkip}
                    variant="outline"
                    className="group relative px-4 md:px-6 py-2 md:py-3 rounded-lg border-2 border-red-400 
                      hover:bg-red-50 transition-colors duration-300"
                  >
                    <div className="flex items-center gap-2">
                      <SkipForward className="w-4 h-4 text-red-500 group-hover:text-red-600" />
                      <span className="text-red-700">דלג</span>
                    </div>
                  </Button>
                </div>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>
      </Card>
    </div>
  );
};

export default LocationGame;