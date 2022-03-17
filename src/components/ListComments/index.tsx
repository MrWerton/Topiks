import { addDoc, collection, onSnapshot, orderBy, query, Timestamp } from 'firebase/firestore';
import { Dispatch, FormEvent, SetStateAction, useEffect, useRef, useState } from 'react';
import { db } from '../../services/firebase';
import Comment from '../Comment';
import { Container } from './styles';
import {IoMdSend} from 'react-icons/io'
import { useAuth } from '../../context/AuthContext';


interface Iuser{
    name: string,
    photo: string,
}
interface Icomments{
    text:string,
    id: string,
    user: Iuser
}
interface Idata{
    setShowComment: Dispatch<SetStateAction<boolean>>;
    id: string,
}
const ListComment: React.FC<Idata> = ({setShowComment, id}) => {
    const {user} = useAuth()
    
    const [comments, setComments] = useState<Icomments[]>([])
    const [text, setText] = useState('')
    const refInput = useRef<HTMLTextAreaElement | null>(null);
    async function addComment(event: FormEvent) {
       event.preventDefault();
        if (text.trim() === "") {
         return
       } 
         try {
          await addDoc(collection(db, "Topics/"+id+"/comments"), {
           text: text,
           user: user,
           date: Timestamp.now()
         }); 
        setText('')
       } catch (e) {
         console.error("Error adding document: ", e);
       } 
       
     }
    useEffect(() => {
        refInput.current?.focus()
        const comRef = collection(db, "Topics/"+id+"/comments")
        const queries = query(comRef, orderBy("date", "desc"))
        const subscribe = onSnapshot(queries, (snapshot)=>{
         const dt = snapshot.docs.map((doc)=>{
            return{
              id: doc.id,
              ...doc.data()
            }
          }) as Icomments[];
            setComments(dt)
        })
        return () => subscribe()
      }, []) 
  return (
    <Container>
        <div className="header">
            <h2> {comments.length} Comments</h2>
            <button onClick={()=>setShowComment(false)}>Fechar</button>
        </div>
        <form onSubmit={addComment} className="post">
            <textarea ref={refInput} value={text} onChange={(e)=>setText(e.target.value)}  placeholder="Adicione um comentário..."/>
            <button type='submit'><IoMdSend color='#ddd' size={20}/></button>
        </form>
         <div className="list">
            {comments.map((item)=>(
                <Comment data={item} key={item.id} />
            ))}
        </div> 
    </Container>
  );
};

export default ListComment;
