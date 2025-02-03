'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Timer, Trophy, Lightbulb, ArrowLeft } from "lucide-react";
import { motion, AnimatePresence } from 'framer-motion';
import { questions } from '@/data/questions';
import type { Feedback, FeedbackMessages, Question } from '@/types/game';
import VirtualKeyboard from './VirtualKeyboard';

const LocationGame = () => {
  // Game state
  const [gameStarted, setGameStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(120); // 2 minutes
  const [letters, setLetters] = useState<string[]>([]);
  const [showHint, setShowHint] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [isWrong, setIsWrong] = useState(false);
  const [feedback, setFeedback] = useState<Feedback | null>(null);
  const [shuffledQuestions, setShuffledQuestions] = useState<Question[]>([]);
  
  // Refs for input fields
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  // Feedback messages configuration
  const feedbackMessages: FeedbackMessages = {
    correct: {
      messages: ['כל הכבוד!', 'מצוין!', 'נכון מאוד!', 'יפה מאוד!'],
      className: 'text-green-600'
    },
    wrong: {
      messages: ['לא נכון, נסה שוב', 'טעות, נסה שוב', 'לא בדיוק, נסה שוב'],
      className: 'text-red-600'
    }
  };
const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const shuffleQuestions = () => {
    const shuffled = [...questions].sort(() => Math.random() - 0.5);
    setShuffledQuestions(shuffled);
  };

  // Initialize game state and focus handling
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
  }, [currentQuestion, gameStarted]);

  // Timer effect
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (gameStarted && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            setGameOver(true);
            setGameStarted(false);
            clearInterval(timer);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [gameStarted, timeLeft]);

  const showFeedback = (type: 'correct' | 'wrong') => {
    const feedbackType = feedbackMessages[type];
    const message = feedbackType.messages[Math.floor(Math.random() * feedbackType.messages.length)];
    setFeedback({ message, className: feedbackType.className });
    setTimeout(() => setFeedback(null), 1500);
  };
