import { collection, doc, onSnapshot, orderBy, query, queryEqual, updateDoc } from 'firebase/firestore';
import {  useEffect, useState } from 'react';
import Header from '../../components/Header';
import { db } from '../../services/firebase';
import { Container } from './styles';
import ListTopics from '../../components/ListTopics';
import {MdRssFeed} from 'react-icons/md'
import {AiFillFire} from 'react-icons/ai'
import { AnimationEmpty } from '../../components/AnimationEmpty';


interface Iuser{
  name: string,
  photo: string,
  id: string,
}
interface Ivotes{
  like: string[]
  unLike: string[]
}
interface Itopic{
  id: string,
  likes:string[],
  unLikes: string[],
  title: string,
  description: string,
  user: Iuser,
}

const Home: React.FC = () => {
  const [topics, setTopics] = useState<Itopic[]>([])
  const [filter, setFilter] = useState('date')
  
  useEffect(() => {
    const TopicRef = collection(db, "Topics")
    const queries = query(TopicRef, orderBy(filter, "desc"))
    console.log(queries)
    const subscribe = onSnapshot(queries, (snapshot)=>{
     const data = snapshot.docs.map((doc)=>{
        return{
          id: doc.id,
          ...doc.data()
        }
      }) as Itopic[];
        setTopics(data)
    })
    return () => subscribe()
  }, [filter]) 

  return (
    <Container>
      <Header isActiveHome={true}/>
       <div className="navBar">
        <ul>
          <li onClick={()=>setFilter('date')}>
            <MdRssFeed size={30} color={filter === 'date'? "#ddd": '#777'} />
            <strong>Feed</strong></li>
          <li onClick={()=>setFilter('likes')}>
            <AiFillFire size={30} color={filter === 'likes'? "#ddd": '#777'} />
            <strong>Trend</strong></li>
          
        </ul>
      </div> 
      {topics.length !== 0?
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

export default Home;
