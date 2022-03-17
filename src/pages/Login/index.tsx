import { Container } from './styles';
import { Illustration, LogoDark } from '../../assets';
import SocialBtn from '../../components/SocialBtn';
import { useAuth } from '../../context/AuthContext';
import Animation from '../../components/AnimationLogin';

const Login: React.FC = () => {
  
  const {LoginGoogle} = useAuth()

  async function handleLogin(){
     await LoginGoogle();
  }
  return (
    <Container>
      <section className="content">
        <div className="logo">
          <img src={LogoDark} alt="logo of application" />
        </div>
        <div className="illustration">
          <img src={Illustration} alt="illustration of a woman and man using internet" />
        </div>
        <div className="description">

          <h1>Compartilhe seu ponto de vista sobre determinado tópico!</h1>
          <p>É totalmente free, só que exigimos é que você interaja na plataforma.</p>
        </div>
        <div className="btn">
              <SocialBtn onClick={handleLogin}/>
          </div>
      </section>
      <section className="form">
        <div className="box">
           <div className="headerBox">
              <h2>Sign In</h2>
              <p>Acesse com a sua conta google</p>
          </div> 
          <Animation/>
          <div className="footerBox">
              <SocialBtn onClick={handleLogin}/>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default Login;
