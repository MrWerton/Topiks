import { memo } from 'react';
import { Container } from './styles';

interface Iuser{
    name: string,
    photo: string,
}
interface Icomment{
  text:string,
  id: string,
  user: Iuser,
}

interface Idata{
  data: Icomment
}

const CommentComponent: React.FC<Idata> = ({data}) => {
  console.log(data.user.name)
  return (
    <Container>
      <div className="content">
        <p>
            {data.text}
        </p>
      </div>
      <div className="footer">
        <div className="user">
            <img src={data.user.photo} alt="photo of user" />
            <p className='userName'>{data.user.name}</p>
        </div>
      </div>
    </Container>
  );
};

const Comment = memo(CommentComponent)
export default Comment;
