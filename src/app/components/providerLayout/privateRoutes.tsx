// Em "privateRoutes.js"
'use client'
import { useRouter } from 'next/navigation';
import { useCheckUserAuthenticated } from '@/functions/check-user-authenticated';
import { useEffect } from 'react';
import { App_Routes } from '@/constants/app-routes';
import Loading from '../../processo/loading';

type resolvePage= {
  tokenValido: boolean,
  loading:boolean
}

function PrivateRoute({ children }: { children: React.ReactNode }) {
  const { push } = useRouter();

  const { tokenValido, loading }: resolvePage = useCheckUserAuthenticated();

  useEffect(() => {
    if (!loading && !tokenValido) {
      push(App_Routes.public.login);
    }
  }, [tokenValido, loading, push]);

  return (
    <>
      {!tokenValido && null}
      {tokenValido && children}
    </>
  );
}

export default PrivateRoute;
