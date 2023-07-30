
'use client'
import {createContext, useEffect, useState} from 'react'

const MyContext = createContext<string|null>(null);

export function MyContextProvider({ 
  children}
  :
  {children: React.ReactNode
  }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    const data :string = window.localStorage.getItem('token');
    setData(data);
  }, []);

  return (
    <MyContext.Provider value={data}>
      {children}
    </MyContext.Provider>
  );
}

export default MyContext;