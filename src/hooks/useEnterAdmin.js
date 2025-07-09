import { create } from "zustand";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useSignStore from "../store/signStore";

const store = create((set) => ({
  isAdminInit: false,
  setIsAdminInit: (isAdminInit) => set({ isAdminInit })
}))

export default function useEnterAdmin() {
	const router = useNavigate();
  const { isAdminInit, setIsAdminInit } = store();
	const { password, setPassword, resetPassword } = useSignStore();
	useEffect(() => {
    if(password==='rkdvudwhd' || password==='ㄱㅏㅇㅍㅕㅇㅈㅗㅇ') return;
    const handleKeyDown = (event) => {
      if (event.key === 'Backspace') {
        resetPassword();
      } else if (event.key.length === 1) {
        setPassword(event.key);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [setPassword, resetPassword, password])
	return { password, isAdminInit, setIsAdminInit, isEnterAdmin: password === 'rkdvudwhd' || password === 'ㄱㅏㅇㅍㅕㅇㅈㅗㅇ' }
}	
