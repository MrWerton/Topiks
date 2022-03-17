import { RoutesApp } from './routes';
import { GlobalStyle } from './style/global';
import { AuthProvider } from './context/AuthContext';
import { ModalProvider } from './context/ModalContext';
import ModalComponent from './components/Modal';


function App() {
  return (
   <>
     <AuthProvider>
       <ModalProvider>
          <GlobalStyle/>
          <RoutesApp/>
          <ModalComponent/>
       </ModalProvider>
       </AuthProvider> 
   </>
  );
}

export default App;
