'use client';
import { usePathname, useSearchParams } from 'next/navigation';
import { App_Routes } from '@/constants/app-routes';

import MainContainer from '@/app/components/MainLayout/MainContainer';
import PrivateRoute from './privateRoutes';
import { Theme } from '@radix-ui/themes';

const pagesWithoutDefaultLayout: string[] = Object.values(App_Routes.public);

function GetRoute({ children }): JSX.Element {
  const pathname: string = usePathname();
  const shouldNotUseDefaultLayout: boolean =
    pagesWithoutDefaultLayout.includes(pathname);

  return (
    <>
      {shouldNotUseDefaultLayout && <div>{children}</div>}
      {!shouldNotUseDefaultLayout && <MainContainer>{children}</MainContainer>}
    </>
  );
}

export default GetRoute;
