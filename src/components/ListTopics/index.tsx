import React from 'react'
import CardTopic from '../CardTopic';
import {Container} from './styles'

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
interface Idata{
    data: Itopic[];
}
const ListTopics:React.FC<Idata>=({data}) =>{
  return (
    <Container>
        {data.map((item, index)=>(
            <CardTopic key={index} data={item}/>
        ))}
    </Container>
  )
}

export default ListTopics