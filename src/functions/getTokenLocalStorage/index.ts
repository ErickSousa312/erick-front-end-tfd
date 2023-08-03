
import { useState , useEffect } from "react";

function useToken(){
    const [token, setToken] = useState<string | null>(null);
    const storedToken:string = window.localStorage.getItem('token');
    setToken(storedToken);

  return token;
}

export default useToken