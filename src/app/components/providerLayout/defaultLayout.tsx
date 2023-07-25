'use client'
import { usePathname, useSearchParams } from 'next/navigation'
import { App_Routes } from '@/constants/app-routes'

import MainView from '@/app/components/MainLayout/MainContainer'

const pagesWithoutDefaultLayout:string[] =  Object.values(App_Routes.public)

function GetRoute ({ children }):JSX.Element {
    const pathname: string = usePathname();
    const shouldNotUseDefaultLayout: boolean = pagesWithoutDefaultLayout.includes(pathname);
  
    return (
      <>
        {shouldNotUseDefaultLayout && <div>{children}</div>}
        {!shouldNotUseDefaultLayout && <MainView>{children}</MainView>} 
      </>
    );
  };

export default GetRoute