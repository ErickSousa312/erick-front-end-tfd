'use client'
import { usePathname, useSearchParams } from 'next/navigation'

import MainView from '@/app/components/MainLayout/MainContainer'

const pagesWithDefaultLayout:string[] = ['/', '/sobre']

function GetRoute ({ children }):JSX.Element {
    const pathname: string = usePathname();
    const shouldUseDefaultLayout: boolean = pagesWithDefaultLayout.includes(pathname);
    console.log(shouldUseDefaultLayout);
  
    return (
      <>
        {shouldUseDefaultLayout ? (
          <body>{children}</body>
        ) : (
          <MainView>{children}</MainView>
        )}
      </>
    );
  };

export default GetRoute