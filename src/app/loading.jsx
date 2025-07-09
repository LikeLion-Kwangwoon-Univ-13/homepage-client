import { useState, useEffect } from 'react';
import { cn } from "@/utils";
import useEnterAdmin from '../hooks/useEnterAdmin';
import { useNavigate } from 'react-router-dom';

export default function Loading() {
  const [showText, setShowText] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const { isEnterAdmin } = useEnterAdmin();
  const navigate = useNavigate();
  
  const text = "LIKE? LION";
  const letters = text.split('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowText(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (showText && currentIndex < letters.length) {
      const timer = setTimeout(() => {
        setCurrentIndex(prev => prev + 1);
      }, 200);
      
      return () => clearTimeout(timer);
    }
  }, [showText, currentIndex, letters.length]);

  // 로딩 완료 후 admin 페이지로 리다이렉트
  useEffect(() => {
    if (currentIndex >= letters.length && isEnterAdmin) {
      const timer = setTimeout(() => {
        navigate('/admin');
      }, 2000); // 2초 후에 리다이렉트
      
      return () => clearTimeout(timer);
    }
  }, [currentIndex, letters.length, isEnterAdmin, navigate]);

  return (
    <div className="fixed inset-0 z-50 bg-[url(/images/noise.png)] bg-repeat bg-black flex items-center justify-center overflow-hidden">
      
      {/* 메인 텍스트 */}
      <div className="relative font-space">
        <div className="flex items-center justify-center space-x-4">
          {letters.map((letter, index) => {
            const isVisible = index < currentIndex;
            const isSpace = letter === ' ';
            const isQuestion = letter === '?';
            
            return (
              <span
                key={index}
                className={cn(
                  "text-[120px] font-light tracking-[0.2em] uppercase transition-all duration-1000 transform-gpu",
                  isVisible ? "opacity-100 scale-100" : "opacity-0 scale-50",
                  isSpace ? "w-8" : "",
                  isQuestion ? "text-[#E74F13] animate-bounce" : "text-white",
                  "transition-all duration-1000"
                )}
                style={{
                  transform: isVisible 
                    ? `translateX(0) translateY(0) rotate(0deg) scale(1)` 
                    : `translateX(${(index % 2 === 0 ? -1 : 1) * 300}px) translateY(${(index % 3 === 0 ? -1 : 1) * 300}px) rotate(${index * 60}deg) scale(0.3)`,
                  animationDelay: `${index * 0.1}s`,
                  textShadow: isVisible && isQuestion
                    ? `0 0 10px #E74F13, 0 0 20px #E74F13, 0 0 40px #E74F13`
                    : isVisible 
                    ? `0 0 20px rgba(255,255,255,0.3), 0 0 40px rgba(255,255,255,0.1)`
                    : 'none',
                  filter: isVisible ? 'brightness(1.1)' : 'brightness(0.5)'
                }}
              >
                {letter}
              </span>
            );
          })}
        </div>

        {/* 하단 로딩 바 */}
        <div className="mt-12 w-80 h-1 bg-white/20 rounded-full overflow-hidden mx-auto">
          <div 
            className="h-full bg-[#E74F13] rounded-full transition-all duration-500 relative"
            style={{
              width: `${(currentIndex / letters.length) * 100}%`,
              boxShadow: '0 0 10px #E74F13'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse" />
          </div>
        </div>

        {/* 사이드 이펙트들 */}
        {showText && (
          <>
            <div className="absolute -top-20 -left-20 w-32 h-32 border border-[#E74F13]/30 rounded-full animate-ping" />
            <div className="absolute -bottom-20 -right-20 w-24 h-24 border border-white/20 rounded-full animate-pulse" />
            <div className="absolute top-1/2 -right-32 w-16 h-16 border border-[#E74F13]/40 rounded-full animate-spin" style={{ animationDuration: '3s' }} />
            <div className="absolute top-1/4 -left-24 w-12 h-12 border border-white/30 rounded-full animate-bounce" />
          </>
        )}

        {/* 배경 파티클 */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-[#E74F13] rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
                opacity: Math.random() * 0.5 + 0.1
              }}
            />
          ))}
        </div>
      </div>

      {/* 하단 메시지 */}
      {currentIndex >= letters.length && (
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 animate-pulse">
          <p className="text-white text-xl font-space font-light tracking-[0.1em] uppercase">
            {isEnterAdmin ? (
              <>🦁 ENTERING ADMIN ZONE 🦁</>
            ) : (
              <>🦁 KWANGWOON UNIVERSITY 🦁</>
            )}
          </p>
          <div className="w-full h-px bg-gradient-to-r from-transparent via-[#E74F13] to-transparent mt-4" />
        </div>
      )}
    </div>
  );
} 