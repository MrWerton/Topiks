import { Container , Message} from './styles';
import ListComment from '../ListComments';
import { useState } from 'react';

import {BiDownArrow, BiUpArrow} from 'react-icons/bi'
import { useAuth } from '../../context/AuthContext';
import { deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { db } from '../../services/firebase';


interface Iuser{
  name: string,
  photo: string,
  id: string,
}
interface Ivotes{
  like: string[]
  unLike: string[]
}
interface Icard{
  id: string,
  likes:string[],
  unLikes: string[],
  title: string,
  description: string,
  user: Iuser,
}
interface Idata{
  data: Icard;
  
}

const CardTopic: React.FC<Idata> = ({data }) => {
  const [showComment, setShowComment] = useState(false)

  const {user} = useAuth()
  const include:boolean = data.likes?.includes(user.id)
  const include2:boolean = data.unLikes?.includes(user.id)
 
  async function upVote(){
    if(include){
      const newV = data.likes.filter((item)=>(
        item !== user.id   
        ))
        const url = doc(db, "Topics", data.id)
        await updateDoc(url, {
          likes: newV 
        }) 
        
    }else{
      const url = doc(db, "Topics", data.id,)
       
        const newV = data.unLikes.filter((item)=>(
          item !== user.id   
          ))
          await updateDoc(url, {
            unLikes: newV 
          }) 
          await updateDoc(url, {
            likes: [...data.likes, user.id]
          }) 
    }
  }
  async function downVote(){
    if(include2){
      const newV = data.unLikes.filter((item)=>(
        item !== user.id   
        ))
        const url = doc(db, "Topics", data.id)
        await updateDoc(url, {
          unLikes: newV 
        }) 
    }else{
        const url = doc(db, "Topics", data.id,)
        const newV = data.likes.filter((item)=>(
          item !== user.id   
          ))
          await updateDoc(url, {
            likes: newV 
          }) 
          await updateDoc(url, {
            unLikes: [...data.unLikes, user.id]
          }) 
    }
  }

  const deleteTopic =async ()=>{
    try{
      await  deleteDoc(doc(db, "Topics", data.id));
    }catch(err){
      console.log(err)
    }
  }
  return (
    <Container>
      <div className="mainCard">
      <div className="votes">
           <BiUpArrow onClick={upVote} size='2rem' color={include?' #5EFF9E':'#ddd'} />
            {data.likes?.length - data.unLikes?.length}
           <BiDownArrow onClick={downVote} size='2rem' color={include2?' #FF9494':'#ddd'}/>
      </div>
     
      <div className="content">
        <strong>
          {data.title}
        </strong>
        <p>
          {data.description}
        </p>
      </div>

      </div>
      <div className="footer">
        <div className="user">
            <img src={data.user.photo} alt="user photo" />
            <div className="cancel">
            <strong>{data.user.name}</strong>
            {data.user.id === user.id && <button onClick={deleteTopic}>Encerrar</button>}
            </div>
        </div>
        <div onClick={()=>setShowComment(true)} className="comments">
            <Message/> 
            <span className='CommentName'>
             comentários</span>
        </div>
      </div>
      {showComment &&
      <ListComment id={data.id} setShowComment={setShowComment}/>
      }
    </Container>
  );
};

export default CardTopic;
