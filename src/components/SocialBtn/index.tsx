import { Container } from './styles';

import { ButtonHTMLAttributes , ReactNode} from "react";
import {AiOutlineGoogle} from 'react-icons/ai'


type BtnProps = ButtonHTMLAttributes<HTMLButtonElement> 

const SocialBtn: React.FC<BtnProps>= ({ ...rest}) => {
  return (
    <Container
    
      {...rest}
    >
      <div className="icon">
        <AiOutlineGoogle color='#ddd' size={30}/>
      </div>
      Entrar com Google
    </Container>
  );
};

export default SocialBtn;
