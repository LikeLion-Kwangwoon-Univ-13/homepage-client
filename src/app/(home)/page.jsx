import React, { useEffect } from 'react';
import HomeComponentProvider from "@/components/(home)/home";
import useInitStore from "@/store/initStore";
import useSignStore from '../../store/signStore';
import { useNavigate } from 'react-router-dom';
import useEnterAdmin from '../../hooks/useEnterAdmin';

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
  const { init } = useInitStore();
  useEnterAdmin();

  return (
    <div className="relative h-screen">
      <HomeComponentProvider.A />
      <SubComponents init={init} />
    </div>
  )
}