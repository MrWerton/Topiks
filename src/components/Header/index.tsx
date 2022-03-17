import { Link } from 'react-router-dom';
import { BtnNewTopic, Container } from './styles';
import Logo from '../../assets/logoWhite.svg'
import Button from '../Button';
import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useModal } from '../../context/ModalContext';
import {MdOutlineHistoryEdu} from 'react-icons/md'
import {BiHomeAlt} from 'react-icons/bi'
import {FiShare} from 'react-icons/fi'
interface Iheader{
  isActiveHome: boolean
}

const Header: React.FC<Iheader> = ({isActiveHome}) => {
  const {handleOpenModal} = useModal()
  const [openLogoutBtn, setOpenLogoutBtn] = useState(false)
  const {user, signout} = useAuth()
  async function logout(){
    if(user){
      await signout()
    }
  }
  return (
    <Container>
      <div className="contentHeader">
        <div className="logo">
          <img src={Logo}/>
        </div>
        <div className="right">
          <nav className="navbar">
            <ul>
              <li ><Link to='/Home'>
                <BiHomeAlt size={30} color={!isActiveHome? '#777': '#ddd'}/>
                <strong style={{color: !isActiveHome? '#777': '#ddd'}}>Home</strong>
                </Link></li>
              <li><Link to='/MyTopics'>
                <MdOutlineHistoryEdu size={30} color={isActiveHome? '#777': '#ddd'}/>
                <strong style={{color: isActiveHome? '#777': '#ddd'}}>My Topics</strong>
                </Link></li>
            </ul>
          </nav>
           <BtnNewTopic className='btnNewTopic' onClick={()=>handleOpenModal()} >
             <FiShare className='iconbtn' color='#ddd' size={20}/>
             <strong>criar tópico</strong>
             </BtnNewTopic>
           <div className="user">
            <img onClick={()=>setOpenLogoutBtn(!openLogoutBtn)} src={user.photo} alt="profile photo" />
            {openLogoutBtn &&  <button onClick={logout}>Logout</button>}
          </div>
        </div>

      </div>
    </Container>
  );
};

export default Header;
