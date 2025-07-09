import React, { useEffect, useRef } from 'react';
import HomeComponentProvider from "@/components/(home)/home";
import useInitStore from "@/store/initStore";
import useEnterAdmin from '../../hooks/useEnterAdmin';
import { useNavigate } from 'react-router-dom';

function SubComponents({ init }) {
  if (init) return (
    <>
      <HomeComponentProvider.B />
      <HomeComponentProvider.C />
      <HomeComponentProvider.D />
    </>
  );
  return null;
}

export default function Page() {
  const homeRef = useRef(null);
  const router = useNavigate();
  const { init } = useInitStore();
  const { password, isAdminInit, setIsAdminInit, isEnterAdmin } = useEnterAdmin();
  
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Enter' && isEnterAdmin) {
        homeRef?.current?.scrollIntoView({ behavior: 'smooth' });
        setTimeout(() => {
          setIsAdminInit(true);
        }, 1000);
        setTimeout(() => {
          router('/loading');
        }, 7000);
      }
    }
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [password, isEnterAdmin, setIsAdminInit, router])
  
  return (
    <div className="relative h-screen">
      <HomeComponentProvider.A  ref={homeRef} />
      {!isAdminInit && <SubComponents init={init} />}
    </div>
  )
} 