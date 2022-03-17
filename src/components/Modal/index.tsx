import { addDoc, collection, Timestamp } from 'firebase/firestore';
import { FormEvent, useState } from 'react';
import Modal from 'react-modal'
import { useAuth } from '../../context/AuthContext';
import { useModal } from '../../context/ModalContext';
import { db } from '../../services/firebase';
import { Container } from './styles';
Modal.setAppElement('#root');
const ModalComponent: React.FC = () => {
  const {openModal, handleOpenModal} = useModal()
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const {user}=useAuth()


 async function addTopic(event: FormEvent) {
    event.preventDefault();
    if (title.trim() === "" && description.trim() === "") {
      console.log('aqui')
      return
    } 
    try {
       await addDoc(collection(db, "Topics"), {
        title: title,
        description: description,
        user: user,
        likes:[""],
        unLikes: [""],
        date: Timestamp.now()
      });
      setTitle('');
      setDescription('')
      handleOpenModal()
    } catch (e) {
      console.error("Error adding document: ", e);
    } 
  } 

  return (
    
    <Modal
      isOpen={openModal}
      onRequestClose={handleOpenModal}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <Container>
        <h2>
          Adicionar Tópico
        </h2>
      <div className="form">
           <input placeholder='Insira o title...' max={80} value={title} onChange={(e)=>setTitle(e.target.value)} type="text" />
           <textarea placeholder='Insira o conteúdo..' maxLength={300} value={description} onChange={(e)=>setDescription(e.target.value)}  ></textarea>
           <button onClick={addTopic}>Adicionar</button>
      </div>

      </Container>
    </Modal>
  );
};

export default ModalComponent;
