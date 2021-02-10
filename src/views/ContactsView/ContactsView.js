import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ContactForm from '../../components/ContactForm/ContactForm';
import Filter from '../../components/Filter/Filter';
import ContactList from '../../components/ContactList/ContactList';
// import Container from '../components/Container';
// import TodoList from '../components/TodoList';
// import TodoEditor from '../components/TodoEditor';
// import Filter from '../components/TodoFilter';
// import Stats from '../components/Stats';
// import Modal from '../components/Modal';
// import IconButton from '../components/IconButton';
// import { ReactComponent as AddIcon } from '../icons/add.svg';
// import { todosOperations, todosSelectors } from '../redux/todos';

// export default function ContactsView(params) {
//   const dispatch = useDispatch();
//   const isLoadingTodos = useSelector(todosSelectors.getLoading);

//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const toggleModal = () => setIsModalOpen(state => !state);

//   useEffect(() => dispatch(todosOperations.fetchTodos()), [dispatch]);

//   return (
//     <Container>
//       <div style={barStyles}>
//         <Filter />
//         <Stats />
//         <IconButton onClick={toggleModal} aria-label="Добавить todo">
//           <AddIcon width="40" height="40" fill="#fff" />
//         </IconButton>

//         {isLoadingTodos && <h1>Загружаем...</h1>}
//       </div>

//       <TodoList />

//       {isModalOpen && (
//         <Modal onClose={toggleModal}>
//           <TodoEditor onSave={toggleModal} />
//         </Modal>
//       )}
//     </Container>
//   );
// }

export default function ContactsView() {
  // const dispatch = useDispatch();
  // const isLoadingTodos = useSelector(todosSelectors.getLoading);

  // const [isModalOpen, setIsModalOpen] = useState(false);
  // const toggleModal = () => setIsModalOpen(state => !state);

  // useEffect(() => dispatch(todosOperations.fetchTodos()), [dispatch]);

  return (
    <Container>
      <div className={s.container}>
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    </Container>
  );
}
