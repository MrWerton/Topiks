import {  collection, onSnapshot, orderBy, query, where } from 'firebase/firestore';
import {  useEffect, useState } from 'react';
import Header from '../../components/Header';
import { db } from '../../services/firebase';
import { Container } from './styles';
import ListTopics from '../../components/ListTopics';
import { useAuth } from '../../context/AuthContext';
import { AnimationEmpty } from '../../components/AnimationEmpty';



interface Iuser{
  name: string,
  photo: string,
  id: string,
}

interface Itopic{
  id: string,
  likes:string[],
  unLikes: string[],
  title: string,
  description: string,
  user: Iuser,
}

const MyTopics: React.FC = () => {
  const [topics, setTopics] = useState<Itopic[]>([])
  const {user} = useAuth();

  useEffect(() => {
    const colRef = query(collection(db, "Topics"),where("user.id", "==", user.id) )
    const subscribe = onSnapshot(colRef, (snapshot)=>{
     const data = snapshot.docs.map((doc)=>{
        return{
          id: doc.id,
          ...doc.data()
        }
      }) as Itopic[];
        setTopics(data)
        console.log(data)
    })
    return () => subscribe()
  }, []) 

  return (
    <Container>
      <Header isActiveHome={false}/>
      {topics.length === 0?
      <>
     
      <div className="main">
          <ListTopics data={topics}/>
      </div>
      </>
      :
      <div className='EmptyTopics'>
        <AnimationEmpty/>
        <h2>Crie um tópico!</h2>

      </div>
}
    </Container>
  );
};


export default MyTopics;