// אחרי כל השורות של useState...

  const handleVirtualKeyPress = (key: string) => {
    // מצא את התיבה הריקה הראשונה
    let targetIndex = letters.findIndex(letter => !letter);
    if (targetIndex === -1) return; // אם כל התיבות מלאות, לא עושים כלום
    
    // הזן את האות בתיבה הריקה הראשונה
    const newLetters = [...letters];
    newLetters[targetIndex] = key;
    setLetters(newLetters);
    
    // התמקד בתיבה הבאה אם קיימת
    if (targetIndex < letters.length - 1) {
      inputRefs.current[targetIndex + 1]?.focus();
    }

    // בדוק אם התשובה מלאה
    if (newLetters.every(letter => letter)) {
      const userAnswer = newLetters.join('');
      const cleanUserAnswer = userAnswer.replace(/\s/g, '');
      const cleanExpectedAnswer = shuffledQuestions[currentQuestion].answer.replace(/\s/g, '');
      
      if (cleanUserAnswer === cleanExpectedAnswer) {
        setIsWrong(false);
        setIsCorrect(true);
        showFeedback('correct');
        handleCorrectAnswer();
      } else {
        setIsWrong(true);
        showFeedback('wrong');
        setTimeout(() => {
          setIsWrong(false);
          setLetters(new Array(shuffledQuestions[currentQuestion].answer.length).fill(''));
          inputRefs.current[0]?.focus();
        }, 1500);
      }
    }
  };

  const handleVirtualBackspace = () => {
    // מצא את התיבה המלאה האחרונה
    let targetIndex = letters.map(letter => !!letter).lastIndexOf(true);
    if (targetIndex === -1) return; // אם הכל ריק, לא עושים כלום
    
    // מחק את האות
    const newLetters = [...letters];
    newLetters[targetIndex] = '';
    setLetters(newLetters);
    
    // התמקד בתיבה שמחקנו ממנה
    inputRefs.current[targetIndex]?.focus();
  };
  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
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
    else if (e.key === 'ArrowLeft' && index < letters.length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
    else if (e.key === 'ArrowRight' && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const startGame = () => {
    shuffleQuestions();
    setGameStarted(true);
    setGameOver(false);
    setTimeLeft(120);
    setScore(0);
    setCurrentQuestion(0);
    setLetters([]);
    setShowHint(false);
    setIsCorrect(false);
    setIsWrong(false);
    setFeedback(null);
  };

  const handleSkip = () => {
    setScore(prev => Math.max(0, prev - 3));
    if (currentQuestion < shuffledQuestions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
      setLetters([]);
      setShowHint(false);
      setIsCorrect(false);
      setIsWrong(false);
      setFeedback(null);
    } else {
      setGameOver(true);
      setGameStarted(false);
    }
  };
const handleCorrectAnswer = async () => {
    setIsCorrect(true);
    const points = showHint ? 5 : 10;
    setScore(prev => prev + points);
    
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    if (currentQuestion < shuffledQuestions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
      setLetters([]);
      setShowHint(false);
      setIsCorrect(false);
    } else {
      setGameOver(true);
      setGameStarted(false);
    }
  };

  const showHintLetter = () => {
    setShowHint(true);
    const firstLetter = shuffledQuestions[currentQuestion].answer[0];
    const newLetters = [...letters];
    newLetters[0] = firstLetter;
    setLetters(newLetters);
    if (letters.length > 1) {
      inputRefs.current[1]?.focus();
    }
  };

  const renderInputBoxes = () => {
    const currentQ = shuffledQuestions[currentQuestion];
    let letterIndex = 0;
    
    return (
      <div className="flex flex-row justify-center gap-4 md:gap-8 mb-8">
        {currentQ.wordLengths.map((length, wordIndex) => (
          <div key={wordIndex} className="flex flex-row gap-1 md:gap-2">
            {Array(length).fill(null).map((_, i) => {
              const currentIndex = letterIndex++;
              return (
                <motion.div
                  key={currentIndex}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: currentIndex * 0.05 }}
                >
                  <input
                    ref={el => inputRefs.current[currentIndex] = el}
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
  };
return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white p-2 md:p-8">
      <Card className="w-full max-w-3xl mx-auto bg-white/90 backdrop-blur shadow-xl mb-32 md:mb-0">
        <div className="p-4 md:p-8">
          <AnimatePresence mode="wait">
            {!gameStarted && !gameOver ? (
              // Start Screen
              <motion.div
                key="start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="text-center space-y-6"
              >
                <h1 className="text-3xl md:text-4xl font-bold text-blue-600 mb-8">משחק המקומות בישראל</h1>
                <Button
                  onClick={startGame}
                  className="bg-blue-600 hover:bg-blue-700 text-lg md:text-xl px-6 md:px-8 py-4 md:py-6 
                    rounded-xl transition-all duration-300 transform hover:scale-105"
                >
                  התחל משחק
                </Button>
              </motion.div>
            ) : gameOver ? (
              // Game Over Screen
              <motion.div
                key="end"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="text-center space-y-6"
              >
                <Trophy className="w-16 h-16 mx-auto text-yellow-500 mb-4" />
                <h2 className="text-2xl md:text-3xl font-bold text-blue-600">המשחק נגמר!</h2>
                <p className="text-xl md:text-2xl">הניקוד שלך: {score}</p>
                <Button
                  onClick={startGame}
                  className="bg-blue-600 hover:bg-blue-700 text-base md:text-lg px-6 py-3 rounded-xl"
                >
                  שחק שוב
                </Button>
              </motion.div>
            ) : (
              // Game Screen
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
                  <div className="flex items-center gap-2 bg-blue-100 px-4 py-2 rounded-lg">
                    <Timer className="w-5 h-5 text-blue-600" />
                    <span className="text-base md:text-lg font-semibold">{formatTime(timeLeft)}</span>
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

                <div className="flex flex-col md:flex-row justify-center gap-3 md:gap-6 mt-4 md:mt-8">
                  <Button
                    onClick={showHintLetter}
                    variant="outline"
                    disabled={showHint}
                    className="group relative px-4 md:px-6 py-2 md:py-3 rounded-lg border-2 border-yellow-400 
                      hover:bg-yellow-50 transition-all duration-300 disabled:opacity-50 
                      disabled:cursor-not-allowed w-full md:w-auto"
                  >
                    <div className="flex items-center justify-center gap-2">
                      <Lightbulb className="w-4 h-4 md:w-5 md:h-5 text-yellow-500 group-hover:text-yellow-600" />
                      <span className="text-yellow-700 text-sm md:text-base">קבל רמז</span>
                    </div>
                    <span className="absolute -top-2 -right-2 bg-yellow-100 text-yellow-700 
                      text-xs px-2 py-1 rounded-full hidden md:block">
                      -5 נקודות
                    </span>
                  </Button>
                  
                  <Button
                    onClick={handleSkip}
                    variant="outline"
                    className="group relative px-4 md:px-6 py-2 md:py-3 rounded-lg border-2 border-red-400 
                      hover:bg-red-50 transition-all duration-300 w-full md:w-auto"
                  >
                    <div className="flex items-center justify-center gap-2">
                      <ArrowLeft className="w-4 h-4 md:w-5 md:h-5 text-red-500 group-hover:text-red-600" />
                      <span className="text-red-700 text-sm md:text-base">דלג</span>
                    </div>
                    <span className="absolute -top-2 -right-2 bg-red-100 text-red-700 
                      text-xs px-2 py-1 rounded-full hidden md:block">
                      -3 נקודות
                    </span>
                  </Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </Card>
{gameStarted && !gameOver && (
        <VirtualKeyboard 
          onKeyPress={handleVirtualKeyPress}
          onBackspace={handleVirtualBackspace}
          className="pt-4 pb-safe"
        />
      )}
    </div>
  );
};

export default LocationGame;