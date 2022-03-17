import { ReactNode, useEffect, useState } from 'react';
import {useContext, createContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
    interface Iuser{
      name: string,
      photo: string,
      id: string,
  }
    interface IProps{ 
       LoginGoogle: () => Promise<void>;
       signout: () => Promise<void>;
       user: Iuser,
       token: string | null
    }
    interface AuthContextProviderProps{
        children: ReactNode;
    }
    const AuthContext = createContext({} as IProps);

function AuthProvider(props: AuthContextProviderProps){
  const navigate = useNavigate()
  const [user, setUser] = useState<Iuser>({} as Iuser)
  const [token, setToken] = useState<string | null>(null)
  
  const LoginGoogle = async()=>{
  const provider = new GoogleAuthProvider()
  try{
    const response = await signInWithPopup(auth, provider)
    const {photoURL, uid, displayName, refreshToken} = response.user;
    
    if(displayName && photoURL){
      setUser({
        name:displayName,
        photo:photoURL,
        id: uid,
      })
       localStorage.setItem('@Topiks:token', refreshToken)
    }else{
      window.alert('Seu perfil deve possuir foto e nome')
    }
     navigate('/Home')
  }catch(err){
    console.log(err)
  }
}
const auth = getAuth()
async function signout(){
  try {
    localStorage.removeItem('@Topiks:token')
    navigate('/')
  } catch (error) {
    console.log(error)
  }
}

useEffect(() => {
  const tokenA = localStorage.getItem('@Topiks:token')
  setToken(tokenA)
  const unsubscribe = auth.onAuthStateChanged(user => {
    if (user) {
      const { displayName, photoURL, uid } = user
      if (!displayName || !photoURL) {
        throw new Error('Seu perfil deve possuir foto e nome.');
      }
      setUser({
        name:displayName,
        photo:photoURL,
        id: uid,
      })
    }
  })
  return () => {
    unsubscribe();
  }
}, [])
    return(
        <AuthContext.Provider 
        value={{    
            signout,
            token,
            user,
            LoginGoogle,
        }}
      >
        {props.children}
      </AuthContext.Provider>
    )

}

export const useAuth = () => {
    const {
        LoginGoogle,
        user,
        token,
        signout
      } = useContext(AuthContext);
    return {
        user,
        LoginGoogle,
        token,
        signout 
      }
}

export  {AuthProvider};