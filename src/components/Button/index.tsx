import { Container } from './styles';


interface Ibtn {
  title: string;
  OnClick: ()=>void;
}

const Button: React.FC<Ibtn> = ({title, OnClick}) => {
  return (
    <Container onClick={OnClick}>
      {title}
    </Container>
  );
};

export default Button;
