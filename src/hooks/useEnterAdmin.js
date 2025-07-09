import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useSignStore from "../store/signStore";

export default function useEnterAdmin() {
	const router = useNavigate();
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
  }, [setPassword, resetPassword])
  useEffect(() => {
		const handleKeyDown = (event) => {
			if (event.key === 'Enter' && (password === 'rkdvudwhd' || password === 'ㄱㅏㅇㅍㅕㅇㅈㅗㅇ')) {
				router('/admin');
			}
		}
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [password, router])
	return { password, isEnterAdmin: password === 'rkdvudwhd' || password === 'ㄱㅏㅇㅍㅕㅇㅈㅗㅇ' }
}	
